var chalk = require('chalk'),
    table = require('text-table');

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

    console.log(table(rows));
  };
};
