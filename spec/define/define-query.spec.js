const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `DEFINE QUERY br-items FOR temp-aropen SCROLLING.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'QUERY'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'br-items'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'temp-aropen'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SCROLLING'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `DEFINE NEW SHARED PRIVATE  PROTECTED STATIC
  QUERY query
  FOR buffer-name , buffer-name FIELDS  ( field, field )
    EXCEPT ( field, field)
   CACHE n
   SCROLLING
   RCODE-INFORMATION.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'NEW'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SHARED'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'PRIVATE'
      { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 27, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'PROTECTED'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'STATIC'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'QUERY'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'query'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FOR'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'buffer-name'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ', '
      { "startIndex": 20, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'buffer-name'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELDS'
      { "startIndex": 38, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'field'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl"] },  // ','
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 49, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'field'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.js"] },  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'EXCEPT'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'field'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ','
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'field'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.js"] },  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl"] },  // '   '
      { "startIndex": 3, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'CACHE'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'n'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl"] },  // '   '
      { "startIndex": 3, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SCROLLING'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl"] },  // '   '
      { "startIndex": 3, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.language.abl"] },  // 'RCODE-INFORMATION'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] },  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
