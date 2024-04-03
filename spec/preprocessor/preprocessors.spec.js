const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `define variable i as integer no-undo init {&DEBUG-WAIT}.      // set to 20`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'i'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'integer'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'init'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 42, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '{&DEBUG-WAIT}'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 56, "endIndex": 62, "scopes": ["source.abl"] },  // '      '
    { "startIndex": 62, "endIndex": 74, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// set to 20'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})