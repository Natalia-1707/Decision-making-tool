module.exports = {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-clean-order'
    ],
    rules: {
      "color-hex-case": "lower",
      "max-empty-lines": 1,
      "block-no-empty": true,
      "declaration-empty-line-before": "never",
      "order/properties-alphabetical-order": true
    }
  }