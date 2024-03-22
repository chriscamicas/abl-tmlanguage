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
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"]}  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})