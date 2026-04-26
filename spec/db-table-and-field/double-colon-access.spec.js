const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `do vIndex = vBufferHandle::Minimum to vBufferHandle::Maximum:
    message vindex.
end. /* do vIndex = vBufferHandle::Minimum to vBufferHandle::Maximum: */`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 9, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'vIndex'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 25, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'vBufferHandle'
      { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 27, "endIndex": 34, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Minimum'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl", "keyword.other.abl"] },  // 'to'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 51, "scopes": ["source.abl", "variable.other.abl"] },  // 'vBufferHandle'
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 53, "endIndex": 60, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Maximum'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 18, "scopes": ["source.abl", "variable.other.abl"] },  // 'vindex'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 7, "endIndex": 70, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' do vIndex = vBufferHandle::Minimum to vBufferHandle::Maximum: '
      { "startIndex": 70, "endIndex": 72, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if num-entries(vBufferHandle::ControlList) gt 1 then
    .`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 14, "scopes": ["source.abl", "support.function.abl"] },  // 'num-entries'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'vBufferHandle'
      { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 30, "endIndex": 41, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'ControlList'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'gt'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 48, "endIndex": 52, "scopes": ["source.abl", "keyword.other.abl"] }  // 'then'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `do vIndex = 1 to num-entries(vBufferHandle::ControlList):

end. `;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 9, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'vIndex'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'to'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 28, "scopes": ["source.abl", "meta.block.abl", "support.function.abl"] },  // 'num-entries'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 29, "endIndex": 42, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'vBufferHandle'
      { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 44, "endIndex": 55, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'ControlList'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.block.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl"] }  // ' '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `message hBuff::CustNum . `;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "variable.other.abl"] },  // 'hBuff'
    { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // '::'
    { "startIndex": 15, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'CustNum'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `assign c =  hDset::Customer
ttVal.field =  hDSet::Customer::CustNum.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "storage.type.abl"] },  // 'c'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 12, "endIndex": 17, "scopes": ["source.abl", "variable.other.abl"] },  // 'hDset'
      { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'Customer'
    ],
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttVal.field'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 15, "endIndex": 20, "scopes": ["source.abl", "variable.other.abl"] },  // 'hDSet'
      { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 22, "endIndex": 30, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Customer'
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 32, "endIndex": 39, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'CustNum'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
