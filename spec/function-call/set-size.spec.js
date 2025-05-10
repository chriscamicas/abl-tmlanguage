const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `set-size(memPtr) = 27.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'set-size'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'memPtr'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '27'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `set-size(objref:Value) = 27.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'set-size'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'objref'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.function.abl"] },  // 'Value'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '27'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `set-size(package.sub.type:Value) = 27.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'set-size'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 9, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'package.sub.type'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 26, "endIndex": 31, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.function.abl"] },  // 'Value'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '27'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

