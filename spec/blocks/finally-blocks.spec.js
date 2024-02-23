const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `FINALLY:
    ASSIGN oBusinessEntityDescriptor = ?.
END FINALLY.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'FINALLY'
      { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 36, "scopes": ["source.abl", "variable.other.abl"] },  // 'oBusinessEntityDescriptor'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "constant.language.abl"] },  // '?'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FINALLY'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FINALLY:
  END. // no finally on END`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'FINALLY'
      { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 27, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// no finally on END'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
