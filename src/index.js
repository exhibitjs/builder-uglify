import {extname, basename} from 'path';
import {minify} from 'uglify-js';

const permittedOptions = [
  'mangle', 'compress',
];

export default function (options = {}) {
  return function exhibitUglify(path, contents) {
    if (extname(path) === '.js') {
      let minified;

      const minifyOptions = {
        fromString: true,
        outSourceMap: options.sourceMap ? basename(path) + '.map' : null,
      };

      permittedOptions.forEach(name => {
        minifyOptions[name] = options[name];
      });

      try {
        minified = minify(contents.toString(), minifyOptions);
      }
      catch (error) {
        console.error('uglify source error', error);

        throw new this.util.SourceError({
          message: error.message,
          path,
          contents,
          // TODO: line/column
        });
      }

      const {code, map} = minified;

      const results = {
        [path]: code,
      };

      if (options.sourceMap) results[`${path}.map`] = map;

      return results;
    }

    return contents;
  };
}
