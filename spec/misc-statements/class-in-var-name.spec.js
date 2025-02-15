const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `DO mi-i = 1 to NUM-ENTRIES(mc-g-list-class):

	LOOP-TRADE:
	FOR EACH  hist-trn
	    WHERE hist-trn.regn	      = g_regn
	      AND hist-trn.fund-no    = ENTRY(mi-i,mc-g-list-class)
	      AND hist-trn.order-date >= mdt-g-date-from
              AND hist-trn.order-data <= mdt-g-date-to
              NO-LOCK :

	     IF mg-g-account-no <> "" AND hist-trn.account-no <> mc-g-account-no THEN NEXT LOOP-TRADE.

	     /* Keep only redemption */
	     IF hist-trn.TYPE <> "S" THEN NEXT LOOP-TRADE.

	     IF LOOKUP(hist-trn.h-status, "P,W,C") = 0 THEN NEXT LOOP-TRADE.
	END.
END.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'DO'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'mi-i'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'to'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "meta.block.abl", "meta.function-call.abl", "support.function.abl"] },  // 'NUM-ENTRIES'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.block.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 27, "endIndex": 42, "scopes": ["source.abl", "meta.block.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'mc-g-list-class'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.block.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] },  // '	'
      { "startIndex": 1, "endIndex": 11, "scopes": ["source.abl", "entity.name.label.abl"] },  // 'LOOP-TRADE'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] },  // '	'
      { "startIndex": 1, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EACH'
      { "startIndex": 9, "endIndex": 11, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 11, "endIndex": 19, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'hist-trn'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl"] },  // '	    '
      { "startIndex": 5, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WHERE'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 24, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'hist-trn.regn'
      { "startIndex": 24, "endIndex": 31, "scopes": ["source.abl"] },  // '	      '
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 39, "scopes": ["source.abl", "variable.other.abl"] }  // 'g_regn'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] },  // '	      '
      { "startIndex": 7, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 27, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'hist-trn.fund-no'
      { "startIndex": 27, "endIndex": 31, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 38, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'ENTRY'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 39, "endIndex": 43, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'mi-i'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 44, "endIndex": 59, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'mc-g-list-class'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] },  // '	      '
      { "startIndex": 7, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 30, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'hist-trn.order-date'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '>='
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 49, "scopes": ["source.abl", "variable.other.abl"] }  // 'mdt-g-date-from'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl"] },  // '              '
      { "startIndex": 14, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 37, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'hist-trn.order-data'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 40, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<='
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 54, "scopes": ["source.abl", "variable.other.abl"] }  // 'mdt-g-date-to'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl"] },  // '              '
      { "startIndex": 14, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-LOCK'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '	     '
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'IF'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 24, "scopes": ["source.abl", "variable.other.abl"] },  // 'mg-g-account-no'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<>'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 34, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 54, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'hist-trn.account-no'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 55, "endIndex": 57, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<>'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 58, "endIndex": 73, "scopes": ["source.abl", "variable.other.abl"] },  // 'mc-g-account-no'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 74, "endIndex": 78, "scopes": ["source.abl", "keyword.other.abl"] },  // 'THEN'
      { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 79, "endIndex": 83, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEXT'
      { "startIndex": 83, "endIndex": 84, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 84, "endIndex": 94, "scopes": ["source.abl", "entity.name.label.abl"] },  // 'LOOP-TRADE'
      { "startIndex": 94, "endIndex": 95, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '	     '
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 8, "endIndex": 30, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' Keep only redemption '
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '	     '
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'IF'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'hist-trn.TYPE'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<>'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'S'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 34, "scopes": ["source.abl", "keyword.other.abl"] },  // 'THEN'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 39, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEXT'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 50, "scopes": ["source.abl", "entity.name.label.abl"] },  // 'LOOP-TRADE'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '	     '
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'IF'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'LOOKUP'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 16, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'hist-trn.h-status'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 36, "endIndex": 41, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'P,W,C'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '0'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 48, "endIndex": 52, "scopes": ["source.abl", "keyword.other.abl"] },  // 'THEN'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 57, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEXT'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 58, "endIndex": 68, "scopes": ["source.abl", "entity.name.label.abl"] },  // 'LOOP-TRADE'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] },  // '	'
      { "startIndex": 1, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

