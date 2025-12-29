const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `ASSIGN x = NEW foo.bar.baz()`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "variable.other.abl"] },  // 'x'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEW'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `ASSIGN x = NEW foo.bar.baz(true, ?)`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "variable.other.abl"] },  // 'x'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEW'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 27, "endIndex": 31, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'true'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // '?'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `ASSIGN oVar = NEW "foo.bar.baz" (true, ?)`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oVar'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEW'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 19, "endIndex": 30, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'foo.bar.baz'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 33, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'true'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // '?'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `ASSIGN oVar = NEW List <Object>(true, ?)`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oVar'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEW'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 23, "scopes": ["source.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'List '
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Object'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 32, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'true'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // '?'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `ASSIGN oVar = NEW Progress.Collections.List<String> (new Comparer())`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oVar'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEW'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 43, "scopes": ["source.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Progress.Collections.List'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'String'
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 53, "endIndex": 56, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'new'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 57, "endIndex": 65, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.type.abl"] },  // 'Comparer'
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `ASSIGN oVar = new Map<String, Tuple<String,Number,Row>> ()`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oVar'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'new'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Map'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 22, "endIndex": 28, "scopes": ["source.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'String'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.generic.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.generic.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 35, "scopes": ["source.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Tuple'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 36, "endIndex": 42, "scopes": ["source.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'String'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 43, "endIndex": 49, "scopes": ["source.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Number'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Row'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `ASSIGN oVar = new Tuple<String,Number,Row> ()`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oVar'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'new'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 23, "scopes": ["source.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Tuple'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'String'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.generic.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 31, "endIndex": 37, "scopes": ["source.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Number'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.generic.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 38, "endIndex": 41, "scopes": ["source.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Row'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
