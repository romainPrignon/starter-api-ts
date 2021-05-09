module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020
    // project: './tsconfig.json' no need
  },
  plugins: [
    '@typescript-eslint',
    'functional'
  ],
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'standard',
    'plugin:functional/external-recommended',
    'plugin:functional/no-mutations'
  ],
  rules: {
    'no-multiple-empty-lines': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    'functional/immutable-data': ['error', {
      ignorePattern: 'this.'
    }],
    'functional/no-let': 'off',
    'functional/prefer-readonly-type': 'off'
  }
}
