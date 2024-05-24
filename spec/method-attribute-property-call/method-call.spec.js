const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `assign oRequest = this-object:GenerateInvokeMethodProperties (input-output oOperation,
    input-output oArray,
    input-output poDocumentRoot,
    poRestMethod,
    pcParameters,
    oParameterDescriptions ).`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "variable.other.abl"] },  // 'oRequest'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 29, "scopes": ["source.abl", "variable.language.abl"] },  // 'this-object'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 30, "endIndex": 60, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'GenerateInvokeMethodProperties'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 62, "endIndex": 74, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input-output'
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 75, "endIndex": 85, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'oOperation'
      { "startIndex": 85, "endIndex": 86, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input-output'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 23, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'oArray'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input-output'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 31, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'poDocumentRoot'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'poRestMethod'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'pcParameters'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'oParameterDescriptions'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method private void CopyTable(input table copytable):
  CopyTable(table copytable by-reference,"","").
end method.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'private'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'CopyTable'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 30, "endIndex": 35, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 41, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'table'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.table.abl"] },  // 'copytable'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 11, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'CopyTable'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 12, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'table'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'copytable'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 40, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'by-reference'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
