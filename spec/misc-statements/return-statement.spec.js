const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `return(true).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'return'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 7, "endIndex": 11, "scopes": ["source.abl", "constant.language.abl"] },  // 'true'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `return(string(1)).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'return'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "support.function.abl"] },  // 'string'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "constant.numeric.abl"] },  // '1'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RETURN iValue.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'RETURN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "variable.other.abl"] },  // 'iValue'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RETURN session:exit-code.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'RETURN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "variable.language.abl"] },  // 'session'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
    { "startIndex": 15, "endIndex": 24, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'exit-code'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RETURN return-VALUE.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'RETURN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 19, "scopes": ["source.abl", "support.function.abl"] },  // 'return-VALUE'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `PROCEDURE xyz:
   RETURN ERROR "ok".
   RETURN "ok".
END.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.procedure.abl", "keyword.other.abl"] },  // 'PROCEDURE'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.procedure.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 13, "scopes": ["source.abl", "meta.procedure.abl", "entity.name.procedure.abl"] },  // 'xyz'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 3, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RETURN'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ERROR'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'ok'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 3, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RETURN'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'ok'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FUNCTION X RETURNS CHARACTER():
   RETURN "asdfasdf".
END.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FUNCTION'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "variable.other.abl"] },  // 'X'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RETURNS'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 28, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'CHARACTER'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 3, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RETURN'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 19, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'asdfasdf'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})