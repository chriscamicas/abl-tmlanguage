const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `define variable Avogadro as decimal init 6.02214076e+23.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'Avogadro'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'decimal'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'init'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '6.02214076e+23'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var decimal Avogadro = 6.02214076e+23.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'decimal'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'Avogadro'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 37, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '6.02214076e+23'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var integer someintval = 1.456e-3 + 4.246e+4.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'integer'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'someintval'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 33, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '1.456e-3'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '+'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 44, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '4.246e+4'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var decimal[] planetsDiameterkm = [12.742e+3, 4.8794e+3, 6779.0, 12.104e+3, 23766e-1].`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'decimal'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'planetsDiameterkm'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 35, "endIndex": 44, "scopes": ["source.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '12.742e+3'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 55, "scopes": ["source.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '4.8794e+3'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 57, "endIndex": 63, "scopes": ["source.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '6779.0'
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 65, "endIndex": 74, "scopes": ["source.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '12.104e+3'
    { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 76, "endIndex": 84, "scopes": ["source.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '23766e-1'
    { "startIndex": 84, "endIndex": 85, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 85, "endIndex": 86, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable Avogadro as decimal init 0.
Avogadro = decimal("6.02214076e+23").`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'Avogadro'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'decimal'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'init'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '0'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "variable.other.abl"] },  // 'Avogadro'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'decimal'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 20, "endIndex": 34, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // '6.02214076e+23'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable Avogadro as decimal init 6.02214076e+23 format "9.9999<<e+99".`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'Avogadro'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'decimal'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'init'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '6.02214076e+23'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 56, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'format'
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 64, "endIndex": 76, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // '9.9999<<e+99'
    { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `    fix-codepage(jsondata) = "utf-8".
jsondata = '~{ "somevalue": 123e+5 ~}'.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'fix-codepage'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 17, "endIndex": 25, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'jsondata'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 30, "endIndex": 35, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'utf-8'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "variable.other.abl"] },  // 'jsondata'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "string.quoted.single.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 14, "endIndex": 35, "scopes": ["source.abl", "string.quoted.single.abl"] },  // ' "somevalue": 123e+5 '
      { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl", "string.quoted.single.abl", "constant.character.escape.abl"] },  // '~}'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `jsondata:Add("somevalue", 123e+5 ).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "variable.other.abl"] },  // 'jsondata'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 9, "endIndex": 12, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Add'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 14, "endIndex": 23, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'somevalue'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '123e+5'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
