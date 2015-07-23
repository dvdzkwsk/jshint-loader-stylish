JSHint-Loader Stylish Reporter
==============================

**Notice**: This package is no longer being maintained, as [ESLint](http://eslint.org/) is prefered over JSHint for Webpack (especially since it can reference source files, not just line numbers). Please check that out instead, it's pretty awesome!

As a big fan of [jshint-stylish](https://github.com/sindresorhus/jshint-stylish), I really wanted to use it with a webpack-based build system. However, [jshint-loader](https://github.com/webpack/jshint-loader) isn't compatible with normal reporters, so instead I forked jshint-stylish to create this! Error reporting resembles that of jshint, with a few slight differences due to what error data is returned from jshint-loader.

## Usage

`npm install --save-dev jshint-loader-stylish`

```js
// webpack.config.js
var stylishReporter = require('jshint-loader-stylish')({
  // options...
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

## Reporter Styles

Since the regular jshint-stylish output doesn't work as well when errors can't be sorted by file, the default output has been adjusted slightly to give you a bit more information:

![default reporter](docs/default-reporter.png)

If you wish to enable the reporter that more closely adheres to vanilla jshint-stylish output, set the `style` configuration property to "true-stylish".

```js
require('jshint-loader-stylish')({
  style : 'true-stylish'
});
```

![true-stylish reporter](docs/true-stylish-reporter.png)

## Options

### `style` [string]

Use the `style` configuration to reference the name of the reporter style you wish to use. These can be found in `jshint-loader-stylish/reporters`.

## TODO
* [ ] Is there a way to get jshint-loader to reference file names?

## Credits

Based on [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) by [sindresorhus](https://github.com/sindresorhus).
