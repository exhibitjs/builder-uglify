# exhibit-builder-uglify [![NPM version][npm-image]][npm-url] [![Dependency Status][depstat-image]][depstat-url]

> [Exhibit.js](https://github.com/exhibitjs/exhibit) builder plugin for minifying JavaScript files with [UglifyJS](https://github.com/mishoo/UglifyJS2).


## Installation

```sh
$ npm install --save-dev exhibit-builder-uglify
```


## Usage

```js
exhibit('src')
  .use('uglify', options)
  .build('dist');
```


## Options

### `sourceMap`

Default: `null`

Whether to output a source map.

### Other options

These are passed straight through to `UglifyJS.minify`:

- `compress` (default: `true`)
- `mangle` (default `true`)


## License

MIT


<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/exhibit-builder-uglify
[npm-image]: https://img.shields.io/npm/v/exhibit-builder-uglify.svg?style=flat-square

[travis-url]: http://travis-ci.org/exhibitjs/exhibit-builder-uglify
[travis-image]: https://img.shields.io/travis/exhibitjs/exhibit-builder-uglify.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/exhibit-builder-uglify
[depstat-image]: https://img.shields.io/david/exhibitjs/exhibit-builder-uglify.svg?style=flat-square
