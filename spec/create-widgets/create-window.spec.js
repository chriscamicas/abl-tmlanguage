const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `IF SESSION:DISPLAY-TYPE = "GUI":U THEN
  CREATE WINDOW W-Win ASSIGN
        HIDDEN             = YES
        TITLE              = "A/R Customer Statement for"
        COLUMN             = 1
        ROW                = 1
        HEIGHT             = 16
        WIDTH              = 90
        MAX-HEIGHT         = 16
        MAX-WIDTH          = 90
        VIRTUAL-HEIGHT     = 16
        VIRTUAL-WIDTH      = 90
        RESIZE             = yes
        SCROLL-BARS        = no
        STATUS-AREA        = no
        BGCOLOR            = ?
        FGCOLOR            = ?
        THREE-D            = yes
        FONT               = 1
        MESSAGE-AREA       = no
        SENSITIVE          = yes.
ELSE {&WINDOW-NAME} = CURRENT-WINDOW.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'IF'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 10, "scopes": ["source.abl", "variable.language.abl"] },  // 'SESSION'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 11, "endIndex": 23, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'DISPLAY-TYPE'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 27, "endIndex": 30, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'GUI'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "string.double.complex.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 38, "scopes": ["source.abl", "keyword.other.abl"] }  // 'THEN'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CREATE'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WINDOW'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "variable.other.abl"] },  // 'W-Win'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] }  // 'ASSIGN'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'HIDDEN'
      { "startIndex": 14, "endIndex": 27, "scopes": ["source.abl"] },  // '             '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "constant.language.abl"] }  // 'YES'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TITLE'
      { "startIndex": 13, "endIndex": 27, "scopes": ["source.abl"] },  // '              '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 30, "endIndex": 56, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'A/R Customer Statement for'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'COLUMN'
      { "startIndex": 14, "endIndex": 27, "scopes": ["source.abl"] },  // '             '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '1'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ROW'
      { "startIndex": 11, "endIndex": 27, "scopes": ["source.abl"] },  // '                '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '1'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'HEIGHT'
      { "startIndex": 14, "endIndex": 27, "scopes": ["source.abl"] },  // '             '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '16'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WIDTH'
      { "startIndex": 13, "endIndex": 27, "scopes": ["source.abl"] },  // '              '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '90'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'MAX-HEIGHT'
      { "startIndex": 18, "endIndex": 27, "scopes": ["source.abl"] },  // '         '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '16'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'MAX-WIDTH'
      { "startIndex": 17, "endIndex": 27, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '90'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'VIRTUAL-HEIGHT'
      { "startIndex": 22, "endIndex": 27, "scopes": ["source.abl"] },  // '     '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '16'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'VIRTUAL-WIDTH'
      { "startIndex": 21, "endIndex": 27, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '90'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RESIZE'
      { "startIndex": 14, "endIndex": 27, "scopes": ["source.abl"] },  // '             '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "constant.language.abl"] }  // 'yes'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SCROLL-BARS'
      { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "constant.language.abl"] }  // 'no'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'STATUS-AREA'
      { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "constant.language.abl"] }  // 'no'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BGCOLOR'
      { "startIndex": 15, "endIndex": 27, "scopes": ["source.abl"] },  // '            '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "constant.language.abl"] }  // '?'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FGCOLOR'
      { "startIndex": 15, "endIndex": 27, "scopes": ["source.abl"] },  // '            '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "constant.language.abl"] }  // '?'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'THREE-D'
      { "startIndex": 15, "endIndex": 27, "scopes": ["source.abl"] },  // '            '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "constant.language.abl"] }  // 'yes'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FONT'
      { "startIndex": 12, "endIndex": 27, "scopes": ["source.abl"] },  // '               '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '1'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'MESSAGE-AREA'
      { "startIndex": 20, "endIndex": 27, "scopes": ["source.abl"] },  // '       '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "constant.language.abl"] }  // 'no'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SENSITIVE'
      { "startIndex": 17, "endIndex": 27, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "constant.language.abl"] },  // 'yes'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ELSE'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 19, "scopes": ["source.abl", "storage.type.function.abl"] },  // '{&WINDOW-NAME}'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 36, "scopes": ["source.abl", "variable.language.abl"] },  // 'CURRENT-WINDOW'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})