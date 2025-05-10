const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `FOR EACH  web-cart /*FIELDS (SYSTEM-ID web-key bom-key kit-seq-num req-date line-num entry-key order-num)*/ WHERE
    web-cart.system-id = user-ctl.system-id[{&web-cart-sys-id}] AND
    web-cart.web-key = dec(ip-web-key) AND
    web-cart.order-num = "" AND
    web-cart.web-type = "GrDirect"
    NO-LOCK
     BREAK BY web-cart.req-date
          BY web-cart.offer-key
          BY web-cart.location-key:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EACH'
      { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-cart'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 21, "endIndex": 105, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // 'FIELDS (SYSTEM-ID web-key bom-key kit-seq-num req-date line-num entry-key order-num)'
      { "startIndex": 105, "endIndex": 107, "scopes": ["source.abl", "comment.block.source.abl"] },  // '*/'
      { "startIndex": 107, "endIndex": 108, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 108, "endIndex": 113, "scopes": ["source.abl", "keyword.other.abl"] }  // 'WHERE'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-cart.system-id'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 43, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'user-ctl.system-id'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 44, "endIndex": 62, "scopes": ["source.abl", "meta.array.literal.abl", "storage.type.function.abl"] },  // '{&web-cart-sys-id}'
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 64, "endIndex": 67, "scopes": ["source.abl", "keyword.other.abl"] }  // 'AND'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 20, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-cart.web-key'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'dec'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 27, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'ip-web-key'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 42, "scopes": ["source.abl", "keyword.other.abl"] }  // 'AND'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-cart.order-num'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] }  // 'AND'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 21, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-cart.web-type'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 25, "endIndex": 33, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'GrDirect'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] }  // 'NO-LOCK'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BREAK'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 31, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'web-cart.req-date'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 31, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'web-cart.offer-key'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 34, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'web-cart.location-key'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
