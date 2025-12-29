const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `if (check-value = true) then
  message "Yes" view-as alert-box.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 4, "endIndex": 15, "scopes": ["source.abl", "variable.other.abl"] },  // 'check-value'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "constant.language.abl"] },  // 'true'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] }  // 'then'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'Yes'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "keyword.other.abl"] },  // 'view-as'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 33, "scopes": ["source.abl", "keyword.other.abl"] },  // 'alert-box'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable new-data as integer no-undo.
define variable check-value as logical no-undo.

assign
  new-data = 12345
  check-value = true.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'new-data'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'integer'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'check-value'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'logical'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] }, // 'assign'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 10, "scopes": ["source.abl", "variable.other.abl"] },  // 'new-data'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 18, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '12345'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "variable.other.abl"] },  // 'check-value'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "constant.language.abl"] },  // 'true'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
