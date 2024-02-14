const shared = require('../shared.js');

describe('', () => {
  let statement = `{ test.i {&Test} }`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },
    { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "string.unquoted.include-argument.abl"] },
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.include.abl"] },
    { "startIndex": 9, "endIndex": 16, "scopes": ["source.abl", "meta.include.abl", "keyword.other"] },
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.include.abl"] },
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `{ test.i &abc = ABC &def    = 'D E  F' &hij="H   I   J" }`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },
    { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "string.unquoted.include-argument.abl"] },
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.include.abl"] },
    { "startIndex": 9, "endIndex": 19, "scopes": ["source.abl", "meta.include.abl", "meta.include-named-argument"] },
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.include.abl"] },
    { "startIndex": 20, "endIndex": 38, "scopes": ["source.abl", "meta.include.abl", "meta.include-named-argument"] },
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.include.abl"] },
    { "startIndex": 39, "endIndex": 55, "scopes": ["source.abl", "meta.include.abl", "meta.include-named-argument"] },
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.include.abl"] },
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
