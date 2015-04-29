// based on jshint-stylish by https://github.com/sindresorhus/jshint-stylish
var chalk = require('chalk');

var chalkBlue = (function (isWin32) {
  return isWin32 ? chalk.cyan : chalk.blue;
})(process.platform === 'win32');

module.exports = function (opts) {
  var _config = opts || {};

  return function (errors) {
    if (!errors) return;

    errors.forEach(function (err) {
      var isError;
      if (!err) return;

      isError = err.code && err.code[0] === 'E';
      console.log(
        chalk.gray('line ' + err.line),
        chalk.gray('col ' + err.character),
        chalk.gray(':: ' + err.evidence)
      );
      console.log(
        isError ? chalk.red(err.reason) : chalkBlue(err.reason), '\n'
      );
    });
  };
};
