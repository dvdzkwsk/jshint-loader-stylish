var chalk = require('chalk');

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
