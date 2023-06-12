module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {},
};
