const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `set-size(memPtr) = 27.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'set-size'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'memPtr'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '27'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

