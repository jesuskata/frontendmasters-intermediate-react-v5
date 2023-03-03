const ERROR = 2;
// const WARN = 1;
const PASS = 0;

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['react', 'import', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': ERROR,
    curly: ERROR,
    'react/prop-types': PASS,
    'react/react-in-jsx-scope': PASS,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
