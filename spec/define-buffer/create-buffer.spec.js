const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `CREATE BUFFER hBuffer FOR TABLE "Customer".`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CREATE'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BUFFER'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 21, "scopes": ["source.abl", "variable.other.abl"] },  // 'hBuffer'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TABLE'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 33, "endIndex": 41, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'Customer'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CREATE BUFFER hbuf1
  FOR TABLE BUFFER tt1:HANDLE.       /* From static tt's default buffer */`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CREATE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BUFFER'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "variable.other.abl"] }  // 'hbuf1'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TABLE'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BUFFER'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tt1'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'HANDLE'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 30, "endIndex": 37, "scopes": ["source.abl"] },  // '       '
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 39, "endIndex": 72, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' From static tt's default buffer '
      { "startIndex": 72, "endIndex": 74, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CREATE BUFFER hbuf1 FOR TABLE hbuf.  /* From static tt's default buffer */`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CREATE'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BUFFER'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "variable.other.abl"] },  // 'hbuf1'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 23, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 29, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TABLE'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 34, "scopes": ["source.abl", "variable.other.abl"] },  // 'hbuf'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl"] },  // '  '
    { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
    { "startIndex": 39, "endIndex": 72, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' From static tt's default buffer '
    { "startIndex": 72, "endIndex": 74, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CREATE BUFFER hbuf1
  FOR TABLE TEMP-TABLE tt1:HANDLE.   /* From static tt's handle */`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CREATE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BUFFER'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "variable.other.abl"] }  // 'hbuf1'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TABLE'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TEMP-TABLE'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 26, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tt1'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 27, "endIndex": 33, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'HANDLE'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 39, "endIndex": 64, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' From static tt's handle '
      { "startIndex": 64, "endIndex": 66, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
