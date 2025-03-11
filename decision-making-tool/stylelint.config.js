module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  rules: {
    'color-hex-alpha': 'always',
    'color-hex-length': 'short',
    'block-no-empty': true,
    'declaration-empty-line-before': 'never',
    'order/properties-alphabetical-order': null,
    'order/properties-order': [
      'width',
      'height',
      'font-family',
      'background-color',
      'transition',
      'border',
      'box-shadow',
    ],
  },
};
