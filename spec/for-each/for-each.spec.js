const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `for each customer no-lock
while i < 10:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] }  // 'no-lock'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'while'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "variable.other.abl"] },  // 'i'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '10'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FOR EACH ttPackedColloItem
    WHERE ttPackedColloItem.ColloID     = ttPackedCollo.ColloID,
    FIRST ttPickedColloItem
    WHERE ttPickedColloItem.OrderNr     = ttPackedColloItem.OrderNr
    AND   ttPickedColloItem.OrderLineNr = ttPackedColloItem.OrderLineNr
    AND   ttPickedColloItem.StockID     = ttPackedColloItem.StockID
    NO-LOCK ON ERROR UNDO, THROW:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EACH'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 26, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'ttPackedColloItem'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WHERE'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 35, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttPackedColloItem.ColloID'
      { "startIndex": 35, "endIndex": 40, "scopes": ["source.abl"] },  // '     '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 63, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttPackedCollo.ColloID'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FIRST'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 27, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'ttPickedColloItem'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WHERE'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 35, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttPickedColloItem.OrderNr'
      { "startIndex": 35, "endIndex": 40, "scopes": ["source.abl"] },  // '     '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 67, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'ttPackedColloItem.OrderNr'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 7, "endIndex": 10, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 10, "endIndex": 39, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttPickedColloItem.OrderLineNr'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 71, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'ttPackedColloItem.OrderLineNr'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 7, "endIndex": 10, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 10, "endIndex": 35, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttPickedColloItem.StockID'
      { "startIndex": 35, "endIndex": 40, "scopes": ["source.abl"] },  // '     '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 67, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'ttPackedColloItem.StockID'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-LOCK'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ON'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ERROR'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'UNDO'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 32, "scopes": ["source.abl", "keyword.other.abl"] },  // 'THROW'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

