const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `catch e as Progress.Lang.Error:`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'catch'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "variable.other.abl"] },  // 'e'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 30, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Error'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `catch e as Progress.Lang.Error : `;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'catch'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "variable.other.abl"] },  // 'e'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 30, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Error'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // ':'
    { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `catch eThing as ThingException: `;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'catch'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "variable.other.abl"] },  // 'eThing'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 30, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'ThingException'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // ':'
    { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
