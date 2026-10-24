const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `FOR EACH tt-order:
  DELETE tt-order.
END.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EACH'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tt-order'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'DELETE'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tt-order'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FOR EACH tt-order: DELETE tt-order. END.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EACH'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tt-order'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // ':'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'DELETE'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 34, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tt-order'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 39, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  // negative test
  let statement = `delete object v-obj.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'delete'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'object'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "variable.other.abl"] },  // 'v-obj'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
