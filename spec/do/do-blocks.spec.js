const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  //label-with-a-dot-inside.spec
  let statement = `
DO mI = 1 TO 3 on error undo, throw:
    /* comment */
END.`;
  let expectedTokens = [
    [{ "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.do.abl", "keyword.other.abl"] },
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.do.abl"] },
      { "startIndex": 3, "endIndex": 5, "scopes": ["source.abl", "meta.do.abl", "variable.other.abl"] },
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.do.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.do.abl", "keyword.operator.source.abl"] },
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.do.abl"] },
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.do.abl", "constant.numeric.source.abl"] },
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.do.abl"] },
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.do.abl", "keyword.other.abl"] },
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.do.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.do.abl", "constant.numeric.source.abl"] },
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl"] }
    ], [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl"] },
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl", "comment.block.source.abl"] },
      { "startIndex": 6, "endIndex": 15, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl", "comment.block.source.abl", "comment"] },
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl", "comment.block.source.abl"] }
    ], [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl", "keyword.other.abl"] },
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }
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
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.do.abl", "keyword.other.abl"] },  // 'DO'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.do.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 8, "scopes": ["source.abl", "meta.do.abl", "meta.do.while.abl", "keyword.other.abl"] },  // 'WHILE'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.do.abl", "meta.do.while.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 11, "scopes": ["source.abl", "meta.do.abl", "meta.do.while.abl", "variable.other.abl"] },  // 'mI'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.do.abl", "meta.do.while.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.do.abl", "meta.do.while.abl", "keyword.operator.source.abl"] },  // '<='
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.do.abl", "meta.do.while.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.do.abl", "meta.do.while.abl", "constant.numeric.source.abl"] },  // '10'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl", "variable.other.abl"] },  // 'mI'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 11, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl", "variable.other.abl"] },  // 'mI'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl", "keyword.operator.source.abl"] },  // '+'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.do.abl", "meta.do.body.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})