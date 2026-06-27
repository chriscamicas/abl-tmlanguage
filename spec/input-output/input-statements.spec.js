const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `INPUT-OUTPUT  STREAM stream CLOSE.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'INPUT-OUTPUT'
    { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl"] },  // '  '
    { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'STREAM'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 27, "scopes": ["source.abl", "variable.other.abl"] },  // 'stream'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 33, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CLOSE'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];

  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input close.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'close'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];

  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `INPUT-OUTPUT STREAM-HANDLE handle CLOSE.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'INPUT-OUTPUT'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'STREAM-HANDLE'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 33, "scopes": ["source.abl", "variable.other.abl"] },  // 'handle'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 39, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CLOSE'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
