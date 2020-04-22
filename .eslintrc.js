module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-unneeded-ternary': 'off',
    'semi': 'off',
    'no-console': 'off',
    'import/first': 'off',
    'import/order': 'off',
  }
}
