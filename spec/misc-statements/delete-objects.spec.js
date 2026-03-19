const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `// vProcedureHandle: entity.name.procedure.abl; meta.procedure.abl; source.abl
// no-error: entity.name.procedure.abl; meta.procedure.abl; source.abl
delete procedure vProcedureHandle no-error.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 78, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// vProcedureHandle: entity.name.procedure.abl; meta.procedure.abl; source.abl'
    ],
    [
      { "startIndex": 0, "endIndex": 70, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// no-error: entity.name.procedure.abl; meta.procedure.abl; source.abl'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'delete'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 16, "scopes": ["source.abl", "keyword.other.abl"] },  // 'procedure'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 33, "scopes": ["source.abl", "variable.other.abl"] },  // 'vProcedureHandle'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 42, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-error'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `// vProcedureHandle: variable.other.abl; source.abl
// no-error: keyword.other.abl; source.abl
delete object vProcedureHandle no-error.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 51, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// vProcedureHandle: variable.other.abl; source.abl'
    ],
    [
      { "startIndex": 0, "endIndex": 42, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// no-error: keyword.other.abl; source.abl'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'delete'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'object'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 30, "scopes": ["source.abl", "variable.other.abl"] },  // 'vProcedureHandle'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 39, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-error'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `delete WIDGET SELF.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'delete'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WIDGET'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "variable.language.abl"] },  // 'SELF'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
