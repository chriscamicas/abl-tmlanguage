const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `
SessionManager:ContextDataset:WRITE-XML ( "longchar":U,
                                          lcDataset,
                                          "EMPTY":U, ?, ?).`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "variable.other.abl"] },  // 'SessionManager'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 15, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'ContextDataset'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'WRITE-XML'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 43, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'longchar'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 52, "endIndex": 54, "scopes": ["source.abl", "meta.function.arguments.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '                                          '
      { "startIndex": 42, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lcDataset'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '                                          '
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 43, "endIndex": 48, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'EMPTY'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // '?'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // '?'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `
SessionManager:ContextDataset:READ-XML ( "longchar":U,
                                          lcDataset,
                                          "EMPTY":U, ?, ?).`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "variable.other.abl"] },  // 'SessionManager'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 15, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'ContextDataset'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 30, "endIndex": 38, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'READ-XML'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 42, "endIndex": 50, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'longchar'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.function.arguments.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '                                          '
      { "startIndex": 42, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lcDataset'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '                                          '
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 43, "endIndex": 48, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'EMPTY'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // '?'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // '?'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

