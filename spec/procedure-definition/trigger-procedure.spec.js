const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `trigger procedure for write of {&file} old buffer old-{&file}.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'trigger'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'procedure'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'write'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl", "keyword.other.abl"] },  // 'of'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 38, "scopes": ["source.abl", "storage.type.function.abl"] },  // '{&file}'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 42, "scopes": ["source.abl", "keyword.other.abl"] },  // 'old'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 49, "scopes": ["source.abl", "keyword.other.abl"] },  // 'buffer'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 50, "endIndex": 54, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'old-'
    { "startIndex": 54, "endIndex": 61, "scopes": ["source.abl", "storage.type.function.abl"] },  // '{&file}'
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `TRIGGER PROCEDURE FOR ASSIGN OF Customer.NAME.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TRIGGER'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'PROCEDURE'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] },  // 'OF'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 45, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Customer.NAME'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `TRIGGER PROCEDURE FOR ASSIGN NEW VALUE value1 AS CHARACTER.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TRIGGER'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'PROCEDURE'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEW'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 38, "scopes": ["source.abl", "keyword.other.abl"] },  // 'VALUE'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "variable.other.abl"] },  // 'value1'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 48, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AS'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 58, "scopes": ["source.abl", "storage.type.abl"] },  // 'CHARACTER'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `TRIGGER PROCEDURE FOR ASSIGN OF table1.field1
NEW VALUE newText LIKE table1.field1
oLD VALUE oldText LIKE table1.field1 .`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TRIGGER'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'PROCEDURE'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] },  // 'OF'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 45, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'table1.field1'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEW'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'VALUE'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 17, "scopes": ["source.abl", "variable.other.abl"] },  // 'newText'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'LIKE'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 36, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'table1.field1'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'oLD'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'VALUE'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 17, "scopes": ["source.abl", "variable.other.abl"] },  // 'oldText'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'LIKE'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 36, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'table1.field1'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})