const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `rmessage "asvasas" view-as alert-box warning.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "variable.other.abl"] },  // 'rmessage'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 10, "endIndex": 17, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'asvasas'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'view-as'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 36, "scopes": ["source.abl", "keyword.other.abl"] },  // 'alert-box'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 44, "scopes": ["source.abl", "keyword.other.abl"] },  // 'warning'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
