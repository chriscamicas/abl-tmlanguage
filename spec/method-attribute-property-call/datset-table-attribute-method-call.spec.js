const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `dataset dsEmployee:apply-callback("BEFORE-FILL":U).
buffer eEmployee:apply-callback("BEFORE-FILL":U).
buffer eEmployee:apply-callback("BEFORE-ROW-FILL":U).`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'dataset'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 18, "scopes": ["source.abl", "storage.data.dataset.abl"] },  // 'dsEmployee'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 19, "endIndex": 33, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'apply-callback'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 35, "endIndex": 46, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'BEFORE-FILL'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'buffer'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 16, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'eEmployee'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 17, "endIndex": 31, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'apply-callback'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'BEFORE-FILL'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 45, "endIndex": 47, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'buffer'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 16, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'eEmployee'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 17, "endIndex": 31, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'apply-callback'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 33, "endIndex": 48, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'BEFORE-ROW-FILL'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
