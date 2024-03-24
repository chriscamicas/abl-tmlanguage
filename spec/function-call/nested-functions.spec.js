const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `cassignvalues = cassignvalues
    + substitute(cFormattesdvalues,
                 "characterValues":U,
                 iCharMaxVal,
                 substitute(cParamNameValue, cPrettyName),
                 Consultingwerk.Const:CRLF).`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "variable.other.abl"] },  // 'cassignvalues'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 29, "scopes": ["source.abl", "variable.other.abl"] }  // 'cassignvalues'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '+'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'substitute'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 17, "endIndex": 34, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cFormattesdvalues'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // '                 '
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 18, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'characterValues'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 34, "endIndex": 36, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // '                 '
      { "startIndex": 17, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'iCharMaxVal'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl"] },  // '                 '
      { "startIndex": 17, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'substitute'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 28, "endIndex": 43, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cParamNameValue'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 56, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cPrettyName'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // '                 '
      { "startIndex": 17, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.type.abl"] },  // 'Consultingwerk.Const'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 38, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'CRLF'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `cDbQuery          = QueryHelper:InsertExpressionForBuffer(cDbQuery,
      substitute("&1 = &2":U,
                b_eField.FieldSource,
                cParameterName),
      entry(1, b_eField.FieldSource, ".":u)).`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "variable.other.abl"] },  // 'cDbQuery'
      { "startIndex": 8, "endIndex": 18, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 31, "scopes": ["source.abl", "variable.other.abl"] },  // 'QueryHelper'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 32, "endIndex": 57, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'InsertExpressionForBuffer'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 58, "endIndex": 66, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cDbQuery'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'substitute'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 18, "endIndex": 25, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // '&1 = &2'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // '                '
      { "startIndex": 16, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'b_eField.FieldSource'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // '                '
      { "startIndex": 16, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cParameterName'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 11, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'entry'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'b_eField.FieldSource'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // '.'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "support.other.abl"] },  // ':u'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

