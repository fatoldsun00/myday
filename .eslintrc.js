# TODO: we could use this one
# https://github.com/facebook/react-native/blob/f7e4c07c84b636fc33c64b434964c8a64c43438f/packages/eslint-config-react-native-community/index.js
# extends: '@react-native-community'
root: true
env:
  browser: true
  es2021: true
  node: true
  jest: true
extends:
  - 'eslint:recommended'
  - 'plugin:import/recommended'
  - 'plugin:react/recommended'
  - 'plugin:@typescript-eslint/recommended'
  # If we want to ensure typing is always correct
  # - 'plugin:@typescript-eslint/recommended-requiring-type-checking'
  - 'plugin:prettier/recommended'
  - 'prettier'
parser: '@typescript-eslint/parser'
parserOptions:
  ecmaFeatures:
    jsx: true
  ecmaVersion: 12
  sourceType: module
  project: './tsconfig.json'
  tsconfigRootDir: './'
plugins:
  - react
  - '@typescript-eslint'
  - 'import'
  - 'prettier'
settings:
  import/resolver:
    typescript: {}
  react:
    version: detect
rules:
  '@typescript-eslint/no-unused-vars': [ 'error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true } ]
  indent: [ 'error', 2, { 'SwitchCase': 1 } ]
  'import/order': [ 'error', {
    alphabetize: { order: 'asc',caseInsensitive: true },
    'newlines-between': 'always',
    groups: [ [ 'builtin', 'external', 'internal' ], [ 'index', 'sibling', 'parent', 'object', 'type' ] ] } ]
  'no-unused-vars': 'off'
  'no-return-assign': [ 'error', 'except-parens' ]
  'prefer-const': [ 'error', { destructuring: 'all' } ]
  'prefer-destructuring': [ 'off', { array: false, object: true } ]
  'react/prop-types': 'off'
  '@typescript-eslint/no-empty-function': ["error", { "allow": ["arrowFunctions"] }]



