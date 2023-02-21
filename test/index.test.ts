import { normalizeRules } from "../src";

describe(normalizeRules.name, () => {
  it("sets rule level to 'error' if it is 'warn'", () => {
    const config = {
      rules: {
        "some-rule": "warn",
      },
    };

    const c = normalizeRules(config, { includeExplicit: true });

    expect(c.rules["some-rule"]).toBe("error");
  });

  it("sets rule level to 'error' if it is 1", () => {
    const config = {
      rules: {
        "some-rule": 1,
      },
    };

    const c = normalizeRules(config, { includeExplicit: true });

    expect(c.rules["some-rule"]).toBe("error");
  });

  it("handles rules with configuration", () => {
    const config: { rules: Record<string, [number | string, any]> } = {
      rules: {
        "some-rule-1": ["warn", { configured: true }],
        "some-rule-2": [1, { configured: true }],
      },
    };

    const c = normalizeRules(config, { includeExplicit: true });

    expect(c.rules["some-rule-1"]).toHaveProperty("[0]", "error");
    expect(c.rules["some-rule-1"]).toHaveProperty("[1].configured", true);
    expect(c.rules["some-rule-2"]).toHaveProperty("[0]", "error");
    expect(c.rules["some-rule-2"]).toHaveProperty("[1].configured", true);
  });

  it("leaves rule off if it is off", () => {
    const config = {
      rules: {
        "some-rule": "off",
      },
    };

    const c = normalizeRules(config, { includeExplicit: true });

    expect(c.rules["some-rule"]).toBe("off");
  });

  it("allows setting the level to warning instead of error", () => {
    const config = {
      rules: {
        "off-rule": "off",
        "warn-rule": "warn",
        "error-rule": "error",
      },
    };

    const c = normalizeRules(config, { level: "warn", includeExplicit: true });

    expect(c.rules["off-rule"]).toBe("off");
    expect(c.rules["warn-rule"]).toBe("warn");
    expect(c.rules["error-rule"]).toBe("warn");
  });

  it("sets levels for extended configs", async () => {
    const upstreamConfig = await import("eslint-config-standard");

    const config = {
      extends: ["standard"],
      rules: {},
    };

    const c = normalizeRules(config, { includeExplicit: true });

    expect(c.rules["no-var"]).toBe("error");

    //
    // Validate that the source is still what we assume
    //
    expect(upstreamConfig.rules["no-var"]).toBe("warn");
  });

  it("sets levels for override rules", async () => {
    const upstreamConfig = await import(
      "eslint-config-standard-with-typescript"
    );

    const config = {
      extends: ["standard-with-typescript"],
      rules: {},
    };

    const c = normalizeRules(config, { level: "warn", includeExplicit: true });

    expect(c.rules["@typescript-eslint/no-var-requires"]).toBe("warn");
    //
    // Validate that the source is still what we assume
    //
    expect(
      upstreamConfig.overrides[0].rules["@typescript-eslint/no-var-requires"]
    ).toBe("error");
  });

  it("works with recommended config", () => {
    const config = {
      extends: ["eslint:recommended"],
      rules: {},
    };

    const c = normalizeRules(config, { level: "warn", includeExplicit: true });

    expect(c.rules["constructor-super"]).toBe("warn");
  });

  it("works with all config", () => {
    const config = {
      extends: ["eslint:all"],
      rules: {},
    };

    const c = normalizeRules(config, { level: "warn", includeExplicit: true });

    expect(c.rules["constructor-super"]).toBe("warn");
  });

  it("only overrides extended rules by default", () => {
    const config = {
      extends: ["standard"],
      rules: {
        "no-var": "warn",
      },
    };

    const c = normalizeRules(config);

    expect(c.rules["no-var"]).toBe("warn");
  });
});
