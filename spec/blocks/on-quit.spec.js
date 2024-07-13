const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `do on error  undo, leave
  on endkey undo, leave
  on stop   undo, leave
  on quit   undo, leave:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 5, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'on'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'error'
      { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // '  '
      { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'undo'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.block.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 24, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] }  // 'leave'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'on'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'endkey'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 16, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'undo'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 23, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] }  // 'leave'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'on'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 9, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'stop'
      { "startIndex": 9, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // '   '
      { "startIndex": 12, "endIndex": 16, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'undo'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 23, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] }  // 'leave'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'on'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 9, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'quit'
      { "startIndex": 9, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // '   '
      { "startIndex": 12, "endIndex": 16, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'undo'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 23, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'leave'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

