const { assert, expect } = require('chai');
const shared = require('../shared.js')

describe('', () => {
  //label-with-a-dot-inside.spec
  let statement = `DEFINE VARIABLE test  AS CHARACTER FORMAT "X(50)" LABEL "NO.MAQUINA".`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'VARIABLE'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'test'
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'CHARACTER'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 43, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'X(50)'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 50, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LABEL'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 57, "endIndex": 67, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'NO.MAQUINA'
    { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  //label-with-a-dot-inside.spec
  let statement = `
DEFINE TEMP-TABLE inventario
    FIELD fecInv       AS DATE format 99/99/9999
    FIELD almInv       AS CHARACTER
    FIELD linInv       AS CHARACTER
    FIELD invIni       LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD entProd      LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD entProdCedis LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD entTransf    LIKE in_qty_oh  FORMAT "->>,>>9.999"
    FIELD embCedis     LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD uniEmbCedis  AS   DECIMAL    FORMAT ">,>>9.<<"
    FIELD embPlanta    LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD uniEmbPlanta AS   DECIMAL    FORMAT ">,>>9.<<"
    FIELD invFin       LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD tonEmb       LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD uniEmb       AS INTEGER FORMAT ">,>>9".
    `;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'TEMP-TABLE'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'inventario'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'fecInv'
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '       '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'DATE'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'format'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "constant.language.source.abl"] }  // '99/99/9999'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'almInv'
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '       '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] }  // 'CHARACTER'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'linInv'
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '       '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] }  // 'CHARACTER'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'invIni'
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '       '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LIKE'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'in_qty_oh'
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // '->>>,>>9.999'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'entProd'
      { "startIndex": 17, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LIKE'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'in_qty_oh'
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // '->>>,>>9.999'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'entProdCedis'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LIKE'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'in_qty_oh'
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // '->>>,>>9.999'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'entTransf'
      { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LIKE'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'in_qty_oh'
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // '->>,>>9.999'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'embCedis'
      { "startIndex": 18, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '     '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LIKE'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'in_qty_oh'
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // '->>>,>>9.999'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'uniEmbCedis'
      { "startIndex": 21, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 25, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // '   '
      { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'DECIMAL'
      { "startIndex": 35, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // '>,>>9.<<'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'embPlanta'
      { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LIKE'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'in_qty_oh'
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // '->>>,>>9.999'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'uniEmbPlanta'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 25, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // '   '
      { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'DECIMAL'
      { "startIndex": 35, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // '>,>>9.<<'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'invFin'
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '       '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LIKE'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'in_qty_oh'
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // '->>>,>>9.999'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'tonEmb'
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '       '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LIKE'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'in_qty_oh'
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // '->>>,>>9.999'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'uniEmb'
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '       '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'INTEGER'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 42, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // '>,>>9'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl"] }  // '    '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})