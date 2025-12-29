const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `FIND bfAddress NO-LOCK
WHERE bfAddress.RecCode
AND  bfAddress.Company = geCompanyAddress
AND bfAddress.AdrNum = bfOrdDlvAd.AdrNum
NO-ERROR.

FIND bfAddress NO-LOCK
WHERE bfAddress.RecCode = ""
AND  bfAddress.Company = gecompanyaddress
AND bfAddress.AdrNum = bfOrdMst.custNum
NO-ERROR.
IF AVAILABLE bfAddress THEN
ASSIGN InvoiceDetailDocumentCountry = bfAddress.Country.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FIND'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 14, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'bfAddress'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] }  // 'NO-LOCK'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WHERE'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 23, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'bfAddress.RecCode'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 3, "endIndex": 5, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 5, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'bfAddress.Company'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 41, "scopes": ["source.abl", "variable.other.abl"] }  // 'geCompanyAddress'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 20, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'bfAddress.AdrNum'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 40, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'bfOrdDlvAd.AdrNum'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-ERROR'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FIND'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 14, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'bfAddress'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] }  // 'NO-LOCK'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WHERE'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 23, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'bfAddress.RecCode'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 3, "endIndex": 5, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 5, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'bfAddress.Company'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 41, "scopes": ["source.abl", "variable.other.abl"] }  // 'gecompanyaddress'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 20, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'bfAddress.AdrNum'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 39, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'bfOrdMst.custNum'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-ERROR'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'IF'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 12, "scopes": ["source.abl", "support.function.abl"] },  // 'AVAILABLE'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'bfAddress'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] }  // 'THEN'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 35, "scopes": ["source.abl", "variable.other.abl"] },  // 'InvoiceDetailDocumentCountry'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 55, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'bfAddress.Country'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
