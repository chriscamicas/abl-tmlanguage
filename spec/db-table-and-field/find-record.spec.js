const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `FIND z_anchor.z_print WHERE
                z_anchor.z_print.printer-name = p-output NO-LOCK NO-ERROR.
  IF AVAILABLE z_anchor.z_print THEN DO:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FIND'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 21, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'z_anchor.z_print'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] }  // 'WHERE'
    ],
    [
      { "startIndex": 0, "endIndex": 16, "scopes": ["source.abl"] },  // '                '
      { "startIndex": 16, "endIndex": 45, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'z_anchor.z_print.printer-name'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 48, "endIndex": 56, "scopes": ["source.abl", "variable.other.abl"] },  // 'p-output'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 64, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-LOCK'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 73, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-ERROR'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'IF'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 14, "scopes": ["source.abl", "support.function.abl"] },  // 'AVAILABLE'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 31, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'z_anchor.z_print'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 36, "scopes": ["source.abl", "keyword.other.abl"] },  // 'THEN'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'DO'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FIND z_print WHERE
                z_print.printer-name = p-output NO-LOCK NO-ERROR.
  IF AVAILABLE z_print THEN DO:
`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FIND'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 12, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'z_print'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] }  // 'WHERE'
    ],
    [
      { "startIndex": 0, "endIndex": 16, "scopes": ["source.abl"] },  // '                '
      { "startIndex": 16, "endIndex": 36, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'z_print.printer-name'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 47, "scopes": ["source.abl", "variable.other.abl"] },  // 'p-output'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 48, "endIndex": 55, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-LOCK'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 64, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-ERROR'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'IF'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 14, "scopes": ["source.abl", "support.function.abl"] },  // 'AVAILABLE'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'z_print'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'THEN'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'DO'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

