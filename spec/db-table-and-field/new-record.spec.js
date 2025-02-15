const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `if new ( customer) then message 'new'.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 33, "endIndex": 36, "scopes": ["source.abl", "string.single.complex.abl"] },  // 'new'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new customer then message 'new'.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 30, "endIndex": 33, "scopes": ["source.abl", "string.single.complex.abl"] },  // 'new'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new ( s2k.customer) then message 'new'.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 21, "scopes": ["source.abl", "storage.data.table.abl"] },  // 's2k.customer'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 37, "endIndex": 40, "scopes": ["source.abl", "string.single.complex.abl"] },  // 'new'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new s2k.customer then message 'new'.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 19, "scopes": ["source.abl", "storage.data.table.abl"] },  // 's2k.customer'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 24, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 32, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl", "string.single.complex.abl"] },  // 'new'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new ( _index-field) then message 'new'.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 21, "scopes": ["source.abl", "storage.data.table.abl"] },  // '_index-field'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 37, "endIndex": 40, "scopes": ["source.abl", "string.single.complex.abl"] },  // 'new'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new _field then message 'new'.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "storage.data.table.abl"] },  // '_field'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 28, "endIndex": 31, "scopes": ["source.abl", "string.single.complex.abl"] },  // 'new'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
