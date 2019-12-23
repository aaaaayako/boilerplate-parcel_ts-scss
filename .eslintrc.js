module.exports = {
  extends: ['prettier'],
  plugins: ['@typescript-eslint'],
  env: { node: true, es6: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {},
}
