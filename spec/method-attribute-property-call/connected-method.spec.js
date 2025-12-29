const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `create server hSrv.
hSrv:connect('-URL http://localhost:1234/apsv').`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'create'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'server'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "variable.other.abl"] },  // 'hSrv'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "variable.other.abl"] },  // 'hSrv'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 5, "endIndex": 12, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'connect'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
      { "startIndex": 14, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.single.abl"] },  // '-URL http://localhost:1234/apsv'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
