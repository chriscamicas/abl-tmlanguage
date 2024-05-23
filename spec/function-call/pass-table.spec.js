const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `CopyTable(table copytable by-reference).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'CopyTable'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'table'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 25, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'copytable'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 38, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'by-reference'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CopyDataset(dataset dsData by-reference).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'CopyDataset'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 12, "endIndex": 19, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'dataset'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'dsData'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'by-reference'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

