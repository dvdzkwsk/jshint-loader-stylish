// based on jshint-stylish by https://github.com/sindresorhus/jshint-stylish
var chalk = require('chalk');

var chalkBlue = (function (isWin32) {
  return isWin32 ? chalk.cyan : chalk.blue;
})(process.platform === 'win32');

module.exports = function (opts) {
  var config = opts || {
    reporter : 'default'
  };

  try {
    return require('./reporters/' + reporter)(config);
  } catch (e) {
    console.log('Could not find reporter: ' + reporter);
    return function (errors) {
      console.log(errors && errors.length ?
        errors.length + ' jshint errors found' :
        'No lint errors found.'
      );
    }
  }
};
