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
    { "startIndex": 20, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.dataset.abl"] },  // 'dsData'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'by-reference'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run Foo(input (dataset dsCustomer:handle)).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'Foo'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 15, "endIndex": 22, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'dataset'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.dataset.abl"] },  // 'dsCustomer'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 34, "endIndex": 40, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'handle'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `buffer ttCustomer:buffer-copy(buffer Customer:handle).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'buffer'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttCustomer'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 18, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'buffer-copy'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 30, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'buffer'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'Customer'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 46, "endIndex": 52, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'handle'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run Foo(input buffer Customer:handle).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'Foo'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'buffer'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'Customer'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 30, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'handle'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run Foo(input temp-table ttCustomer:handle).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'Foo'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'temp-table'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'ttCustomer'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 36, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'handle'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
