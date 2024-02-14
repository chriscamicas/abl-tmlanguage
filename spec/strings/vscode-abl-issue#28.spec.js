const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `replace("123", "1", ")"). message 1.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.function.abl"] },
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },
    { "startIndex": 9, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl"] },
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl"] },
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl"] },
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.function-call.abl"] },
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl"] },
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.terminator.abl"] },
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },
    { "startIndex": 26, "endIndex": 33, "scopes": ["source.abl", "keyword.other.abl"] },
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "constant.numeric.source.abl"] },
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
