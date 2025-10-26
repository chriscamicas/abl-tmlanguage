const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `do with frame {&FRAME-NAME}:`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'with'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'frame'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 27, "scopes": ["source.abl", "meta.block.abl", "storage.type.function.abl"] },  // '{&FRAME-NAME}'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `do while
    vFooId eq ?
    or vFooId eq ""
    or can-find(
        first ttFoo
            where ttFoo.FooId eq vFooId):

    vFooId = guid.

end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] }  // 'while'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.block.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'vFooId'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // 'eq'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.block.abl", "constant.language.abl"] }  // '?'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.block.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'or'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'vFooId'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // 'eq'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.block.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.block.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.block.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'or'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.block.abl", "support.function.abl"] },  // 'can-find'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.block.abl", "meta.brace.round.js"] }  // '('
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'first'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "meta.block.abl", "storage.data.table.abl"] }  // 'ttFoo'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'where'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 29, "scopes": ["source.abl", "meta.block.abl", "storage.data.table.abl"] },  // 'ttFoo.FooId'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // 'eq'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 39, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'vFooId'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.block.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "variable.other.abl"] },  // 'vFooId'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "support.function.abl"] },  // 'guid'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

