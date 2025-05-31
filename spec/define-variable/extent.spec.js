const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `define variable variable-name as int extent no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'variable-name'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'int'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 44, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement = `def var variable-name as int no-undo extent.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'def'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'variable-name'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'int'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement = `def new shared var variable-name as int no-undo extent 123.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'def'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'new'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'shared'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'variable-name'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'int'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 40, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 48, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 55, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '123'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement = `def shared var variable-name as int extent 3 no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'def'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'shared'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'variable-name'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'int'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '3'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement = `def var variable-name as int extent 0x4 no-undo .`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'def'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'variable-name'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'int'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '0x4'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 40, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement = `def shared var variable-name as int extent 3 no-undo initial [-1, -3, -5].`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'def'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'shared'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'variable-name'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'int'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '3'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'initial'
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 62, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '-1'
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '-3'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 70, "endIndex": 72, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '-5'
    { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement = `def shared var variable-name as int extent 3 no-undo initial [2, -3, 0x4].`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'def'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'shared'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'variable-name'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'int'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '3'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'initial'
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '2'
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 65, "endIndex": 67, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '-3'
    { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 69, "endIndex": 72, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '0x4'
    { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `def  var someArray as chara extent 3 no-undo initial ["p", "q", ?].`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'def'
    { "startIndex": 3, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 5, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'someArray'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'chara'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '3'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'initial'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.double.complex.abl"] },  // 'p'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.double.complex.abl"] },  // 'q'
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "constant.language.abl"] },  // '?'
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `    // Default = unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
    var private logical[128] mFlags_Default = [ // NUL SOH STX ETX EOT ENQ ACK BEL
                                                   yes,yes,yes,yes,yes,yes,yes,yes,
                                               // BS  HT  LF  VT  FF  CR  SO  SI
                                                  yes,yes,yes,yes,yes,yes,yes,yes,
                                               // DLE DC1 DC2 DC3 DC4 NAK SYN ETB
                                                  yes,yes,yes,yes,yes,yes,yes,yes,
                                               // CAN EM  SUB ESC FS  GS  RS  US
                                                  yes,yes,yes,yes,yes,yes,yes,yes,
                                               //     !   "   #   $   %   &   '
                                                  yes,yes,yes,yes,yes,yes,yes,yes,
                                               // (   )   *   +   ,   -   .   /
                                                  yes,yes,yes,yes,yes,no ,no ,yes,
                                               // 0   1   2   3   4   5   6   7
                                                  no ,no ,no ,no ,no ,no ,no ,no ,
                                               // 8   9   :   ;   <   =   >   ?
                                                  no ,no ,yes,yes,yes,yes,yes,yes,
                                               // @   A   B   C   D   E   F   G
                                                  yes,no ,no ,no ,no ,no ,no ,no ,
                                               // H   I   J   K   L   M   N   O
                                                  no ,no ,no ,no ,no ,no ,no ,no ,
                                               // P   Q   R   S   T   U   V   W
                                                  no ,no ,no ,no ,no ,no ,no ,no ,
                                               // X   Y   Z   [   \   ]   ^   _
                                                  no ,no ,no ,yes,yes,yes,yes,no ,
                                               //  \`  a   b   c   d   e   f   g
                                                  yes,no ,no ,no ,no ,no ,no ,no ,
                                               // h   i   j   k   l   m   n   o
                                                  no ,no ,no ,no ,no ,no ,no ,no ,
                                               // p   q   r   s   t   u   v   w
                                                  no ,no ,no ,no ,no ,no ,no ,no ,
                                               // x   y   z   {   |   }   ~   DEL
                                                  no ,no ,no ,yes,yes,yes,no ,yes ].`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 70, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// Default = unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'private'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'logical'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '128'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'mFlags_Default'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 48, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// NUL SOH STX ETX EOT ENQ ACK BEL'
    ],
    [
      { "startIndex": 0, "endIndex": 51, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                   '
      { "startIndex": 51, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 55, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 59, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 63, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 67, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 71, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 75, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 79, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 82, "endIndex": 83, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 80, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// BS  HT  LF  VT  FF  CR  SO  SI'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// DLE DC1 DC2 DC3 DC4 NAK SYN ETB'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 80, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// CAN EM  SUB ESC FS  GS  RS  US'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 79, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '//     !   "   #   $   %   &   ''
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 79, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// (   )   *   +   ,   -   .   /'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 72, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 76, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 79, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// 0   1   2   3   4   5   6   7'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 60, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 64, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 72, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 76, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 80, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 79, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// 8   9   :   ;   <   =   >   ?'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 79, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// @   A   B   C   D   E   F   G'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 60, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 64, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 72, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 76, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 80, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 79, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// H   I   J   K   L   M   N   O'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 60, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 64, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 72, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 76, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 80, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 79, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// P   Q   R   S   T   U   V   W'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 60, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 64, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 72, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 76, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 80, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// X   Y   Z   [      ]   ^   _'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 60, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 80, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 79, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '//  `  a   b   c   d   e   f   g'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 60, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 64, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 72, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 76, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 80, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 79, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// h   i   j   k   l   m   n   o'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 60, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 64, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 72, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 76, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 80, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 79, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// p   q   r   s   t   u   v   w'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 60, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 64, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 72, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 76, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 80, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                               '
      { "startIndex": 47, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl", "comment.line.double-slash.abl"] }  // '// x   y   z   {   |   }   ~   DEL'
    ],
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl"] },  // '                                                  '
      { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 60, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 69, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 70, "endIndex": 73, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 76, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'no'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
      { "startIndex": 82, "endIndex": 83, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 83, "endIndex": 84, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `method public character extent 12 BuildQueryStrings(input pFilter as IGetDataRequest).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "meta.define.method.abl", "constant.numeric.source.abl"] },  // '12'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'BuildQueryStrings'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 52, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 58, "endIndex": 65, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pFilter'
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 69, "endIndex": 84, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'IGetDataRequest'
    { "startIndex": 84, "endIndex": 85, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 85, "endIndex": 86, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public character extent BuildQueryStrings(input pFilter as IGetDataRequest).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 48, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'BuildQueryStrings'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 49, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 55, "endIndex": 62, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pFilter'
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 63, "endIndex": 65, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 66, "endIndex": 81, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'IGetDataRequest'
    { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 82, "endIndex": 83, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})