module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  rules: {
    'color-hex-alpha': 'always',
    'color-hex-length': 'short',
    'block-no-empty': true,
    'declaration-empty-line-before': 'never',
    'order/properties-alphabetical-order': null,
  },
};
