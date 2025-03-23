const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `{&_proparse_ prolint-nowarn(overflow)}
assign attrValue = BuildAttributeValue(string(attribNames[attribLoop]), annoData).`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 38, "scopes": ["source.abl", "storage.type.function.abl"] }  // '{&_proparse_ prolint-nowarn(overflow)}'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 16, "scopes": ["source.abl", "variable.other.abl"] },  // 'attrValue'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 38, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'BuildAttributeValue'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'string'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 46, "endIndex": 57, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'attribNames'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 58, "endIndex": 68, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.array.literal.abl", "variable.other.abl"] },  // 'attribLoop'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 72, "endIndex": 80, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'annoData'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable i as integer no-undo init {&DEBUG-WAIT}.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'i'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'integer'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'init'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 42, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '{&DEBUG-WAIT}'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `{&WINDOW-SYSTEM}`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 16, "scopes": ["source.abl", "storage.type.function.abl"] }  // '{&WINDOW-SYSTEM}'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
