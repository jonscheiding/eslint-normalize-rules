import { overrideRules } from "../src";

describe("overrideRules()", () => {
  it("sets rule level to 'error' if it is 'warn'", () => {
    const config = {
      rules: {
        "some-rule": "warn",
      },
    };

    const c = overrideRules(config);

    expect(c.rules["some-rule"]).toBe("error");
  });

  it("sets rule level to 'error' if it is 1", () => {
    const config = {
      rules: {
        "some-rule": 1,
      },
    };

    const c = overrideRules(config);

    expect(c.rules["some-rule"]).toBe("error");
  });

  it("handles rules with configuration", () => {
    const config: { rules: Record<string, [number | string, any]> } = {
      rules: {
        "some-rule-1": ["warn", { configured: true }],
        "some-rule-2": [1, { configured: true }],
      },
    };

    const c = overrideRules(config);

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

    const c = overrideRules(config);

    expect(c.rules["some-rule"]).toBe("off");
  });
});
