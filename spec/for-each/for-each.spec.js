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
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "keyword.operator.abl"] },  // '<'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "constant.numeric.abl"] },  // '10'
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
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
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
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 67, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'ttPackedColloItem.OrderNr'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 7, "endIndex": 10, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 10, "endIndex": 39, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttPickedColloItem.OrderLineNr'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 71, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'ttPackedColloItem.OrderLineNr'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 7, "endIndex": 10, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 10, "endIndex": 35, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttPickedColloItem.StockID'
      { "startIndex": 35, "endIndex": 40, "scopes": ["source.abl"] },  // '     '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
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

describe('', () => {
  let statement = `for FIRST web-cart /*FIELDS (web-key bom-key kit-seq-num SYSTEM-ID)*/ WHERE
                     web-cart.system-id = user-ctl.system-id[14] AND
                     web-cart.web-key = DECIMAL(ip-web-key)
                     NO-LOCK,
               FIRST web-track /*FIELDS (user-id ship-via cust-seq-num cust-po-number web-status order-num SYSTEM-ID
                                       card-number)*/ WHERE
                     web-track.system-id = user-ctl.system-id[{&web-track-sys-id}] AND
                     web-track.web-key = DECIMAL(web-cart.web-key)
                     NO-LOCK:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FIRST'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-cart'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "comment.block.abl"] },  // '/*'
      { "startIndex": 21, "endIndex": 67, "scopes": ["source.abl", "comment.block.abl", "comment"] },  // 'FIELDS (web-key bom-key kit-seq-num SYSTEM-ID)'
      { "startIndex": 67, "endIndex": 69, "scopes": ["source.abl", "comment.block.abl"] },  // '*/'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 70, "endIndex": 75, "scopes": ["source.abl", "keyword.other.abl"] }  // 'WHERE'
    ],
    [
      { "startIndex": 0, "endIndex": 21, "scopes": ["source.abl"] },  // '                     '
      { "startIndex": 21, "endIndex": 39, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-cart.system-id'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 60, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'user-ctl.system-id'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 61, "endIndex": 63, "scopes": ["source.abl", "meta.array.literal.abl", "constant.numeric.abl"] },  // '14'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 68, "scopes": ["source.abl", "keyword.other.abl"] }  // 'AND'
    ],
    [
      { "startIndex": 0, "endIndex": 21, "scopes": ["source.abl"] },  // '                     '
      { "startIndex": 21, "endIndex": 37, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-cart.web-key'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 47, "scopes": ["source.abl", "support.function.abl"] },  // 'DECIMAL'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 48, "endIndex": 58, "scopes": ["source.abl", "variable.other.abl"] },  // 'ip-web-key'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.brace.round.abl"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 21, "scopes": ["source.abl"] },  // '                     '
      { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-LOCK'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 15, "scopes": ["source.abl"] },  // '               '
      { "startIndex": 15, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FIRST'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 30, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-track'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "comment.block.abl"] },  // '/*'
      { "startIndex": 33, "endIndex": 117, "scopes": ["source.abl", "comment.block.abl", "comment"] }  // 'FIELDS (user-id ship-via cust-seq-num cust-po-number web-status order-num SYSTEM-ID'
    ],
    [
      { "startIndex": 0, "endIndex": 51, "scopes": ["source.abl", "comment.block.abl", "comment"] },  // '                                       card-number)'
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "comment.block.abl"] },  // '*/'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 59, "scopes": ["source.abl", "keyword.other.abl"] }  // 'WHERE'
    ],
    [
      { "startIndex": 0, "endIndex": 21, "scopes": ["source.abl"] },  // '                     '
      { "startIndex": 21, "endIndex": 40, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-track.system-id'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 43, "endIndex": 61, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'user-ctl.system-id'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.array.literal.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.array.literal.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 64, "endIndex": 80, "scopes": ["source.abl", "meta.array.literal.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'web-track-sys-id'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.array.literal.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 82, "endIndex": 83, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 83, "endIndex": 86, "scopes": ["source.abl", "keyword.other.abl"] }  // 'AND'
    ],
    [
      { "startIndex": 0, "endIndex": 21, "scopes": ["source.abl"] },  // '                     '
      { "startIndex": 21, "endIndex": 38, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-track.web-key'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "support.function.abl"] },  // 'DECIMAL'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 49, "endIndex": 65, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-cart.web-key'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.brace.round.abl"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 21, "scopes": ["source.abl"] },  // '                     '
      { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-LOCK'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `for each customer exclusive:`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'exclusive'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `for each customer share:`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 23, "scopes": ["source.abl", "keyword.other.abl"] },  // 'share'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `for each customer exclusive-lo:`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 30, "scopes": ["source.abl", "keyword.other.abl"] },  // 'exclusive-lo'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
