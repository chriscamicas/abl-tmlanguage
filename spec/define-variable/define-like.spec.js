const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `define variable cSomethibng like tabvle.field no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'cSomethibng'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'like'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'tabvle.field'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable cSomethibng like database.table.field no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'cSomethibng'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'like'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'database.table.field'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 54, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable cSomethibng like field-name no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'cSomethibng'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'like'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'field-name'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 44, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable cSomethibng like fieldname no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'cSomethibng'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'like'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'fieldname'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})