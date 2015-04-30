var chalk = require('chalk');

var chalkBlue = (function (isWin32) {
  return isWin32 ? chalk.cyan : chalk.blue;
})(process.platform === 'win32');

module.exports = function (config) {
  return function (errors) {
    if (!errors) return;

    errors.forEach(function (err) {
      var isError;
      if (!err) return;

      isError = err.code && err.code[0] === 'E';
      console.log(
        ' ',
        chalk.gray('line ' + err.line),
        chalk.gray('col ' + err.character),
        chalk.gray(':: ' + err.evidence.trim())
      );
      console.log(
        isError ? chalk.red(err.reason) : chalkBlue(err.reason), '\n'
      );
    });
  };
};
