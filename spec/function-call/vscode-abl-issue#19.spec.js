const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `def var c_test as char no-undo.
c_test = 'Test message':u.
trim(c_test)`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'def'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'c_test'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'char'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },  // 'c_test'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
      { "startIndex": 10, "endIndex": 22, "scopes": ["source.abl", "string.single.complex.abl"] },  // 'Test message'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "support.other.abl"] },  // ':u'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'trim'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'c_test'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `def var c_test as char no-undo.
c_test = 'Test message':u.
trim( c_test)`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'def'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'c_test'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'char'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },  // 'c_test'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
      { "startIndex": 10, "endIndex": 22, "scopes": ["source.abl", "string.single.complex.abl"] },  // 'Test message'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "support.other.abl"] },  // ':u'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'trim'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'c_test'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement =
    `def var c_test as char no-undo.
c_test = 'Test message':u.
trim(c_test )`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'def'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'c_test'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'char'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },  // 'c_test'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
      { "startIndex": 10, "endIndex": 22, "scopes": ["source.abl", "string.single.complex.abl"] },  // 'Test message'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "support.other.abl"] },  // ':u'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'trim'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'c_test'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
