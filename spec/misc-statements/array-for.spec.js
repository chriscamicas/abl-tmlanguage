const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `DISPLAY myArray[1 FOR 4].// with and frame are variables`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'DISPLAY'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "variable.other.abl"] },  // 'myArray'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.array.literal.abl", "constant.numeric.abl"] },  // '1'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "meta.array.literal.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.array.literal.abl", "constant.numeric.abl"] },  // '4'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 25, "endIndex": 56, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// with and frame are variables'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
