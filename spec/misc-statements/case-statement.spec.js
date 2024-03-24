const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `case iLineNumber:
  when 1 then Assert:Equals("error", cLogLine).
  when 2 then Assert:Equals("error", cLogLine).
  when 3 then Assert:Equals("error", cLogLine).
  otherwise leave.
end case.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'case'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 16, "scopes": ["source.abl", "variable.other.abl"] },  // 'iLineNumber'
      { "startIndex": 16, "endIndex": 18, "scopes": ["source.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'when'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "variable.other.abl"] },  // 'Assert'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 21, "endIndex": 27, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Equals'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 29, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'error'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cLogLine'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'when'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '2'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "variable.other.abl"] },  // 'Assert'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 21, "endIndex": 27, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Equals'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 29, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'error'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cLogLine'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'when'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '3'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "variable.other.abl"] },  // 'Assert'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 21, "endIndex": 27, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Equals'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 29, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'error'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cLogLine'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'otherwise'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'leave'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'case'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
