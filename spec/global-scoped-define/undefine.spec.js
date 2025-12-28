const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `&undefine PROCEDURE-TYPE`;
  // `&Scoped-define PROCEDURE-TYPE Procedure
  // &Scoped-define DB-AWARE no`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 1, "endIndex": 9, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.define.abl"] },  // 'undefine'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 24, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] }  // 'PROCEDURE-TYPE'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `&undefi PROCEDURE-TYPE`;
  // `&Scoped-define PROCEDURE-TYPE Procedure
  // &Scoped-define DB-AWARE no`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 1, "endIndex": 7, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.define.abl"] },  // 'undefi'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 22, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] }  // 'PROCEDURE-TYPE'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `&undef PROCEDURE-TYPE`;
  // `&Scoped-define PROCEDURE-TYPE Procedure
  // &Scoped-define DB-AWARE no`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 1, "endIndex": 6, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.define.abl"] },  // 'undef'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 21, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] }  // 'PROCEDURE-TYPE'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
