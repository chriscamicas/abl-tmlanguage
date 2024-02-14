const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `def var c_test as char no-undo.
c_test = 'Test message':u.
trim(c_test)`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] }
    ], [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.operator.source.abl"] },
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },
      { "startIndex": 10, "endIndex": 22, "scopes": ["source.abl", "string.single.complex.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "support.function.abl"] },
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }
    ], [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.function.abl"] },
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },
      { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }
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
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] }
    ], [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.operator.source.abl"] },
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },
      { "startIndex": 10, "endIndex": 22, "scopes": ["source.abl", "string.single.complex.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "support.function.abl"] },
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }
    ], [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.function.abl"] },
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl"] },
      { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }
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
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] }
    ], [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.operator.source.abl"] },
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },
      { "startIndex": 10, "endIndex": 22, "scopes": ["source.abl", "string.single.complex.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "support.function.abl"] },
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }
    ], [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.function.abl"] },
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },
      { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl"] },
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
