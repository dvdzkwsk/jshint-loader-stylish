var chalk = require('chalk'),
    slice = [].slice,
    chalkBlue = (function (isWin32) {
      return isWin32 ? chalk.cyan : chalk.blue;
    })(process.platform === 'win32');


function log () {
  var args = slice.apply(arguments);
  console.log.apply(console, [' '].concat(args));
}

module.exports = function (config) {
  return function (errors) {
    if (!errors) return;

    errors.forEach(function (err) {
      var isError;
      if (!err) return;

      isError = err.code && err.code[0] === 'E';
      log(
        chalk.gray('line ' + err.line),
        chalk.gray('col ' + err.character),
        chalk.gray(':: ' + err.evidence.trim())
      );
      log(
        isError ? chalk.red(err.reason) : chalkBlue(err.reason), '\n'
      );
    });
  };
};
