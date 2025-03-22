const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `create customer.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'create'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `create dictdb.customer.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'create'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'dictdb.customer'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `create dictdb.customer  FOR TENANT tenant-expression .`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'create'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'dictdb.customer'
    { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl"] },  // '  '
    { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 34, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TENANT'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 52, "scopes": ["source.abl", "variable.other.abl"] },  // 'tenant-expression'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

