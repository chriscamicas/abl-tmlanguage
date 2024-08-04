const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `define temp-table ttBlah no-undo
  field f12 as chara
  field d3 as datetime-tz
  index idx1 as primary unique f12 ascending.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttBlah'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f12'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] }  // 'chara'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'd3'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] }  // 'datetime-tz'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'index'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'idx1'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'primary'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'unique'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f12'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'ascending'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define temp-table ttBlah no-undo
  field f12 as chara
  field d3 as datetime-tz
  index idx1 as primary unique f12 ascending
  index Name d3
  index gargh word-index f12
  .`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttBlah'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f12'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] }  // 'chara'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'd3'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] }  // 'datetime-tz'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'index'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'idx1'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'primary'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'unique'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f12'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'ascending'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'index'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'Name'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'd3'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'index'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'gargh'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'word-index'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'f12'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `DEFINE {&ACCESS} TEMP-TABLE eIndex{&SUFFIX} NO-UNDO {&REFERENCE-ONLY} &IF DEFINED (NO-BEFORE) EQ 0 &THEN BEFORE-TABLE eIndexBefore{&SUFFIX} &ENDIF
  FIELD BusinessEntityName AS CHARACTER FORMAT "X(8)":U
  INDEX IndexName AS UNIQUE PRIMARY TempTableName ASCENDING IndexName ASCENDING
  INDEX Order TempTableName ASCENDING IndexOrder ASCENDING
  INDEX DefaultSearchCodeGeneration DefaultSearchCodeGeneration ASCENDING
  INDEX AdditionalQueryGeneration AdditionalQueryGeneration ASCENDING
  INDEX Virtual Virtual ASCENDING
  .`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '{&ACCESS}'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'TEMP-TABLE'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'eIndex'
      { "startIndex": 34, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '{&SUFFIX}'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'NO-UNDO'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 52, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '{&REFERENCE-ONLY}'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 70, "endIndex": 73, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '&IF'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 74, "endIndex": 81, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "support.function.abl"] },  // 'DEFINED'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 82, "endIndex": 83, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 83, "endIndex": 92, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'NO-BEFORE'
      { "startIndex": 92, "endIndex": 93, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 93, "endIndex": 94, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 94, "endIndex": 96, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'EQ'
      { "startIndex": 96, "endIndex": 97, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 97, "endIndex": 98, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '0'
      { "startIndex": 98, "endIndex": 99, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 99, "endIndex": 104, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '&THEN'
      { "startIndex": 104, "endIndex": 105, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 105, "endIndex": 117, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BEFORE-TABLE'
      { "startIndex": 117, "endIndex": 118, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 118, "endIndex": 130, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'eIndexBefore'
      { "startIndex": 130, "endIndex": 139, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '{&SUFFIX}'
      { "startIndex": 139, "endIndex": 140, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 140, "endIndex": 146, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] }  // '&ENDIF'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FIELD'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'BusinessEntityName'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'CHARACTER'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 48, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'X(8)'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 53, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "support.other.abl"] }  // ':U'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'INDEX'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'IndexName'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'UNIQUE'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'PRIMARY'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'TempTableName'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'ASCENDING'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 60, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'IndexName'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 70, "endIndex": 79, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'ASCENDING'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'INDEX'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'Order'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'TempTableName'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'ASCENDING'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'IndexOrder'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 49, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'ASCENDING'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'INDEX'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'DefaultSearchCodeGeneration'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'DefaultSearchCodeGeneration'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 64, "endIndex": 73, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'ASCENDING'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'INDEX'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'AdditionalQueryGeneration'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'AdditionalQueryGeneration'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 60, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'ASCENDING'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'INDEX'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'Virtual'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'Virtual'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'ASCENDING'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define temp-table ttFoo no-undo
        namespace-uri "foo"
        namespace-prefix "prefix"
        xml-node-name "Foo"
        serialize-name "Foo"
    // scope (xml-node-name): 	entity.name.type.abl meta.define.abl source.abl
    field FooId as integer xml-node-name "id" serialize-name "id".`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttFoo'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'namespace-uri'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 23, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'foo'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'namespace-prefix'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 26, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'prefix'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'xml-node-name'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 23, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'Foo'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'serialize-name'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'Foo'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "comment.line.double-slash.abl"] }  // '// scope (xml-node-name): 	entity.name.type.abl meta.define.abl source.abl'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'FooId'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'integer'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'xml-node-name'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'id'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'serialize-name'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 62, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'id'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})