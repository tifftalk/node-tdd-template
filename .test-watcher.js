// simple example for mocha (you must have mocha installed)
module.exports = {
    testFileSuffix: '-test', // x.js would have a test file called x-test.js
    testsDirName: 'tests', // foo/bar/x.js would have a test file foo/bar/_tests/x-test.js
    runner: 'mocha', // use the provided "mocha" runner (or your own implementation as a function)
    params: ['-R', 'spec'] // additional parameters to be included when the test is run
  };