const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `&IF OPSYS EQ "UNIX"
&THEN &SCOPED-DEFINE SD_SLASH "/"
&ELSE &SCOPED-DEFINE SD_SLASH "\"
&ENDIF`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 1, "endIndex": 3, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.conditional.abl"] },  // 'IF'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "support.function.abl"] },  // 'OPSYS'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "keyword.operator.abl"] },  // 'EQ'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'UNIX'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 1, "endIndex": 5, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.conditional.abl"] },  // 'THEN'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.preprocessor.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 7, "endIndex": 20, "scopes": ["source.abl", "meta.preprocessor.abl", "meta.preprocessor.abl", "keyword.control.directive.define.abl"] },  // 'SCOPED-DEFINE'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 29, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'SD_SLASH'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "string.quoted.double.abl"] },  // '/'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 1, "endIndex": 5, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.conditional.abl"] },  // 'ELSE'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.preprocessor.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 7, "endIndex": 20, "scopes": ["source.abl", "meta.preprocessor.abl", "meta.preprocessor.abl", "keyword.control.directive.define.abl"] },  // 'SCOPED-DEFINE'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 29, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'SD_SLASH'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 1, "endIndex": 6, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.conditional.abl"] }  // 'ENDIF'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
