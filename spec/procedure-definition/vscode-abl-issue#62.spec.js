const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `PROCEDURE EnumPrinters{&A} EXTERNAL "winspool.drv":

end procedure.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.procedure.abl", "keyword.other.abl"] },  // 'PROCEDURE'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.procedure.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 22, "scopes": ["source.abl", "meta.procedure.abl", "entity.name.procedure.abl"] },  // 'EnumPrinters'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.procedure.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.procedure.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.procedure.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'A'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.procedure.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.procedure.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 35, "scopes": ["source.abl", "meta.procedure.abl", "keyword.other.abl"] },  // 'EXTERNAL'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.procedure.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.procedure.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 37, "endIndex": 49, "scopes": ["source.abl", "meta.procedure.abl", "string.quoted.double.abl"] },  // 'winspool.drv'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.procedure.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'procedure'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
11