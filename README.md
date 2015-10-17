> # uglify
>
> **Exhibit.js builder plugin**
>
> Minifies JavaScript files with [UglifyJS](https://github.com/mishoo/UglifyJS2).
>
> ```sh
> $ npm install -D exhibit-builder-uglify
> ```
>
> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![devDependency Status][devdepstat-image]][devdepstat-url] [![peerDependency Status][peerdepstat-image]][peerdepstat-url]


## Usage

```js
  .use('uglify', options)
```


## Options

> **`include`** (string/array/function) — default: `**/*.js`

Which files to process. Follows Exhibit’s [glob convention](https://github.com/exhibitjs/exhibit/blob/master/docs/glob-convention.md).

> **`sourceMap`** (boolean) — default: `false`

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

[travis-url]: http://travis-ci.org/exhibitjs/builder-uglify
[travis-image]: https://img.shields.io/travis/exhibitjs/builder-uglify.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/builder-uglify
[depstat-image]: https://img.shields.io/david/exhibitjs/builder-uglify.svg?style=flat-square

[devdepstat-url]: https://david-dm.org/exhibitjs/builder-uglify#info=devDependencies
[devdepstat-image]: https://img.shields.io/david/dev/exhibitjs/builder-uglify.svg?style=flat-square&label=devDeps

[peerdepstat-url]: https://david-dm.org/exhibitjs/builder-uglify#info=peerDependencies
[peerdepstat-image]: https://img.shields.io/david/peer/exhibitjs/builder-uglify.svg?style=flat-square&label=peerDeps
