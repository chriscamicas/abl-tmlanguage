const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `undo, return error new Example.Exception(1).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'undo'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "separator.comma.abl"] },  // ','
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'return'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'error'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'new'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 40, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'Example.Exception'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '1'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl"] },  // ')'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `undo block-1, leave block-2.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'undo'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 12, "scopes": ["source.abl", "meta.block.label.abl"] },  // 'block-1'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "separator.comma.abl"] },  // ','
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'leave'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 27, "scopes": ["source.abl", "meta.block.label.abl"] },  // 'block-2'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `undo block-1, return.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'undo'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 12, "scopes": ["source.abl", "meta.block.label.abl"] },  // 'block-1'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "separator.comma.abl"] },  // ','
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'return'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `undo block-1, return "1":u.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'undo'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 12, "scopes": ["source.abl", "meta.block.label.abl"] },  // 'block-1'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "separator.comma.abl"] },  // ','
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'return'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "string.double.complex.abl"] },  // '1'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "support.other.abl"] },  // ':u'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `undo block-1, return error "2":u.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'undo'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 12, "scopes": ["source.abl", "meta.block.label.abl"] },  // 'block-1'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "separator.comma.abl"] },  // ','
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'return'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'error'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "string.double.complex.abl"] },  // '2'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "support.other.abl"] },  // ':u'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `undo block-1, return no-apply.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'undo'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 12, "scopes": ["source.abl", "meta.block.label.abl"] },  // 'block-1'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "separator.comma.abl"] },  // ','
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'return'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 29, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-apply'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `undo, return error objErr.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'undo'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "separator.comma.abl"] },  // ','
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'return'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'error'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 25, "scopes": ["source.abl", "variable.other.abl"] },  // 'objErr'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `undo, throw objErr.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'undo'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "separator.comma.abl"] },  // ','
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'throw'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 18, "scopes": ["source.abl", "variable.other.abl"] },  // 'objErr'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `undo, throw ErrorService:GetError(now, "boom").`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'undo'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "separator.comma.abl"] },  // ','
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'throw'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 24, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'ErrorService'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ':'
    { "startIndex": 25, "endIndex": 33, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'GetError'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'now'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 40, "endIndex": 44, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'boom'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ')'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `undo, throw self:error-object.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'undo'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "separator.comma.abl"] },  // ','
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'throw'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 16, "scopes": ["source.abl", "variable.language.abl"] },  // 'self'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // ':'
    { "startIndex": 17, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'error-object'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
