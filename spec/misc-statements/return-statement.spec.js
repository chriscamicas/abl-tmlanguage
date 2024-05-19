const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `return(true).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'return'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 7, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'true'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `return(string(1)).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'return'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'string'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '1'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RETURN iValue.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RETURN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "variable.other.abl"] },  // 'iValue'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RETURN session:exit-code.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RETURN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "variable.language.abl"] },  // 'session'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 15, "endIndex": 24, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'exit-code'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})