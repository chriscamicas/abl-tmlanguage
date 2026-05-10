const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `define button bCreate
  image-up file "fasafs.gif".`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'button'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'bCreate'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'image-up'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'file'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 17, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'fasafs.gif'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] },  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `DEFINE  PRIVATE  BUTTON button
  AUTO-GO
  AUTO-ENDKEY
  DEFAULT
  BGCOLOR expression
  CONTEXT-HELP-ID expression
  DCOLOR expression
  DROP-TARGET
  FGCOLOR expression
  FONT number
  IMAGE-DOWN image-phrase
  IMAGE  IMAGE-UP
  FILE name
    IMAGE-SIZE  IMAGE-SIZE-CHARS  IMAGE-SIZE-PIXELS
        33.22 BY 44.55

     FROM X 77 Y 77  ROW 6 COLUMN 9
  IMAGE-INSENSITIVE image-phrase
  MOUSE-POINTER name
  LABEL label
  LIKE button
  PFCOLOR expression
  SIZE  SIZE-CHARS  SIZE-PIXELS 11 BY 22
  NO-FOCUS  FLAT-BUTTON
  NO-CONVERT-3D-COLORS
  TOOLTIP tooltip.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'PRIVATE'
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 17, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BUTTON'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'button'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'AUTO-GO'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'AUTO-ENDKEY'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'DEFAULT'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BGCOLOR'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'expression'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'CONTEXT-HELP-ID'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'expression'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DCOLOR'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'expression'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'DROP-TARGET'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FGCOLOR'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }   // 'expression'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FONT'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'number'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'IMAGE-DOWN'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'image-phrase'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'IMAGE'
      { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'IMAGE-UP'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FILE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'name'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'IMAGE-SIZE'
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 16, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'IMAGE-SIZE-CHARS'
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 34, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'IMAGE-SIZE-PIXELS'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '33.22'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] }  // '44.55'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.define.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FROM'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'X'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '77'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'Y'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '77'
      { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 21, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'ROW'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '6'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLUMN'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] }  // '9'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'IMAGE-INSENSITIVE'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'image-phrase'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'MOUSE-POINTER'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'name'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LABEL'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'label'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LIKE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'button'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'PFCOLOR'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'expression'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SIZE'
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 8, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SIZE-CHARS'
      { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 20, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SIZE-PIXELS'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] },  // '11'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.abl"] }  // '22'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'NO-FOCUS'
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 12, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'FLAT-BUTTON'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'NO-CONVERT-3D-COLORS'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'TOOLTIP'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'tooltip'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
