const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `abc = guid.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "variable.other.abl"] },  // 'abc'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "support.function.abl"] },  // 'guid'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `pwr = guid(generate-uuid).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "variable.other.abl"] },  // 'pwr'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'guid'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 11, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "support.function.abl"] },  // 'generate-uuid'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `DEFINE VARIABLE MyUUID AS RAW       NO-UNDO.
DEFINE VARIABLE vGUID  AS CHARACTER NO-UNDO.

ASSIGN
  MyUUID = GENERATE-UUID
  vGUID  = GUID(MyUUID).`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'VARIABLE'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'MyUUID'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'RAW'
      { "startIndex": 29, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // '       '
      { "startIndex": 36, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'NO-UNDO'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'VARIABLE'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'vGUID'
      { "startIndex": 21, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'CHARACTER'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'NO-UNDO'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] }  // 'ASSIGN'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "variable.other.abl"] },  // 'MyUUID'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 24, "scopes": ["source.abl", "support.function.abl"] }  // 'GENERATE-UUID'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "variable.other.abl"] },  // 'vGUID'
      { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'GUID'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'MyUUID'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
