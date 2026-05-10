const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `DEFINE BROWSE br-items QUERY br-items NO-LOCK DISPLAY
      temp-aropen.ref-type
      temp-aropen.ref-num
      temp-aropen.ref-date COLUMN-LABEL "Ref Date" FORMAT "99/99/9999"
      temp-aropen.opn-amt COLUMN-LABEL "Open Amount" FORMAT "->>>,>>>,>>9.99"
      temp-aropen.due-date
      temp-aropen.cust-ref-num COLUMN-LABEL "Cust Ref" FORMAT "X(12)"
      temp-aropen.remark-attached COLUMN-LABEL "Remark"
      temp-aropen.cust-po-number
      temp-aropen.discount-date
      temp-aropen.disc-amt COLUMN-LABEL "Open Discount Amount" FORMAT ">>>,>>>,>>9.99"
      temp-aropen.orig-amt COLUMN-LABEL "Original Amount" FORMAT "->>>,>>>,>>9.99"
      temp-aropen.entered-currency COLUMN-LABEL "Entered Currency"
      temp-aropen.aropen-open-amt COLUMN-LABEL "Open Amount (Entered Currency)" FORMAT "->>>,>>>,>>9.99"
      temp-aropen.discount-amount-open COLUMN-LABEL "Open Discount Amount (Entered Currency)"
      temp-aropen.amount COLUMN-LABEL "Amount (Entered Currency)" FORMAT "->>>,>>>,>>9.99"
      temp-aropen.cust-name
      temp-aropen.cust-code COLUMN-LABEL "Customer ID"
      ENABLE temp-aropen.ref-num
    WITH  SEPARATORS NO-ROW-MARKERS SIZE 112.57 BY 6.03
          FONT 14.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BROWSE'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'br-items'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'QUERY'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'br-items'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'NO-LOCK'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'DISPLAY'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'temp-aropen.ref-type'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'temp-aropen.ref-num'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'temp-aropen.ref-date'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN-LABEL'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 41, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'Ref Date'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 59, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // '99/99/9999'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'temp-aropen.opn-amt'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN-LABEL'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 40, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'Open Amount'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 61, "endIndex": 76, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // '->>>,>>>,>>9.99'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'temp-aropen.due-date'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'temp-aropen.cust-ref-num'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN-LABEL'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 45, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'Cust Ref'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 55, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 63, "endIndex": 68, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'X(12)'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'temp-aropen.remark-attached'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN-LABEL'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 48, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'Remark'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'temp-aropen.cust-po-number'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'temp-aropen.discount-date'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'temp-aropen.disc-amt'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN-LABEL'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 41, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'Open Discount Amount'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 63, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 71, "endIndex": 85, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // '>>>,>>>,>>9.99'
      { "startIndex": 85, "endIndex": 86, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'temp-aropen.orig-amt'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN-LABEL'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 41, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'Original Amount'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 58, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 66, "endIndex": 81, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // '->>>,>>>,>>9.99'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'temp-aropen.entered-currency'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN-LABEL'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 49, "endIndex": 65, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'Entered Currency'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'temp-aropen.aropen-open-amt'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN-LABEL'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 48, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'Open Amount (Entered Currency)'
      { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 80, "endIndex": 86, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 86, "endIndex": 87, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 87, "endIndex": 88, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 88, "endIndex": 103, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // '->>>,>>>,>>9.99'
      { "startIndex": 103, "endIndex": 104, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'temp-aropen.discount-amount-open'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN-LABEL'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 53, "endIndex": 92, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'Open Discount Amount (Entered Currency)'
      { "startIndex": 92, "endIndex": 93, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'temp-aropen.amount'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN-LABEL'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 39, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'Amount (Entered Currency)'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 66, "endIndex": 72, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 74, "endIndex": 89, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // '->>>,>>>,>>9.99'
      { "startIndex": 89, "endIndex": 90, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'temp-aropen.cust-name'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'temp-aropen.cust-code'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN-LABEL'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 42, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'Customer ID'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'ENABLE'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'temp-aropen.ref-num'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'WITH'
      { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SEPARATORS'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'NO-ROW-MARKERS'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SIZE'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '112.57'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 48, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] }  // '6.03'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FONT'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '14'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `DEFINE  PRIVATE  BUTTON button
  AUTO-GO
  AUTO-ENDKEY
  DEFAULT
  BGCOLOR expression
  CONTEXT-HELP-ID expression
  DCOLOR expression
  DROP-TARGET
  FGCOLOR expression
  FONT number
  IMAGE-DOWN image-phrase
  IMAGE  IMAGE-UP
  FILE name
    IMAGE-SIZE  IMAGE-SIZE-CHARS  IMAGE-SIZE-PIXELS
        33.22 BY 44.55

     FROM X 77 Y 77  ROW 6 COLUMN 9
  IMAGE-INSENSITIVE image-phrase
  MOUSE-POINTER name
  LABEL label
  LIKE button
  PFCOLOR expression
  SIZE  SIZE-CHARS  SIZE-PIXELS 11 BY 22
  NO-FOCUS  FLAT-BUTTON
  NO-CONVERT-3D-COLORS
  TOOLTIP tooltip.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'PRIVATE'
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 17, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BUTTON'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'button'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'AUTO-GO'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'AUTO-ENDKEY'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'DEFAULT'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BGCOLOR'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'expression'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'CONTEXT-HELP-ID'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'expression'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DCOLOR'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'expression'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'DROP-TARGET'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FGCOLOR'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }   // 'expression'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FONT'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'number'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'IMAGE-DOWN'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'image-phrase'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'IMAGE'
      { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'IMAGE-UP'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FILE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'name'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'IMAGE-SIZE'
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 16, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'IMAGE-SIZE-CHARS'
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 34, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'IMAGE-SIZE-PIXELS'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '33.22'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] }  // '44.55'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.define.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FROM'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'X'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '77'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'Y'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '77'
      { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 21, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'ROW'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '6'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] }  // '9'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'IMAGE-INSENSITIVE'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'image-phrase'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'MOUSE-POINTER'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'name'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LABEL'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'label'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LIKE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'button'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'PFCOLOR'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'expression'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SIZE'
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 8, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SIZE-CHARS'
      { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 20, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SIZE-PIXELS'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '11'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] }  // '22'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'NO-FOCUS'
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 12, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'FLAT-BUTTON'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'NO-CONVERT-3D-COLORS'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'TOOLTIP'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'tooltip'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
