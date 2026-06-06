const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `obj:meth(security-policy:ENCODE-PASSWORD(password, prefix)).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "variable.other.abl"] },  // 'obj'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'meth'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 9, "endIndex": 24, "scopes": ["source.abl", "variable.language.abl"] },  // 'security-policy'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
    { "startIndex": 25, "endIndex": 40, "scopes": ["source.abl", "support.function.abl"] },  // 'ENCODE-PASSWORD'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 41, "endIndex": 49, "scopes": ["source.abl", "variable.other.abl"] },  // 'password'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 51, "endIndex": 57, "scopes": ["source.abl", "variable.other.abl"] },  // 'prefix'
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `obj:meth(security-policy:validate-PASSWORD("abc123", cEncPw)).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "variable.other.abl"] },  // 'obj'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'meth'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 9, "endIndex": 24, "scopes": ["source.abl", "variable.language.abl"] },  // 'security-policy'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
    { "startIndex": 25, "endIndex": 42, "scopes": ["source.abl", "support.function.abl"] },  // 'validate-PASSWORD'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'abc123'
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 59, "scopes": ["source.abl", "variable.other.abl"] },  // 'cEncPw'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
