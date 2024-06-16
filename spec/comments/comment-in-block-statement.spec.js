const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `DO
        /* Mike Fechner, Consultingwerk Ltd. 01.05.2013
           Bug SCL-31: STOP-AFTER support
           Variable stop-after is not supported on OE10.2B */
        &IF PROVERSION NE "10.2B" &THEN
           STOP-AFTER iStopAfter
        &ENDIF
           &IF "{&CATCH-STOP}" EQ "" &THEN ON STOP UNDO, RETURN ERROR NEW StopConditionException() &ENDIF:`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] }  // 'DO'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "meta.block.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 10, "endIndex": 56, "scopes": ["source.abl", "meta.block.abl", "comment.block.source.abl", "comment"] }  // ' Mike Fechner, Consultingwerk Ltd. 01.05.2013'
    ],
    [
      { "startIndex": 0, "endIndex": 42, "scopes": ["source.abl", "meta.block.abl", "comment.block.source.abl", "comment"] }  // '           Bug SCL-31: STOP-AFTER support'
    ],
    [
      { "startIndex": 0, "endIndex": 59, "scopes": ["source.abl", "meta.block.abl", "comment.block.source.abl", "comment"] },  // '           Variable stop-after is not supported on OE10.2B '
      { "startIndex": 59, "endIndex": 61, "scopes": ["source.abl", "meta.block.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl", "storage.type.function.abl"] },  // '&IF'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 22, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'PROVERSION'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // 'NE'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.block.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 27, "endIndex": 32, "scopes": ["source.abl", "meta.block.abl", "string.double.complex.abl"] },  // '10.2B'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.block.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 39, "scopes": ["source.abl", "meta.block.abl", "storage.type.function.abl"] }  // '&THEN'
    ],
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl"] },  // '           '
      { "startIndex": 11, "endIndex": 21, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'STOP-AFTER'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 32, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] }  // 'iStopAfter'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl", "storage.type.function.abl"] }  // '&ENDIF'
    ],
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl"] },  // '           '
      { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl", "storage.type.function.abl"] },  // '&IF'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.block.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 16, "endIndex": 29, "scopes": ["source.abl", "meta.block.abl", "string.double.complex.abl"] },  // '{&CATCH-STOP}'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.block.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // 'EQ'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.block.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.block.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 42, "scopes": ["source.abl", "meta.block.abl", "storage.type.function.abl"] },  // '&THEN'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'ON'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 50, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'STOP'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 55, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'UNDO'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.block.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 63, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'RETURN'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 64, "endIndex": 69, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'ERROR'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 70, "endIndex": 73, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'NEW'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 74, "endIndex": 106, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "entity.name.type.abl"] }  // 'StopConditionException() &ENDIF:'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `do /* something coming */ stop-after 10:
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 5, "scopes": ["source.abl", "meta.block.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 5, "endIndex": 23, "scopes": ["source.abl", "meta.block.abl", "comment.block.source.abl", "comment"] },  // ' something coming '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.block.abl", "comment.block.source.abl"] },  // '*/'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 36, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'stop-after'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '10'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `repeat while i < 10 /* only this
                       many digits */ :
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'repeat'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'while'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'i'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // '<'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '10'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.block.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 22, "endIndex": 33, "scopes": ["source.abl", "meta.block.abl", "comment.block.source.abl", "comment"] }  // ' only this'
    ],
    [
      { "startIndex": 0, "endIndex": 35, "scopes": ["source.abl", "meta.block.abl", "comment.block.source.abl", "comment"] },  // '                       many digits '
      { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl", "meta.block.abl", "comment.block.source.abl"] },  // '*/'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
