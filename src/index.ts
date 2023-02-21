import { Legacy } from "@eslint/eslintrc";

interface HasRules {
  rules: Record<string, any> | null;
}

export function overrideRules<T extends HasRules>(config: T): T {
  const factory = new Legacy.ConfigArrayFactory({
    getEslintAllConfig: () => require("node_modules/eslint/conf/eslint-all"),
    getEslintRecommendedConfig: () =>
      require("node_modules/eslint/conf/eslint-recommended"),
  });

  const results = factory.create(config);

  const rules: Record<string, any> = {};

  for (const result of results) {
    if (result.rules == null) continue;

    Object.assign(rules, result.rules);
  }

  for (const rule of Object.keys(rules)) {
    if (rules[rule] === "warn" || rules[rule] === 1) {
      rules[rule] = "error";
    }
    if (rules[rule][0] === "warn" || rules[rule][0] === 1) {
      rules[rule][0] = "error";
    }
  }

  return {
    ...config,
    rules,
  };
}
