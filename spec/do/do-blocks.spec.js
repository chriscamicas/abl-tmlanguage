const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  //label-with-a-dot-inside.spec
  let statement = `
DO mI = 1 TO 3 on error undo, throw:
    /* comment */
END.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'DO'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 5, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'mI'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "keyword.other"] },  // ' TO '
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '3'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'on'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 23, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'error'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 28, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'undo'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "separator.comma.abl"] },  // ','
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 35, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'throw'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.block.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 6, "endIndex": 15, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' comment '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  //label-with-a-dot-inside.spec
  let statement = `
DO WHILE mI <= 10:
    mI = mI + 1.
END.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'DO'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'WHILE'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'mI'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // '<='
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '10'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.block.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },  // 'mI'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'mI'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '+'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})