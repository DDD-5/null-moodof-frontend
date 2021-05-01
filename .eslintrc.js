module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 1,
    'react/jsx-props-no-spreading': 'off',
  },
};
