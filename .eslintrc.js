module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.53', // Flow version
    },
  },
  rules: {
    // no variable declaration
    'no-var': 'error',
    'no-undef': 'error',
    'prefer-destructuring': 'warn',
    /** React Standard (https://github.com/yannickcr/eslint-plugin-react)*/
    'react/jsx-key': [
      'warn',
      {
        checkFragmentShorthand: true,
      },
    ],
    'react/jsx-no-duplicate-props': 'warn',
    'react/require-render-return': 'warn',
    'react/jsx-no-undef': 'error',
    'react/no-unknown-property': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-string-refs': [
      'error',
      {
        noTemplateLiterals: true,
      },
    ],
    'react/no-deprecated': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/display-name': 'warn',
    'react/no-typos': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/destructuring-assignment': ['warn', 'always'],
    /** Code Formating */
    'eol-last': ['error', 'always'],
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    'prettier/prettier': 'warn',
    // allow jsx syntax in js files
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};