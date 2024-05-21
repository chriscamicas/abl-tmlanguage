const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `assign defaultDomain = this-object:DefaultCookieDomain.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 20, "scopes": ["source.abl", "variable.other.abl"] },  // 'defaultDomain'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 34, "scopes": ["source.abl", "variable.language.abl"] },  // 'this-object'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 35, "endIndex": 54, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'DefaultCookieDomain'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

