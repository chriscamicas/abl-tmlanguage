const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `disp tbl1.cono tbl2.vendorno tbl3.custno tbl3.vendorno cono vendorno.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'disp'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 14, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tbl1.cono'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tbl2.vendorno'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tbl3.custno'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 54, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tbl3.vendorno'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 55, "endIndex": 59, "scopes": ["source.abl", "variable.other.abl"] },  // 'cono'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 60, "endIndex": 68, "scopes": ["source.abl", "variable.other.abl"] },  // 'vendorno'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `find fitaaaqfasf`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'find'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 16, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'fitaaaqfasf'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if first-of(tbl.accountno) then do:
  for each tbl2 where tbl2.cono = 123
                  and tbl2.vendorno = tbl.vendorno
                  and tbl2.accountno  = tbl.accountno
                  and tbl2.descriptioncd = "" no-lock:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'first-of'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 12, "endIndex": 25, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tbl.accountno'
      { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl"] },  // ') '
      { "startIndex": 27, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 34, "endIndex": 36, "scopes": ["source.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 15, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tbl2'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 31, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tbl2.cono'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '123'
    ],
    [
      { "startIndex": 0, "endIndex": 18, "scopes": ["source.abl"] },  // '                  '
      { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'and'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 35, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tbl2.vendorno'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 50, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'tbl.vendorno'
    ],
    [
      { "startIndex": 0, "endIndex": 18, "scopes": ["source.abl"] },  // '                  '
      { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'and'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 36, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tbl2.accountno'
      { "startIndex": 36, "endIndex": 38, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 53, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'tbl.accountno'
    ],
    [
      { "startIndex": 0, "endIndex": 18, "scopes": ["source.abl"] },  // '                  '
      { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'and'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 40, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tbl2.descriptioncd'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 53, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
      { "startIndex": 53, "endIndex": 55, "scopes": ["source.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `//exclusive-lock:
//no-lock:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 17, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '//exclusive-lock:'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '//no-lock:'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})