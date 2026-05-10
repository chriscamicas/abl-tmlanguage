const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `DEFINE RECTANGLE RECT-1
     EDGE-PIXELS 3 GRAPHIC-EDGE  NO-FILL
     SIZE 89.72 BY 3.13
     FGCOLOR 0 .`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'RECTANGLE'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] }  // 'RECT-1'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'EDGE-PIXELS'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '3'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'GRAPHIC-EDGE'
      { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 33, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }, // 'NO-FILL'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SIZE'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '89.72'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] }  // '3.13'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FGCOLOR'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '0'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
