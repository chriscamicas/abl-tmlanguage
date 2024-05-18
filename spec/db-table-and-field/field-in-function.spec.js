const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `/* must have no space after '1' */
  v-credit-manager = ENTRY(1,oe-credit-class.DESCRIPTION, " ").`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 2, "endIndex": 32, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' must have no space after '1' '
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 18, "scopes": ["source.abl", "variable.other.abl"] },  // 'v-credit-manager'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'ENTRY'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 29, "endIndex": 56, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'oe-credit-class.DESCRIPTION'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // ' '
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `v-credit-manager = ENTRY(1, oe-credit-class.DESCRIPTION, " ").`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 16, "scopes": ["source.abl", "variable.other.abl"] },  // 'v-credit-manager'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'ENTRY'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '1'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 55, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'oe-credit-class.DESCRIPTION'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // ' '
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
