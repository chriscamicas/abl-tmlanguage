const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
  let statement = `define variable xxx as foo.bar.baz no-undo.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'xxx'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable xxx as class foo.bar.baz no-undo.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'xxx'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable xxx as class foo.bar.baz no-undo extent.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'xxx'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable xxx as class foo.bar.baz no-undo extent .`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'xxx'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable xxx as class foo.bar.baz  extent 14 no-undo.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'xxx'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 42, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '14'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 52, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define static package-protected abstract variable xxx as  foo.bar.baz  no-undo`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'static'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'package-protected'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'abstract'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'xxx'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 56, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 58, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 69, "endIndex": 71, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 71, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define public property AThing as IHttpClient no-undo
  get():
     return this-object:AThing.
  end.
  set(pVal as IHttpClient):
     AThing = pVal.
  end set.
  `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'property'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'AThing'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'IHttpClient'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "keyword.other.abl"] },  // 'get'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "meta.function.parameters", "meta.brace.round.js"] },  // '('
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "meta.function.parameters", "meta.brace.round.js"] },  // ')'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "keyword.other.abl"] },  // 'return'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "variable.language.abl"] },  // 'this-object'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "punctuation.terminator.abl"] },  // ':'
      { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "entity.name.function.abl"] },  // 'AThing'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.setter.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.setter.abl", "keyword.other.abl"] },  // 'set'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters", "meta.brace.round.js"] },  // '('
      { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters", "variable.parameter.abl"] },  // 'pVal'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'as'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 14, "endIndex": 25, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters", "entity.name.type.abl"] },  // 'IHttpClient'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters", "meta.brace.round.js"] },  // ')'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.setter.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.setter.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "meta.define.setter.abl", "variable.other.abl"] },  // 'AThing'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.setter.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.setter.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.setter.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.setter.abl", "variable.other.abl"] },  // 'pVal'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.setter.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.setter.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.setter.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.setter.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl", "meta.define.setter.abl", "keyword.other.abl"] },  // 'set'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] }  // '  '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define public property AThing as IHttpClient no-undo
  get .
  set. `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'property'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'AThing'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'IHttpClient'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "keyword.other.abl"] },  // 'get'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.setter.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.setter.abl", "keyword.other.abl"] },  // 'set'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl"] }  // ' '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
