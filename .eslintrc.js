module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  env: {
    es6: true,
    amd: true,
    node: true,
    browser: true
  },
  extends: ["prettier", "eslint:recommended"],
  plugins: ["import", "prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};
