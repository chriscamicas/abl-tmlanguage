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
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.abl"] },  // '='
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
      { "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "comment.block.abl"] },  // '/*'
      { "startIndex": 7, "endIndex": 70, "scopes": ["source.abl", "comment.block.abl", "comment"] },  // ' do vIndex = vBufferHandle::Minimum to vBufferHandle::Maximum: '
      { "startIndex": 70, "endIndex": 72, "scopes": ["source.abl", "comment.block.abl"] }  // '*/'
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
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "variable.other.abl"] },  // 'vBufferHandle'
      { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 30, "endIndex": 41, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ControlList'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "keyword.operator.abl"] },  // 'gt'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "constant.numeric.abl"] },  // '1'
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
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.abl"] },  // '1'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'to'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 28, "scopes": ["source.abl", "meta.block.abl", "support.function.abl"] },  // 'num-entries'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.block.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 29, "endIndex": 42, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'vBufferHandle'
      { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl", "meta.block.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 44, "endIndex": 55, "scopes": ["source.abl", "meta.block.abl", "storage.data.table.abl"] },  // 'ControlList'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.block.abl", "meta.brace.round.abl"] },  // ')'
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
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 12, "endIndex": 17, "scopes": ["source.abl", "variable.other.abl"] },  // 'hDset'
      { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'Customer'
    ],
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttVal.field'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
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

describe('', () => {
  let statement = `if smartBusinessEntityAdapter1:QueryHandle:get-buffer-handle (1):AVAILABLE then do:
    if smartBusinessEntityAdapter1:QueryHandle:get-buffer-handle (1)::BusinessEntityPackage > "":U then
        assign cEntityName = substitute ("&1.&2":U,
                                          smartBusinessEntityAdapter1:QueryHandle:get-buffer-handle (1)::BusinessEntityPackage,
                                          smartBusinessEntityAdapter1:QueryHandle:get-buffer-handle (1)::BusinessEntityName) .
    else
        assign cEntityName = smartBusinessEntityAdapter1:QueryHandle:get-buffer-handle (1)::BusinessEntityName .`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 30, "scopes": ["source.abl", "variable.other.abl"] },  // 'smartBusinessEntityAdapter1'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 31, "endIndex": 42, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'QueryHandle'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 43, "endIndex": 60, "scopes": ["source.abl", "support.function.abl"] },  // 'get-buffer-handle'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "constant.numeric.abl"] },  // '1'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 65, "endIndex": 74, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'AVAILABLE'
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 75, "endIndex": 79, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 80, "endIndex": 82, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 82, "endIndex": 83, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 34, "scopes": ["source.abl", "variable.other.abl"] },  // 'smartBusinessEntityAdapter1'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 35, "endIndex": 46, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'QueryHandle'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 47, "endIndex": 64, "scopes": ["source.abl", "support.function.abl"] },  // 'get-buffer-handle'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "constant.numeric.abl"] },  // '1'
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 68, "endIndex": 70, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 70, "endIndex": 91, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'BusinessEntityPackage'
      { "startIndex": 91, "endIndex": 92, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 92, "endIndex": 93, "scopes": ["source.abl", "keyword.operator.abl"] },  // '>'
      { "startIndex": 93, "endIndex": 94, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 94, "endIndex": 95, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 95, "endIndex": 96, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 96, "endIndex": 98, "scopes": ["source.abl", "string.quoted.double.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 98, "endIndex": 99, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 99, "endIndex": 103, "scopes": ["source.abl", "keyword.other.abl"] }  // 'then'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "variable.other.abl"] },  // 'cEntityName'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 39, "scopes": ["source.abl", "support.function.abl"] },  // 'substitute'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 42, "endIndex": 47, "scopes": ["source.abl", "string.quoted.double.abl"] },  // '&1.&2'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 48, "endIndex": 50, "scopes": ["source.abl", "string.quoted.double.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 42, "scopes": ["source.abl"] },  // '                                          '
      { "startIndex": 42, "endIndex": 69, "scopes": ["source.abl", "variable.other.abl"] },  // 'smartBusinessEntityAdapter1'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 70, "endIndex": 81, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'QueryHandle'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 82, "endIndex": 99, "scopes": ["source.abl", "support.function.abl"] },  // 'get-buffer-handle'
      { "startIndex": 99, "endIndex": 100, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 100, "endIndex": 101, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 101, "endIndex": 102, "scopes": ["source.abl", "constant.numeric.abl"] },  // '1'
      { "startIndex": 102, "endIndex": 103, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 103, "endIndex": 105, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 105, "endIndex": 126, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'BusinessEntityPackage'
      { "startIndex": 126, "endIndex": 127, "scopes": ["source.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 42, "scopes": ["source.abl"] },  // '                                          '
      { "startIndex": 42, "endIndex": 69, "scopes": ["source.abl", "variable.other.abl"] },  // 'smartBusinessEntityAdapter1'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 70, "endIndex": 81, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'QueryHandle'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 82, "endIndex": 99, "scopes": ["source.abl", "support.function.abl"] },  // 'get-buffer-handle'
      { "startIndex": 99, "endIndex": 100, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 100, "endIndex": 101, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 101, "endIndex": 102, "scopes": ["source.abl", "constant.numeric.abl"] },  // '1'
      { "startIndex": 102, "endIndex": 103, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 103, "endIndex": 105, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 105, "endIndex": 123, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'BusinessEntityName'
      { "startIndex": 123, "endIndex": 124, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 124, "endIndex": 125, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 125, "endIndex": 126, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] }  // 'else'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "variable.other.abl"] },  // 'cEntityName'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 56, "scopes": ["source.abl", "variable.other.abl"] },  // 'smartBusinessEntityAdapter1'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 57, "endIndex": 68, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'QueryHandle'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 69, "endIndex": 86, "scopes": ["source.abl", "support.function.abl"] },  // 'get-buffer-handle'
      { "startIndex": 86, "endIndex": 87, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 87, "endIndex": 88, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 88, "endIndex": 89, "scopes": ["source.abl", "constant.numeric.abl"] },  // '1'
      { "startIndex": 89, "endIndex": 90, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 90, "endIndex": 92, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // '::'
      { "startIndex": 92, "endIndex": 110, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'BusinessEntityName'
      { "startIndex": 110, "endIndex": 111, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 111, "endIndex": 112, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
