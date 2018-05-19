const outputDir = 'dist' // should be in ./config.js

module.exports = function* () {
  yield `rm -rf ${outputDir}`
  yield `tsc`
}
