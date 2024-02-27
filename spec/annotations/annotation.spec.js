const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `@annotation (name="value").  `;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.declaration.annotation.abl", "storage.type.annotation.abl"] },  // '@annotation'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'name'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 19, "endIndex": 24, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // 'value'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 27, "endIndex": 30, "scopes": ["source.abl"] }  // '  '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `  @annotation.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '  '
    { "startIndex": 2, "endIndex": 14, "scopes": ["source.abl", "meta.declaration.annotation.abl", "storage.type.annotation.abl"] }  // '@annotation.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `@annotation (name="value", two="2", three='3').  `;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.declaration.annotation.abl", "storage.type.annotation.abl"] },  // '@annotation'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'name'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 19, "endIndex": 24, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // 'value'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // ','
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 30, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'two'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // '2'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // ','
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 41, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'three'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.single.complex.abl"] },  // '3'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 47, "endIndex": 50, "scopes": ["source.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

