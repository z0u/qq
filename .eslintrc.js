module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': ['eslint:recommended'],
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2017,
  },
  'plugins': [],
  'rules': {
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'indent': ['error', 2],
    'key-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['off'],
    'no-var': ['error'],
    'no-unused-vars': ['error', { "argsIgnorePattern": "^_" }],
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'always'],
    'prefer-const': ['error', {
        'destructuring': 'any',
        'ignoreReadBeforeAssign': false
    }]
  },
};
