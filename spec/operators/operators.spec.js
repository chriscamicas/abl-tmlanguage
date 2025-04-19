const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `dValue = 12 * 24.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },  // 'dValue'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 11, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '12'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '*'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '24'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `dValue = today * 24.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },  // 'dValue'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 14, "scopes": ["source.abl", "constant.language.abl"] },  // 'today'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '*'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '24'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `dValue *= 24.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },  // 'dValue'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '*='
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '24'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `dValue \\= 24.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },  // 'dValue'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '\='
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '24'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `dValue += "thing":u.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },  // 'dValue'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '+='
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 11, "endIndex": 16, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'thing'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "string.double.complex.abl", "support.other.abl"] },  // ':u'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if not v_condition then    .
else if NOT(v_condition) then .
else if v_string matches "foo" then .
else if Not v_string matches "bar" then .`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'not'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 18, "scopes": ["source.abl", "variable.other.abl"] },  // 'v_condition'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'else'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'NOT'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 12, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'v_condition'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 29, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'else'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 16, "scopes": ["source.abl", "variable.other.abl"] },  // 'v_string'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 24, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'matches'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 26, "endIndex": 29, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'foo'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 35, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'else'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'Not'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 20, "scopes": ["source.abl", "variable.other.abl"] },  // 'v_string'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'matches'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 30, "endIndex": 33, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'bar'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 39, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
