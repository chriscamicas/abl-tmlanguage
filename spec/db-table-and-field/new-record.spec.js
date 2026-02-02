const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `if new ( customer) then message 'new'.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 33, "endIndex": 36, "scopes": ["source.abl", "string.quoted.single.abl"] },  // 'new'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new customer then message 'new'.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 30, "endIndex": 33, "scopes": ["source.abl", "string.quoted.single.abl"] },  // 'new'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new ( s2k.customer) then message 'new'.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 21, "scopes": ["source.abl", "storage.data.table.abl"] },  // 's2k.customer'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 37, "endIndex": 40, "scopes": ["source.abl", "string.quoted.single.abl"] },  // 'new'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new s2k.customer then message 'new'.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 19, "scopes": ["source.abl", "storage.data.table.abl"] },  // 's2k.customer'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 24, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 32, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl", "string.quoted.single.abl"] },  // 'new'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new ( _index-field) then message 'new'.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 21, "scopes": ["source.abl", "storage.data.table.abl"] },  // '_index-field'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 37, "endIndex": 40, "scopes": ["source.abl", "string.quoted.single.abl"] },  // 'new'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new _field then message 'new'.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "storage.data.table.abl"] },  // '_field'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 28, "endIndex": 31, "scopes": ["source.abl", "string.quoted.single.abl"] },  // 'new'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new ({&file}) or {&file}.name <> old-{&file}.name then.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 10, "endIndex": 14, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'file'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'or'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 22, "endIndex": 26, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'file'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 28, "endIndex": 33, "scopes": ["source.abl"] },  // 'name '
    { "startIndex": 33, "endIndex": 35, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<>'
    { "startIndex": 35, "endIndex": 40, "scopes": ["source.abl"] },  // ' old-'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 42, "endIndex": 46, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'file'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 48, "endIndex": 53, "scopes": ["source.abl"] },  // 'name '
    { "startIndex": 53, "endIndex": 57, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new {&file} or {&file}.name <> old-{&file}.name then.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "storage.data.table.abl"] },  // '{&file}'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'or'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 20, "endIndex": 24, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'file'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 26, "endIndex": 31, "scopes": ["source.abl"] },  // 'name '
    { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<>'
    { "startIndex": 33, "endIndex": 38, "scopes": ["source.abl"] },  // ' old-'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 40, "endIndex": 44, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'file'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 46, "endIndex": 51, "scopes": ["source.abl"] },  // 'name '
    { "startIndex": 51, "endIndex": 55, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new buf-{&file} or buf-{&file}.name <> old-{&file}.name then.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 18, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'buf-{&file}'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'or'
    { "startIndex": 21, "endIndex": 26, "scopes": ["source.abl"] },  // ' buf-'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 28, "endIndex": 32, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'file'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 34, "endIndex": 39, "scopes": ["source.abl"] },  // 'name '
    { "startIndex": 39, "endIndex": 41, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<>'
    { "startIndex": 41, "endIndex": 46, "scopes": ["source.abl"] },  // ' old-'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 48, "endIndex": 52, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'file'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 54, "endIndex": 59, "scopes": ["source.abl"] },  // 'name '
    { "startIndex": 59, "endIndex": 63, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if new buf-{&file}-update then.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "support.function.abl"] },  // 'new'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 25, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'buf-{&file}-update'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 30, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})