const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `define static public event AnEvent signature void().`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'static'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'event'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'AnEvent'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'signature'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'void'
    { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl"] },  // '()'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define static public event AnEvent signature void(s as Progress.Lang.Object, e as System.EventArgs).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'static'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'event'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'AnEvent'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'signature'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'void'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // '('
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "variable.parameter.abl"] },  // 's'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 52, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 55, "endIndex": 75, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
    { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.define.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "variable.parameter.abl"] },  // 'e'
    { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 79, "endIndex": 81, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 82, "endIndex": 98, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'System.EventArgs'
    { "startIndex": 98, "endIndex": 99, "scopes": ["source.abl", "meta.define.abl"] },  // ')'
    { "startIndex": 99, "endIndex": 100, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

