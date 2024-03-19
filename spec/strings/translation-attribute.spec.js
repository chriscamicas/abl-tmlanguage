const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  // the :R in the method name should not be marked as a string colon-R
  let statement = `if valid-object(oEventArgs:ResponseBody) then
    assign oResponse:ContentType = "application/json":u
            oResponse:Entity      = oEventArgs:ResponseBody.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'valid-object'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 16, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'oEventArgs'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ':'
      { "startIndex": 27, "endIndex": 39, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'ResponseBody'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 45, "scopes": ["source.abl", "keyword.other.abl"] }  // 'then'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 20, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'oResponse'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ':'
      { "startIndex": 21, "endIndex": 32, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'ContentType'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 36, "endIndex": 52, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'application/json'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 53, "endIndex": 55, "scopes": ["source.abl", "support.other.abl"] }  // ':u'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 21, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'oResponse'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ':'
      { "startIndex": 22, "endIndex": 28, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Entity'
      { "startIndex": 28, "endIndex": 34, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 46, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'oEventArgs'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl"] },  // ':'
      { "startIndex": 47, "endIndex": 59, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'ResponseBody'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})