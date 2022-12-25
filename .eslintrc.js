module.exports = exports = {
  extends: 'react-app',
  rules: {
    'linebreak-style': 'error',
    'default-case': 'off',
    // 'react-hooks/rules-of-hooks': "off",
    'react-hooks/exhaustive-deps': 'off',
    'no-throw-literal': 'off',
    'no-unused-vars': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unstable-nested-components': 'error',
    'import/newline-after-import': 'error',
    'newline-before-return': 'error'
  }
}
