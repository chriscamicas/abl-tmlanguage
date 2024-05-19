const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `{Consultingwerk/linqGeneric.i SerializableAnnotation oAnnotation in oMethod:Annotations
  WHERE Name EQ "'@ParameterSchema'":U}`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 1, "endIndex": 29, "scopes": ["source.abl", "meta.include.abl", "meta.other.include.abl"] },  // 'Consultingwerk/linqGeneric.i'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 52, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] },  // 'SerializableAnnotation'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 64, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] },  // 'oAnnotation'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 67, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] },  // 'in'
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 68, "endIndex": 87, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] }  // 'oMethod:Annotations'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] },  // 'WHERE'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 12, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] },  // 'Name'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] },  // 'EQ'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 17, "endIndex": 35, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl"] },  // ''@ParameterSchema''
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 36, "endIndex": 38, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
    ]
  ];

  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

