import { resolve } from "path";
import { Legacy } from "@eslint/eslintrc";

interface Options {
  level?: "warn" | "error";
  includeExplicit?: boolean;
}

interface Config {
  rules?: Record<string, any>;
}

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
