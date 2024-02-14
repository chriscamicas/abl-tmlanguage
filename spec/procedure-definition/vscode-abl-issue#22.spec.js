const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `PROCEDURE GetCurrentProcessId EXTERNAL "KERNEL32.DLL":
DEFINE RETURN PARAMETER intProcessHandle AS LONG.
END PROCEDURE.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.procedure.abl", "keyword.other.abl"] },  // 'PROCEDURE'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.procedure.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 29, "scopes": ["source.abl", "meta.procedure.abl", "entity.name.function.abl"] },  // 'GetCurrentProcessId'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.procedure.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 38, "scopes": ["source.abl", "meta.procedure.abl", "keyword.other.abl"] },  // 'EXTERNAL'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.procedure.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.procedure.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 40, "endIndex": 52, "scopes": ["source.abl", "meta.procedure.abl", "string.double.complex.abl"] },  // 'KERNEL32.DLL'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.procedure.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl"] }  // ':'
    ], [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },  // 'RETURN'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "meta.define.abl", "meta.define.parameter.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 23, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },  // 'PARAMETER'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "meta.define.abl", "meta.define.parameter.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 40, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "meta.define.abl", "meta.define.parameter.abl", "variable.parameter.abl"] },  // 'intProcessHandle'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "meta.define.abl", "meta.define.parameter.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 43, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "meta.define.abl", "meta.define.parameter.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 48, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },  // 'LONG'
      { "startIndex": 48, "endIndex": 50, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl"] }  // '.'
    ], [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "keyword.other.abl"] },  // 'END PROCEDURE'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // 'END'
    ]
  ];

  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
