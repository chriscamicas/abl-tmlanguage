const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `CATCH ple AS Progress.Lang.Error :
    oSwaggerHelper:LogError ("ProcessLinks":U, ple) .

    UNDO, THROW ple .
END CATCH.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CATCH'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl", "variable.parameter.abl"] },  // 'ple'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 32, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Error'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 18, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'oSwaggerHelper'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ':'
      { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'LogError'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 30, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'ProcessLinks'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 47, "endIndex": 50, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'ple'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'UNDO'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "separator.comma.abl"] },  // ','
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'THROW'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "variable.other.abl"] },  // 'ple'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CATCH'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
