var chalk = require('chalk'),
    table = require('text-table');

var chalkBlue = (function (isWin32) {
  return isWin32 ? chalk.cyan : chalk.blue;
})(process.platform === 'win32');

module.exports = function (config) {
  return function (errors) {
    if (!errors) return;

    var rows = errors.map(function (err) {
      var isError, row;
      if (!err) return;

      isError = err.code[0] === 'E';
      row = [
        '',
        chalk.gray('line ' + err.line),
        chalk.gray('col ' + err.character),
        isError ? chalk.red(err.reason) : chalkBlue(err.reason)
      ];

      if (config.verbose) {
        row.push(chalk.gray('(' + err.code + ')'));
      }
      return row;
    });

    var emitter = this.emitWarning;
    if (!emitter)
        throw new Error("Your module system doesn't support emitWarning. Update availible? \n" + message);
    emitter(table(rows));
  };
};
