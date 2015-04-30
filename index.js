// based on jshint-stylish by https://github.com/sindresorhus/jshint-stylish
var chalk = require('chalk');

var chalkBlue = (function (isWin32) {
  return isWin32 ? chalk.cyan : chalk.blue;
})(process.platform === 'win32');

module.exports = function (opts) {
  var config = opts || {
    style : 'default'
  };

  try {
    return require('./reporters/' + config.style)(config);
  } catch (e) {
    console.log('Could not find reporter style: ' + config.style);
    return function (errors) {
      console.log(errors && errors.length ?
        errors.length + ' jshint errors found' :
        'No lint errors found.'
      );
    }
  }
};
