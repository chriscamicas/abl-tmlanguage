const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `define buffer bCustomer for Customer.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'buffer'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'bCustomer'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'Customer'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement = `define buffer bCustomer for temp-table ttCustomer.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'buffer'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'bCustomer'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttCustomer'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define buffer bCustomer for temp-table ttCustomer label "theCustomer" preselect.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'buffer'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'bCustomer'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttCustomer'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 50, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'label'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 57, "endIndex": 68, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'theCustomer'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 70, "endIndex": 79, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'preselect'
    { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define buffer bCustomer for temp-table ttCustomer label "theCustomer" .`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'buffer'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'bCustomer'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttCustomer'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 50, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'label'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 57, "endIndex": 68, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'theCustomer'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define buffer bCustomer for temp-table ttCustomer preselect serialize-name "theCustomer".

    find first Customer.
    `;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'buffer'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'bCustomer'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttCustomer'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'preselect'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 60, "endIndex": 74, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'serialize-name'
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 76, "endIndex": 87, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'theCustomer'
      { "startIndex": 87, "endIndex": 88, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 88, "endIndex": 89, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] },  // '    '
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'find'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'first'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 23, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Customer'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl"] }  // '    '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define buffer abc-123 for db-table-001.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'buffer'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'abc-123'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'db-table-001'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
