const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `[ResourceMapping(
  type = "REST",
  operation = "read",
  URI = "?filter=~{filter~}",
  alias = "",
  mediaType = "application/json")
].`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 1, "endIndex": 16, "scopes": ["source.abl", "entity.name.tag.abl"] },  // 'ResourceMapping'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.brace.round.abl"] }  // '('
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "entity.other.attribute-name.abl"] },  // 'type'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 10, "endIndex": 14, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'REST'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 11, "scopes": ["source.abl", "entity.other.attribute-name.abl"] },  // 'operation'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 15, "endIndex": 19, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'read'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "entity.other.attribute-name.abl"] },  // 'URI'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "string.quoted.double.abl"] },  // '?filter='
      { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 19, "endIndex": 25, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'filter'
      { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~}'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "entity.other.attribute-name.abl"] },  // 'alias'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 11, "scopes": ["source.abl", "entity.other.attribute-name.abl"] },  // 'mediaType'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 15, "endIndex": 31, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'application/json'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.brace.round.abl"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `  [EmptyAnnotWithPArens ()].`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 3, "endIndex": 23, "scopes": ["source.abl", "entity.name.tag.abl"] },  // 'EmptyAnnotWithPArens'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = ` [ EmptyAnnot ].`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 13, "scopes": ["source.abl", "meta.array.literal.abl", "variable.other.abl"] },  // 'EmptyAnnot'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.array.literal.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
