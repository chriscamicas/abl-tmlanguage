const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `release bufCustomer.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'release'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 19, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'bufCustomer'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `release object hCom.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'release'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'object'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 19, "scopes": ["source.abl", "variable.other.abl"] },  // 'hCom'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `release external "dll.so".`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'release'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 16, "scopes": ["source.abl", "keyword.other.abl"] },  // 'external'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 18, "endIndex": 24, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'dll.so'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
