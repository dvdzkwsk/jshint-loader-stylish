JSHint-Loader Stylish Reporter
==============================

As a big fan of [jshint-stylish](https://github.com/sindresorhus/jshint-stylish), I really wanted to use it with a webpack-based build system. However, [jshint-loader](https://github.com/webpack/jshint-loader) isn't compatible with normal reporters, so instead I forked jshint-stylish to create this! Error reporting resembles that of jshint, with a few slight differences. For example, errors returned from jshint-loader don't include file names, only line numbers, evidence strings, and other miscellaneous data. As a result, the report doesn't include file-specific sections, but is instead a single list of error messages.

## Usage

```js
// webpack.config.js
var stylishReporter = require('jshint-loader-stylish')({
  // no options yet...
});

module.exports = exports = {
  module : {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint'
    }],
  },
  jshint : {
    reporter : stylishReporter
  }
};
```

## Options

## TODO
* [ ] Document config options
* [ ] Config flag to show evidence property

## Credit

Based on [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) by [sindresorhus](https://github.com/sindresorhus).
