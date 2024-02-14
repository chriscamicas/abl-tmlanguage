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
      { "startIndex": 10, "endIndex": 26, "scopes": ["source.abl", "meta.procedure.abl", "entity.name.function.abl"] },  // 'EnumPrinters{&A}'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.procedure.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 35, "scopes": ["source.abl", "meta.procedure.abl", "keyword.other.abl"] },  // 'EXTERNAL'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.procedure.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.procedure.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 37, "endIndex": 49, "scopes": ["source.abl", "meta.procedure.abl", "string.double.complex.abl"] },  // 'winspool.drv'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.procedure.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl"] }  // ':'
    ], [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl"] }  // ''
    ], [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "keyword.other.abl"] },  // 'end procedure'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
