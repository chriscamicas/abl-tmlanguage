const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
    let statement = `for each customer , first salesrep of customer where salesrep.salesrep begins 'd' no-lock, first order of customer no-lock where order.orderdate < today:
  displ customer.custnum salesrep.salesrep.
  end.  `;
    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
            { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
            { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
            { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // ','
            { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 20, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'first'
            { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 26, "endIndex": 34, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'salesrep'
            { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl", "keyword.other.abl"] },  // 'of'
            { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 38, "endIndex": 46, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
            { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 47, "endIndex": 52, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
            { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 53, "endIndex": 70, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'salesrep.salesrep'
            { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 71, "endIndex": 77, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'begins'
            { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
            { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl", "string.single.complex.abl"] },  // 'd'
            { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
            { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 82, "endIndex": 89, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
            { "startIndex": 89, "endIndex": 90, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // ','
            { "startIndex": 90, "endIndex": 91, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 91, "endIndex": 96, "scopes": ["source.abl", "keyword.other.abl"] },  // 'first'
            { "startIndex": 96, "endIndex": 97, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 97, "endIndex": 102, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'order'
            { "startIndex": 102, "endIndex": 103, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 103, "endIndex": 105, "scopes": ["source.abl", "keyword.other.abl"] },  // 'of'
            { "startIndex": 105, "endIndex": 106, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 106, "endIndex": 114, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
            { "startIndex": 114, "endIndex": 115, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 115, "endIndex": 122, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
            { "startIndex": 122, "endIndex": 123, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 123, "endIndex": 128, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
            { "startIndex": 128, "endIndex": 129, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 129, "endIndex": 144, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'order.orderdate'
            { "startIndex": 144, "endIndex": 145, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 145, "endIndex": 146, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<'
            { "startIndex": 146, "endIndex": 147, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 147, "endIndex": 152, "scopes": ["source.abl", "constant.language.abl"] },  // 'today'
            { "startIndex": 152, "endIndex": 154, "scopes": ["source.abl"] }  // ':'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'displ'
            { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 8, "endIndex": 24, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer.custnum'
            { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 25, "endIndex": 42, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'salesrep.salesrep'
            { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
            { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
            { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl"] }  // '  '
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `for each customer, salesrep of customer no-lock, first order of customer no-lock where order.orderdate < today:
  displ customer.custnum salesrep.salesrep.
  end.  `;
    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
            { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
            { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
            { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // ','
            { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'salesrep'
            { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl", "keyword.other.abl"] },  // 'of'
            { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 31, "endIndex": 39, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
            { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 40, "endIndex": 47, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
            { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // ','
            { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 49, "endIndex": 54, "scopes": ["source.abl", "keyword.other.abl"] },  // 'first'
            { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 55, "endIndex": 60, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'order'
            { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 61, "endIndex": 63, "scopes": ["source.abl", "keyword.other.abl"] },  // 'of'
            { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 64, "endIndex": 72, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
            { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 73, "endIndex": 80, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
            { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 81, "endIndex": 86, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
            { "startIndex": 86, "endIndex": 87, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 87, "endIndex": 102, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'order.orderdate'
            { "startIndex": 102, "endIndex": 103, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 103, "endIndex": 104, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<'
            { "startIndex": 104, "endIndex": 105, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 105, "endIndex": 110, "scopes": ["source.abl", "constant.language.abl"] },  // 'today'
            { "startIndex": 110, "endIndex": 112, "scopes": ["source.abl"] }  // ':'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'displ'
            { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 8, "endIndex": 24, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer.custnum'
            { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 25, "endIndex": 42, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'salesrep.salesrep'
            { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
            { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
            { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl"] }  // '  '
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `for each customer :
  displ customer.custnum salesrep.salesrep.
  end.  `;
    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
            { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
            { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
            { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl"] }  // ':'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'displ'
            { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 8, "endIndex": 24, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer.custnum'
            { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 25, "endIndex": 42, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'salesrep.salesrep'
            { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
            { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
            { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl"] }  // '  '
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `    OPEN QUERY qry01_SmartCache
         FOR EACH SmartCache01 WHERE SmartCache01.CacheKey = pcCacheKey NO-LOCK INDEXED-REPOSITION.`;
    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'OPEN'
            { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 9, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'QUERY'
            { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 15, "endIndex": 31, "scopes": ["source.abl", "variable.other.abl"] }  // 'qry01_SmartCache'
        ],
        [
            { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl"] },  // '         '
            { "startIndex": 9, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EACH'
            { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 18, "endIndex": 30, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'SmartCache01'
            { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 31, "endIndex": 36, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WHERE'
            { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 37, "endIndex": 58, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'SmartCache01.CacheKey'
            { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
            { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 61, "endIndex": 71, "scopes": ["source.abl", "variable.other.abl"] },  // 'pcCacheKey'
            { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 72, "endIndex": 79, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-LOCK'
            { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl"] },  // ' '
            { "startIndex": 80, "endIndex": 98, "scopes": ["source.abl", "keyword.other.abl"] },  // 'INDEXED-REPOSITION'
            { "startIndex": 98, "endIndex": 99, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

