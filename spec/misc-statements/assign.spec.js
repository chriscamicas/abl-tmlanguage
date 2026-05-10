const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `ASSIGN
   lytd-num-pays = last-num-pays.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] }  // 'ASSIGN'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 3, "endIndex": 16, "scopes": ["source.abl", "variable.other.abl"] },  // 'lytd-num-pays'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 32, "scopes": ["source.abl", "variable.other.abl"] },  // 'last-num-pays'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `lytd-num-pays = EACH-num-pays.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "variable.other.abl"] },  // 'lytd-num-pays'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 29, "scopes": ["source.abl", "variable.other.abl"] },  // 'EACH-num-pays'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var = firST-NUM-pays.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "keyword.operator.abl"] },  // '='
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 20, "scopes": ["source.abl", "variable.other.abl"] },  // 'firST-NUM-pays'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
