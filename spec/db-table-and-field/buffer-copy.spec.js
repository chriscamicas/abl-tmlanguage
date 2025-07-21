const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `buffer-copy custname using address-1 address-2 city state zip country phone fax
         to ar-remit-from
                assign ar-remit-from.remit-from-name = custname.cust-name
                       ar-remit-from.state           = CAPS(custname.state).`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'buffer-copy'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 20, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'custname'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'using'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 36, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'address-1'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 46, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'address-2'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 47, "endIndex": 51, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'city'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 52, "endIndex": 57, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'state'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 58, "endIndex": 61, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'zip'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 62, "endIndex": 69, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'country'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 70, "endIndex": 75, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'phone'
      { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 76, "endIndex": 79, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'fax'
    ],
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl"] },  // '         '
      { "startIndex": 9, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'to'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 25, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'ar-remit-from'
    ],
    [
      { "startIndex": 0, "endIndex": 16, "scopes": ["source.abl"] },  // '                '
      { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 52, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ar-remit-from.remit-from-name'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 55, "endIndex": 73, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'custname.cust-name'
    ],
    [
      { "startIndex": 0, "endIndex": 23, "scopes": ["source.abl"] },  // '                       '
      { "startIndex": 23, "endIndex": 42, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ar-remit-from.state'
      { "startIndex": 42, "endIndex": 53, "scopes": ["source.abl"] },  // '           '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 55, "endIndex": 59, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'CAPS'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 60, "endIndex": 74, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'custname.state'
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `BUFFER-COPY source
EXCEPT f1 f4 af
  uSING field
  TO target  ASSIGN target.f23 = caps("abf")
   NO-LOBS  NO-ERROR`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BUFFER-COPY'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 18, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'source'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EXCEPT'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'f1'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'f4'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'af'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'uSING'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'field'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TO'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'target'
      { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 13, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 30, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'target.f23'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'caps'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 39, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'abf'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 3, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-LOBS'
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 12, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] }  // 'NO-ERROR'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `buffer-COPY s2k.customer     to customer-archive   .`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'buffer-COPY'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 24, "scopes": ["source.abl", "storage.data.table.abl"] },  // 's2k.customer'
    { "startIndex": 24, "endIndex": 29, "scopes": ["source.abl"] },  // '     '
    { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] },  // 'to'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 48, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer-archive'
    { "startIndex": 48, "endIndex": 51, "scopes": ["source.abl"] },  // '   '
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `buffer-COPY {&file}     to {&file}-archive   .`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'buffer-COPY'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 19, "scopes": ["source.abl", "storage.type.function.abl"] },  // '{&file}'
    { "startIndex": 19, "endIndex": 24, "scopes": ["source.abl"] },  // '     '
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'to'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 34, "scopes": ["source.abl", "storage.type.function.abl"] },  // '{&file}'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '-'
    { "startIndex": 35, "endIndex": 45, "scopes": ["source.abl"] },  // 'archive   '
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `BUFFER-COPY ttPerms EXCEPT Can-SubSeq Can-SubExpr TO ttPerms0
                            ASSIGN ttPerms0.Can-SubSeq = 0
                                   ttPerms0.Can-SubExpr = ?.`;
  let expectedTokens = [
[
{ "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BUFFER-COPY'
{ "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 12, "endIndex": 19, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttPerms'
{ "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 20, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EXCEPT'
{ "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 27, "endIndex": 37, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Can-SubSeq'
{ "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 38, "endIndex": 49, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Can-SubExpr'
{ "startIndex": 49, "endIndex": 50, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TO'
{ "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 53, "endIndex": 61, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'ttPerms0'
],
[
{ "startIndex": 0, "endIndex": 28, "scopes": ["source.abl"] },  // '                            '
{ "startIndex": 28, "endIndex": 34, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
{ "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 35, "endIndex": 54, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttPerms0.Can-SubSeq'
{ "startIndex": 54, "endIndex": 55, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
{ "startIndex": 56, "endIndex": 57, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '0'
],
[
{ "startIndex": 0, "endIndex": 35, "scopes": ["source.abl"] },  // '                                   '
{ "startIndex": 35, "endIndex": 55, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttPerms0.Can-SubExpr'
{ "startIndex": 55, "endIndex": 56, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
{ "startIndex": 57, "endIndex": 58, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "constant.language.abl"] },  // '?'
{ "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `       BUFFER-COPY template_TRG TO _TRG
         ASSIGN _TRG._pRECID = RECID(_P)
                _TRG._wRECID = RECID(_U).`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] },  // '       '
      { "startIndex": 7, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BUFFER-COPY'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 31, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'template_TRG'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TO'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 39, "scopes": ["source.abl", "storage.data.table.abl"] }  // '_TRG'
    ],
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl"] },  // '         '
      { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 28, "scopes": ["source.abl", "storage.data.table.abl"] },  // '_TRG._pRECID'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 36, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'RECID'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // '_P'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 16, "scopes": ["source.abl"] },  // '                '
      { "startIndex": 16, "endIndex": 28, "scopes": ["source.abl", "storage.data.table.abl"] },  // '_TRG._wRECID'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 36, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'RECID'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // '_U'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
