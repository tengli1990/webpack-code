const { getOptions } = require('loader-utils')
let acorn = require("acorn");
// import { validateOptions } from 'schema-utils';
// const schema = {
//   type: object,
//   properties: {
//     test: {
//       type: string
//     }
//   }
// }
module.exports = function (source) {
  const options = getOptions(this);
  var comments = [], tokens = [];
  var ast = acorn.parse(JSON.stringify(source), {
    // collect ranges for each node
    ranges: true,
    // collect comments in Esprima's format
    onComment: comments,
    // collect token ranges
    onToken: tokens
  });
  
  // validateOptions(schema, options, 'Example Loader');
  // 在这里写转换 source 的逻辑 ...
  return source

};