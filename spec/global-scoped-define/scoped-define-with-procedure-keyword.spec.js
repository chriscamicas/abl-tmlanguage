const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `&Scoped-define PROCEDURE-TYPE Procedure`;
  // `&Scoped-define PROCEDURE-TYPE Procedure
  // &Scoped-define DB-AWARE no`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 1, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.define.abl"] },  // 'Scoped-define'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 29, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'PROCEDURE-TYPE'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "keyword.other.abl"] }  // 'Procedure'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `&Scoped-define PROCEDURE-TYPE Procedure
&Scoped-define DB-AWARE no`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 1, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.define.abl"] },  // 'Scoped-define'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 29, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'PROCEDURE-TYPE'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "keyword.other.abl"] }  // 'Procedure'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 1, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.define.abl"] },  // 'Scoped-define'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 23, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'DB-AWARE'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "constant.language.abl"] }  // 'no'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `&Scoped-define ~
PROCEDURE-TYPE  ~
Procedure`;
  // `&Scoped-define PROCEDURE-TYPE Procedure
  // &Scoped-define DB-AWARE no`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 1, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.define.abl"] },  // 'Scoped-define'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.preprocessor.abl", "constant.character.escape.abl"] }  // '~'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'PROCEDURE-TYPE'
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // '  '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "constant.character.escape.abl"] }  // '~'
    ],
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] }  // 'Procedure'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
