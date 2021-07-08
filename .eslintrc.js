'use strict'

module.exports = {
  extends: [
    require.resolve('./packages/base/index'),
    require.resolve('./packages/prettier/index')
  ]
  // rules: {
  //     "node/no-extraneous-require": "off",
  //     "node/no-unpublished-require": "off",
  // },
}
