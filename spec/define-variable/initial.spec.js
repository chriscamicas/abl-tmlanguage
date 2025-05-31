const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `DEFINE VARIABLE RANCH AS CHARACTER INIT "HEY" NO-UNDO.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'VARIABLE'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'RANCH'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'CHARACTER'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'INIT'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 41, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'HEY'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'NO-UNDO'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `DEFINE VARIABLE ANT AS CHARACTER INiTIAL "OK" NO-UNDO.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'VARIABLE'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'ANT'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'CHARACTER'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'INiTIAL'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'OK'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'NO-UNDO'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `DEFINE VARIABLE RANCH2 AS CHARACTER extent 3 INIT ["HEY", "hop", 'sd'] NO-UNDO.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'VARIABLE'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'RANCH2'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'CHARACTER'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '3'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'INIT'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 52, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.double.complex.abl"] },  // 'HEY'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 59, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.double.complex.abl"] },  // 'hop'
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.single.complex.abl"] },  // 'sd'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 71, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'NO-UNDO'
    { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `DEFINE VARIABLE BRANCH2 AS int64  extent 3 INIT [6,7,8] NO-UNDO.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'VARIABLE'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'BRANCH2'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'int64'
    { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 34, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '3'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'INIT'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '6'
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '7'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '8'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 56, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'NO-UNDO'
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
