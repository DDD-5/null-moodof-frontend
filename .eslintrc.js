module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-param-reassign': 'off',
    'react/no-array-index-key': 'off',
    'import/no-cycle': 'off',
    'no-nested-ternary': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
  },
};
