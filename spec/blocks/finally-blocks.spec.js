const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `FINALLY:
    ASSIGN oBusinessEntityDescriptor = ?.
END FINALLY.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'FINALLY'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 36, "scopes": ["source.abl", "variable.other.abl"] },  // 'oBusinessEntityDescriptor'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "constant.language.abl"] },  // '?'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FINALLY'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FINALLY:
  END. // no finally on END`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'FINALLY'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 27, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// no finally on END'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `finally.
  if valid-object(oMenu) then delete object oMenu no-error.
end finally.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'finally'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'valid-object'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 18, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'oMenu'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 29, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 36, "scopes": ["source.abl", "keyword.other.abl"] },  // 'delete'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 43, "scopes": ["source.abl", "keyword.other.abl"] },  // 'object'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 49, "scopes": ["source.abl", "variable.other.abl"] },  // 'oMenu'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 58, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-error'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'finally'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
