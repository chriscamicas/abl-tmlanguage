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

describe('', () => {
  let statement = `for each Employee01 WHERE Employee01.EmpNum = piEmpNum, first Department02 where Department02.DeptCode = Employee01.DeptCode.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 19, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Employee01'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WHERE'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 43, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Employee01.EmpNum'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 54, "scopes": ["source.abl", "variable.other.abl"] },  // 'piEmpNum'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // ','
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 56, "endIndex": 61, "scopes": ["source.abl", "keyword.other.abl"] },  // 'first'
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 62, "endIndex": 74, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Department02'
    { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 75, "endIndex": 80, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
    { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 81, "endIndex": 102, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Department02.DeptCode'
    { "startIndex": 102, "endIndex": 103, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 103, "endIndex": 104, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 104, "endIndex": 105, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 105, "endIndex": 124, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Employee01.DeptCode'
    { "startIndex": 124, "endIndex": 125, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `for each customer, salesrep where salesrep.salesrep EQ customer.salesrep no-lock, first order of customer no-lock where order.orderdate < today:`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // ','
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'salesrep'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 33, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 51, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'salesrep.salesrep'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 52, "endIndex": 54, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'EQ'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 55, "endIndex": 72, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer.salesrep'
    { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 73, "endIndex": 80, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
    { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // ','
    { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 82, "endIndex": 87, "scopes": ["source.abl", "keyword.other.abl"] },  // 'first'
    { "startIndex": 87, "endIndex": 88, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 88, "endIndex": 93, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'order'
    { "startIndex": 93, "endIndex": 94, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 94, "endIndex": 96, "scopes": ["source.abl", "keyword.other.abl"] },  // 'of'
    { "startIndex": 96, "endIndex": 97, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 97, "endIndex": 105, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 105, "endIndex": 106, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 106, "endIndex": 113, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
    { "startIndex": 113, "endIndex": 114, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 114, "endIndex": 119, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
    { "startIndex": 119, "endIndex": 120, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 120, "endIndex": 135, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'order.orderdate'
    { "startIndex": 135, "endIndex": 136, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 136, "endIndex": 137, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<'
    { "startIndex": 137, "endIndex": 138, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 138, "endIndex": 143, "scopes": ["source.abl", "constant.language.abl"] },  // 'today'
    { "startIndex": 143, "endIndex": 145, "scopes": ["source.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `for each Employee01 WHERE Employee01.EmpNum = piEmpNum, each Department02 where Department02.DeptCode = Employee01.DeptCode
      , last Family02 of Employee01 no-lock.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 19, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Employee01'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WHERE'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 43, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Employee01.EmpNum'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 54, "scopes": ["source.abl", "variable.other.abl"] },  // 'piEmpNum'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // ','
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 60, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 73, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Department02'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 74, "endIndex": 79, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
      { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 80, "endIndex": 101, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Department02.DeptCode'
      { "startIndex": 101, "endIndex": 102, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 102, "endIndex": 103, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 103, "endIndex": 104, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 104, "endIndex": 123, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'Employee01.DeptCode'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // ','
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'last'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 21, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Family02'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "keyword.other.abl"] },  // 'of'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 35, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Employee01'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 43, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `for
each customer,
salesrep where salesrep.salesrep EQ customer.salesrep no-lock,
first order of customer no-lock where order.orderdate < today:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] }  // 'for'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 13, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "keyword.operator.source.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'salesrep'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 32, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'salesrep.salesrep'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 35, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'EQ'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 53, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer.salesrep'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 61, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "keyword.operator.source.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'first'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 11, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'order'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'of'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 23, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 37, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 53, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'order.orderdate'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 61, "scopes": ["source.abl", "constant.language.abl"] },  // 'today'
      { "startIndex": 61, "endIndex": 63, "scopes": ["source.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `    @Before.
    method public void BeforeAll():
        // something
    end method.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "meta.declaration.annotation.abl", "storage.type.annotation.abl"] },  // '@Before'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.method.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 17, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 32, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'BeforeAll'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 34, "endIndex": 36, "scopes": ["source.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 20, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// something'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `    @Befor`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
    { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.declaration.annotation.abl", "storage.type.annotation.abl"] }  // '@Befor'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FOR EACH ttTaskMethods
        BREAK BY ttTaskMethods.ClassName:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EACH'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'ttTaskMethods'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BREAK'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 40, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttTaskMethods.ClassName'
      { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FOR EACH ttTaskMethods BY ttTaskMethods.ClassName:`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EACH'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttTaskMethods'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BY'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 49, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttTaskMethods.ClassName'
    { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FOR EACH ttTaskMethods transACTION:`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EACH'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttTaskMethods'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 34, "scopes": ["source.abl", "keyword.other.abl"] },  // 'transACTION'
    { "startIndex": 34, "endIndex": 36, "scopes": ["source.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FOR EACH ttTaskMethods WHERE ttTaskMethods.field <> ?
  BY ttTaskMethods.ClassName
  TRANSACTION:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EACH'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttTaskMethods'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WHERE'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 48, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttTaskMethods.field'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<>'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "constant.language.abl"] }  // '?'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 28, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'ttTaskMethods.ClassName'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "meta.block.label.abl"] },  // 'TRANSACTION'
      { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
