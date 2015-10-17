import {minify} from 'uglify-js';
import path from 'path';

const permittedOptions = [
  'mangle', 'compress',
];

const defaults = {
  include: '**/*.js',
  sourceMap: false,
};

export default function (options) {
  options = Object.assign({}, defaults, options);

  return function exhibitUglify(job) {
    const {
      matches, file, contents, util: {SourceError},
    } = job;

    if (!matches(options.include)) return contents;

    const minifyOptions = {
      fromString: true,
      outSourceMap: options.sourceMap ? path.basename(file) + '.map' : null,
    };

    permittedOptions.forEach(name => {
      minifyOptions[name] = options[name];
    });

    let minified;
    try {
      minified = minify(contents.toString(), minifyOptions);
    }
    catch (error) {
      throw new SourceError({
        message: error.message,
        file,
        contents,
      });
    }

    const {code, map} = minified;

    const results = {[file]: code};

    if (options.sourceMap) results[`${file}.map`] = map;

    return results;
  };
}
