# eslint-normalize-rules

This package allows you to generate eslint configs that normalize all the configured rules to the same level (`warn` or `error`).

This is for scenarios where you want to treat all warnings as errors (or vice versa) but you also want to extend configurations that have rules configured at both levels.

## Usage

Example `.eslintrc.js`:

```javascript
const { normalizeRules } = require("eslint-normalize-rules");

const config = {
  extends: ["eslint:recommended", "eslint-standard-with-typescript"],
  rules: {
    "no-var": "warn",
  },
};

module.exports = normalizeRules(config);
```

This will set all rules to `error`, except for `no-var` because it is explicitly set at the config level.
