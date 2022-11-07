module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "prettier",
    "simple-import-sort"
  ],
  "rules": {
    "camelcase": "error",
    "no-duplicate-imports": "error",
    "no-console": "error",
    "no-alert": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/no-unknown-property":"off",
    "react/no-unescaped-entities ":"off"
  }
}
