const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `form
a at 15
skip()
with down# down row 12 no-labels no-box frame f-body.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] }  // 'form'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "variable.other.abl"] },  // 'a'
      { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'at'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '15'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'skip'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'with'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 10, "scopes": ["source.abl", "variable.other.abl"] },  // 'down#'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'down'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'row'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '12'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 32, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-labels'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 39, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-box'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 45, "scopes": ["source.abl", "keyword.other.abl"] },  // 'frame'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 52, "scopes": ["source.abl", "variable.other.abl"] },  // 'f-body'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `form
a at 15
skip()
with down# down row 12 no-labels no-box frame f-body.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] }  // 'form'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "variable.other.abl"] },  // 'a'
      { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'at'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '15'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'skip'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'with'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 10, "scopes": ["source.abl", "variable.other.abl"] },  // 'down#'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'down'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'row'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '12'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 32, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-labels'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 39, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-box'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 45, "scopes": ["source.abl", "keyword.other.abl"] },  // 'frame'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 52, "scopes": ["source.abl", "variable.other.abl"] },  // 'f-body'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `    /* DEFINE FRAME statement is approaching 4K Bytes.  Breaking it up   */
DEFINE new shared priVATE FRAME FRAME-A
     bups-loc AT ROW 12.29 COL 55 HELP
          "Select shipping location prefix"
     Scr-sales-loc AT ROW 12.29 COL 71 COLON-ALIGNED HELP
          "Enter sales location prefix."
     bsales-loc AT ROW 12.25 COL 77 HELP
          "Select location prefix"
     custname.group-id AT ROW 13.29 COL 13.86 COLON-ALIGNED HELP
          "Enter group ID."
          LABEL "Group ID"
          VIEW-AS FILL-IN NATIVE
          SIZE 13 BY .92
          FONT 14
     button-grpid AT ROW 13.25 COL 29.14 HELP
          "Select group ID."
     custname.agent-code AT ROW 14.29 COL 71 COLON-ALIGNED HELP
          "Enter agent code."
          LABEL "Agent Code" FORMAT "X(8)":U
          VIEW-AS FILL-IN NATIVE
          SIZE 9 BY .92
          FONT 14
    WITH 1 DOWN NO-BOX KEEP-TAB-ORDER OVERLAY
         PAGE-BOTTOM SIDE-LABELS THREE-D
         AT COL 1 ROW 1
         SIZE 91.72 BY 23.33
         FONT 8.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 6, "endIndex": 73, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' DEFINE FRAME statement is approaching 4K Bytes.  Breaking it up   '
      { "startIndex": 73, "endIndex": 75, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'new'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'shared'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'priVATE'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FRAME'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] }  // 'FRAME-A'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'bups-loc'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AT'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'ROW'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '12.29'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COL'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '55'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'HELP'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'Select shipping location prefix'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Scr-sales-loc'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AT'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'ROW'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '12.29'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COL'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '71'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLON-ALIGNED'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'HELP'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'Enter sales location prefix.'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'bsales-loc'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AT'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'ROW'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '12.25'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COL'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '77'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'HELP'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'Select location prefix'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'custname.group-id'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AT'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'ROW'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '13.29'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COL'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '13.86'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'COLON-ALIGNED'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 60, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'HELP'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'Enter group ID.'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'LABEL'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 17, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'Group ID'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'VIEW-AS'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'FILL-IN'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'NATIVE'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'SIZE'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '13'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '92'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FONT'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '14'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 17, "scopes": ["source.abl", "variable.other.abl"] },  // 'button-grpid'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AT'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 24, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ROW'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 30, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '13.25'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 34, "scopes": ["source.abl", "keyword.other.abl"] },  // 'COL'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 40, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '29.14'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 45, "scopes": ["source.abl", "keyword.other.abl"] }  // 'HELP'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 27, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'Select group ID.'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 24, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'custname.agent-code'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AT'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ROW'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 37, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '14.29'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 41, "scopes": ["source.abl", "keyword.other.abl"] },  // 'COL'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '71'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 58, "scopes": ["source.abl", "keyword.other.abl"] },  // 'COLON-ALIGNED'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 59, "endIndex": 63, "scopes": ["source.abl", "keyword.other.abl"] }  // 'HELP'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 28, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'Enter agent code.'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'LABEL'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 17, "endIndex": 27, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'Agent Code'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 35, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FORMAT'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 37, "endIndex": 41, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'X(8)'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl", "string.double.complex.abl", "support.other.abl"] }  // ':U'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'VIEW-AS'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FILL-IN'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 32, "scopes": ["source.abl", "keyword.other.abl"] }  // 'NATIVE'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SIZE'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '9'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 21, "endIndex": 23, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '92'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FONT'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '14'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WITH'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'DOWN'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-BOX'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 37, "scopes": ["source.abl", "keyword.other.abl"] },  // 'KEEP-TAB-ORDER'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 45, "scopes": ["source.abl", "keyword.other.abl"] }  // 'OVERLAY'
    ],
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl"] },  // '         '
      { "startIndex": 9, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'PAGE-BOTTOM'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 32, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SIDE-LABELS'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 40, "scopes": ["source.abl", "keyword.other.abl"] }  // 'THREE-D'
    ],
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl"] },  // '         '
      { "startIndex": 9, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AT'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'COL'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ROW'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '1'
    ],
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl"] },  // '         '
      { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SIZE'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '91.72'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'BY'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '23.33'
    ],
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl"] },  // '         '
      { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FONT'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '8'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

