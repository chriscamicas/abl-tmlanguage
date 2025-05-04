const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `for each customer no-lock
while i < 10:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] }  // 'no-lock'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'while'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "variable.other.abl"] },  // 'i'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '10'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
