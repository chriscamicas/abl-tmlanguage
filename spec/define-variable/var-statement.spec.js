const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `var longchar[] names.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'longchar'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'names'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var integer cnt, loop.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'integer'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'cnt'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 17, "endIndex": 21, "scopes": ["source.abl", "variable.other.abl"] },  // 'loop'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var Property prop.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Property'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'prop'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var character propName.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'character'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'propName'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var character[] chrArray.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'character'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'chrArray'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var JsonArray ja.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'JsonArray'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'ja'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var class JsonArray ja.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'JsonArray'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'ja'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var IPrimitiveHolder[4] ph.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'IPrimitiveHolder'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '4'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'ph'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var int i.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'int'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'i'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var Object c.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Object'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'c'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var static longchar[] names.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'static'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'longchar'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'names'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var package-protected int64 names.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'package-protected'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'int64'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'names'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var public static datetime dtz1 = now`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'static'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'datetime'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'dtz1'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl", "constant.language.abl"] }  // 'now'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var public static datetime dtz1 = now, dtz2 = add-interval(now, 12, 'milliseconds').`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'static'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'datetime'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'dtz1'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl", "constant.language.abl"] },  // 'now'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 43, "scopes": ["source.abl", "variable.other.abl"] },  // 'dtz2'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 58, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'add-interval'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 59, "endIndex": 62, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'now'
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 64, "endIndex": 66, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '12'
    { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 69, "endIndex": 81, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.single.abl"] },  // 'milliseconds'
    { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 82, "endIndex": 83, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 83, "endIndex": 84, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var public /*must be public*/ static datetime[{&MAX-SIZE}] dtz1 = now`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] },  // '/*'
    { "startIndex": 13, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl", "comment"] },  // 'must be public'
    { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] },  // '*/'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'static'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 45, "scopes": ["source.abl", "storage.type.abl"] },  // 'datetime'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.array.literal.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.array.literal.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 48, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'MAX-SIZE'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 59, "endIndex": 63, "scopes": ["source.abl", "variable.other.abl"] },  // 'dtz1'
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 66, "endIndex": 69, "scopes": ["source.abl", "constant.language.abl"] }  // 'now'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `        var Progress.Collections.IIterator<KeyValuePair<Object, Object>> iter.
        var ISet mapKeys = new Set().`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Progress.Collections.IIterator'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
      { "startIndex": 43, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'KeyValuePair'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
      { "startIndex": 56, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Object'
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl", "meta.generic.abl", "meta.generic.abl"] },  // ' '
      { "startIndex": 64, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl", "meta.generic.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Object'
      { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.define.abl", "meta.generic.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.define.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 73, "endIndex": 77, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'iter'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'ISet'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'mapKeys'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 30, "scopes": ["source.abl", "keyword.other.abl"] },  // 'new'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 34, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'Set'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var integer loop, cnt, idx = mBackingList:IndexOf(pItem).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'integer'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'loop'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "variable.other.abl"] },  // 'cnt'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 26, "scopes": ["source.abl", "variable.other.abl"] },  // 'idx'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 41, "scopes": ["source.abl", "variable.other.abl"] },  // 'mBackingList'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 42, "endIndex": 49, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'IndexOf'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 50, "endIndex": 55, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'pItem'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var class memptr mData`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'memptr'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 17, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'mData'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var    memptr   mData`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'memptr'
    { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'mData'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var class George oGeorge.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'George'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 17, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'oGeorge'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var decimal pie = 22 / 3, piIsh = 3.1415927.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'decimal'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'pie'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '22'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '/'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '3'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 31, "scopes": ["source.abl", "variable.other.abl"] },  // 'piIsh'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 43, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '3.1415927'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var  datetime[] dtz1 = [now, today, ?, today, now].`
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 5, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'datetime'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'dtz1'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'now'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 34, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'today'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // '?'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 44, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'today'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 49, "scopes": ["source.abl", "meta.array.literal.abl", "constant.language.abl"] },  // 'now'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var      ClassMyClass cmc.`
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
    { "startIndex": 9, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'ClassMyClass'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'cmc'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `var     class   ClassMyClass cmc.`
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
    { "startIndex": 3, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '     '
    { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
    { "startIndex": 13, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // '   '
    { "startIndex": 16, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'ClassMyClass'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'cmc'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
