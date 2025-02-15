const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
  let statement = `method public void foo( po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 41, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public Progress.Lang.Object foo( po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 34, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 38, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public Progress.Collections.List<String> Get_List( po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Progress.Collections.List'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 40, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'String'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 48, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'Get_List'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 58, "endIndex": 60, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 61, "endIndex": 63, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 64, "endIndex": 75, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public Progress.Collections.List<String> Get_List( po as List<foo.bar.baz>):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Progress.Collections.List'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 40, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'String'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 48, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'Get_List'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 58, "endIndex": 60, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 61, "endIndex": 63, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 64, "endIndex": 68, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'List'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 69, "endIndex": 80, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 82, "endIndex": 83, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public Progress.Lang.Object foo( po as foo.bar.baz
                                                             po2 as JsonObject,
                                                             po3 as logical):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 34, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 38, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    ],
    [
      { "startIndex": 0, "endIndex": 61, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                                             '
      { "startIndex": 61, "endIndex": 64, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po2'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 67, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 68, "endIndex": 78, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'JsonObject'
      { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] },  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 61, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                                             '
      { "startIndex": 61, "endIndex": 64, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po3'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 67, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 68, "endIndex": 75, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'logical'
      { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public Progress.Lang.Object foo( po as foo.bar.baz
                                                             , po2 as JsonObject
                                                             , po3 as logical):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 34, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 38, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] }  // 'foo.bar.baz'
    ],
    [
      { "startIndex": 0, "endIndex": 61, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                                             '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 63, "endIndex": 66, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po2'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 67, "endIndex": 69, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 70, "endIndex": 80, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] }  // 'JsonObject'
    ],
    [
      { "startIndex": 0, "endIndex": 61, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                                             '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 63, "endIndex": 66, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po3'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 67, "endIndex": 69, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 70, "endIndex": 77, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'logical'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method package-protected Progress.Lang.Object foo( po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'package-protected'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 45, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 49, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 57, "endIndex": 68, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method protected Progress.Lang.Object foo( po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 16, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'protected'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 17, "endIndex": 37, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 41, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 48, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 60, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method private static  Progress.Lang.Object foo( po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'private'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 21, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'static'
    { "startIndex": 21, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl"] },  // '  '
    { "startIndex": 23, "endIndex": 43, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 44, "endIndex": 47, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 52, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 55, "endIndex": 66, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo( pc as character, po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pc'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 43, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 47, "endIndex": 58, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method abstract public datetime-tz foo( pc as character, po as foo.bar.baz).`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'abstract'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 34, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'datetime-tz'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 38, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pc'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 55, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 57, "endIndex": 59, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 60, "endIndex": 62, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 63, "endIndex": 74, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo( pc as character,
                                            po as foo.bar.baz):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pc'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 61, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `METHOD PUBLIC VOID foo( pc as character,
                                            po as class foo.bar.baz):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'METHOD'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'PUBLIC'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'VOID'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pc'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 55, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'class'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 67, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `METHOD PUBLIC 'System.Byte[]' foo( pc as character,
                                            po as "System.Byte[]"):`;


  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'METHOD'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'PUBLIC'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.method.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
      { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.method.abl", "string.single.complex.abl"] },  // 'System.Byte[]'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 33, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pc'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 51, "endIndex": 64, "scopes": ["source.abl", "meta.define.method.abl", "string.double.complex.abl"] },  // 'System.Byte[]'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.method.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo( pc as character,
                                            po as baz):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pc'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'baz'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo( pc as character,
                                            po as baz)
                                            /* comment */
                                            :
                        var int i.
                    end method.    `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pc'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'baz'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 46, "endIndex": 55, "scopes": ["source.abl", "meta.define.method.abl", "comment.block.source.abl", "comment"] },  // ' comment '
      { "startIndex": 55, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 24, "scopes": ["source.abl"] },  // '                        '
      { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'var'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 31, "scopes": ["source.abl", "storage.type.abl"] },  // 'int'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "storage.type.abl"] },  // 'i'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 20, "scopes": ["source.abl"] },  // '                    '
      { "startIndex": 20, "endIndex": 23, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 31, "endIndex": 36, "scopes": ["source.abl"] }  // '    '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method /*public*/ void  foo (
            pc as character,
            po as baz
            )
            // comment
            :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl", "meta.define.method.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "meta.define.method.abl", "comment.block.source.abl", "comment"] },  // 'public'
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.method.abl", "comment.block.source.abl"] },  // '*/'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl"] },  // '  '
      { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] }  // '('
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.define.method.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pc'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.define.method.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] }  // 'baz'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.define.method.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.define.method.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "comment.line.double-slash.abl"] }  // '// comment '
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.define.method.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }   // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo(input pc as character,
                                            output po as foo.bar.baz,
                                            buffer pb for Table,
                                            input-output dataset-handle hh):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pc'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'output'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 68, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'buffer'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.table.abl"] },  // 'pb'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 58, "endIndex": 63, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.table.abl"] },  // 'Table'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input-output'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 71, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'dataset-handle'
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 72, "endIndex": 74, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'hh'
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo(input pc as character,
                                            output po as foo.bar.baz,
                                            buffer pb for Table   preselect,
                                            input-output dataset-handle hh):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pc'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'output'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 68, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'buffer'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.table.abl"] },  // 'pb'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 58, "endIndex": 63, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.table.abl"] },  // 'Table'
      { "startIndex": 63, "endIndex": 66, "scopes": ["source.abl", "meta.define.method.abl"] },  // '   '
      { "startIndex": 66, "endIndex": 75, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'preselect'
      { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input-output'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 71, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'dataset-handle'
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 72, "endIndex": 74, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'hh'
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];

  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo(input pc as character extent 99,
                                            output po as foo.bar.baz extent,
                                            buffer pb for Table,
                                            input-output dataset-handle hh):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pc'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'extent'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 52, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl", "constant.numeric.source.abl"] },  // '99'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'output'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 68, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 69, "endIndex": 75, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'extent'
      { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'buffer'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.table.abl"] },  // 'pb'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 58, "endIndex": 63, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.table.abl"] },  // 'Table'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input-output'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 71, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'dataset-handle'
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 72, "endIndex": 74, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'hh'
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo(table ttItem,
                                            input-output dataset dsCustomer):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'foo'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'table'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 35, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.table.abl"] },  // 'ttItem'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                            '
      { "startIndex": 44, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input-output'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 64, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'dataset'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 75, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.dataset.abl"] },  // 'dsCustomer'
      { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method private void ExtractEntity(input poResponse as IHttpResponse,
    input poMessageBody as ByteBucket):
end method.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'private'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 33, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'ExtractEntity'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 34, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'poResponse'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 67, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'IHttpResponse'
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.method.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'poMessageBody'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 37, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'ByteBucket'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public Tuple<foo, Map<bar,baz>> Get_Tuple( po as Tuple<foo, Map<bar,baz>>):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Tuple'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 20, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'foo'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 28, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Map'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'bar'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 33, "endIndex": 36, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'baz'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 48, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'Get_Tuple'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 55, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
    { "startIndex": 56, "endIndex": 61, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Tuple'
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 62, "endIndex": 65, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'foo'
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 67, "endIndex": 70, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Map'
    { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 71, "endIndex": 74, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'bar'
    { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 75, "endIndex": 78, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'baz'
    { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl", "meta.define.method.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})