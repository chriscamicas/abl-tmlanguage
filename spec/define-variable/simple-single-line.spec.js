const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `define variable variable-name as int no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 16, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 33, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 37, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement = `def var variable-name as int no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 8, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 25, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 29, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement = `def new shared var variable-name as int no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 15, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 19, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 33, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 36, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 40, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement = `def shared var variable-name as int no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 32, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 36, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement = `def var variable-name as int no-undo .`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 8, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 25, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 29, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
