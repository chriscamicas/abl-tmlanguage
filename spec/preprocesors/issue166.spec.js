const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `&global-define MY-TABLE-NEW "table"`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.define.abl", "keyword.other.abl"] },  // '&global-define'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.preprocessor.define.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 27, "scopes": ["source.abl", "meta.preprocessor.define.abl", "entity.name.function.preprocessor.abl"] },  // 'MY-TABLE-NEW'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.preprocessor.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.preprocessor.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 29, "endIndex": 34, "scopes": ["source.abl", "meta.preprocessor.define.abl", "string.double.complex.abl"] },  // 'table'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.preprocessor.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `&global-define TEST-NEW-2 "b"`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.define.abl", "keyword.other.abl"] },  // '&global-define'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.preprocessor.define.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 25, "scopes": ["source.abl", "meta.preprocessor.define.abl", "entity.name.function.preprocessor.abl"] },  // 'TEST-NEW-2'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.preprocessor.define.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.preprocessor.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.preprocessor.define.abl", "string.double.complex.abl"] },  // 'b'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.preprocessor.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable v as character initial {&MY-TABLE-NEW} no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'v'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'character'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'initial'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '{&MY-TABLE-NEW}'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 55, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if {&MY-TABLE-NEW} eq "table" then
do:
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 18, "scopes": ["source.abl", "storage.type.function.abl"] },  // '{&MY-TABLE-NEW}'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'eq'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'table'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 34, "scopes": ["source.abl", "keyword.other.abl"] }  // 'then'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
