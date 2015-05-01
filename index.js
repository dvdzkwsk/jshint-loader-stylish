var chalk = require('chalk');

// shallow extend
function extend (base, config) {
  for (prop in config) {
    if (config.hasOwnProperty(prop)) {
      base[prop] = config[prop];
    }
  }
  return base;
}

module.exports = function (opts) {
  var config = extend({
    style : 'default'
  }, opts || {});

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
