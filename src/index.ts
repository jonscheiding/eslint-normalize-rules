import { resolve } from "path";
import { Legacy } from "@eslint/eslintrc";

/**
 * Options type for rule normalization.
 */
interface Options {
  /**
   * The level to normalize rules to. Defaults to 'error'.
   */
  level?: "warn" | "error";
  /**
   * If true, normalizes rules specified in the top-level config's `rules`
   * property; otherwise, only normalizes rules inherited from extended configs.
   * Defaults to false.
   */
  includeExplicit?: boolean;
}

/**
 * Helper interface for eslint config.
 */
interface Config {
  /**
   * The rules defined at the top level of the config.
   */
  rules?: Record<string, any>;
}

/**
 * Normalize the rules in an eslint configuration.
 * Sets all rules to the same level ('error' by default) unless their level
 * is explicitly specified in the config's own rules property.
 *
 * @param config The configuration
 * @param options Options for rule normalization
 * @returns
 */
export function normalizeRules<T extends Config>(
  config: T,
  options?: Options
): T {
  const level = options?.level ?? "error";
  const includeExplicit = options?.includeExplicit ?? false;
  const eslintPath = require.resolve("eslint");

  const needsToChange = (value: any): boolean =>
    value !== level && value !== "off" && value !== 0;

  const explicitRules: Record<string, any> = config.rules ?? {};

  const factory = new Legacy.ConfigArrayFactory({
    getEslintAllConfig: () =>
      require(resolve(eslintPath, "../../conf/eslint-all")),
    getEslintRecommendedConfig: () =>
      require(resolve(eslintPath, "../../conf/eslint-recommended")),
  });

  const results = factory.create(config);

  const rules: Record<string, any> = {};

  for (const result of results) {
    if (result.rules == null) continue;

    Object.assign(rules, result.rules);
  }

  for (const rule of Object.keys(rules)) {
    switch (typeof rules[rule]) {
      case "string":
      case "number":
        if (needsToChange(rules[rule])) {
          rules[rule] = level;
        }
        break;
      default:
        if (Array.isArray(rules[rule]) && needsToChange(rules[rule][0])) {
          rules[rule][0] = level;
        }
        break;
    }
  }

  if (!includeExplicit) {
    Object.assign(rules, explicitRules);
  }

  return {
    ...config,
    rules,
  };
}
