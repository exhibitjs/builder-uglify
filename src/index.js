'use strict';

import {extname, basename} from 'path';
import {minify} from 'uglify-js';

export default function (options = {}) {


  return function exhibitUglify(path, contents) {
    const results = {};

    if (extname(path) === '.js') {
      let minified;

      try {
        minified = minify(contents.toString(), {
          fromString: true,
          outSourceMap: options.sourceMap ? basename(path) + '.map' : null,
        });
      }
      catch (error) {
        console.log('ERROR FROM UGLIFY-JS');
        console.dir(error);

        throw new this.SourceError({
          message: error.message,
          path: path,
          contents: contents,
          // TODO: line/column
        });
      }

      const {code, map} = minified;

      results[path] = code;
      if (options.sourceMap) results[`${path}.map`] = map;

      return results;
    }

    return contents;
  };
}
