const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `&global-define PROCEDURE-TYPE Procedure`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 1, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.define.abl"] },  // 'global-define'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 29, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'PROCEDURE-TYPE'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "keyword.other.abl"] }  // 'Procedure'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `&global-define~
SOMETHING value`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 1, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.define.abl"] },  // 'global-define'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.separator.continuation"] }  // '~'
    ],
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'SOMETHING'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] }  // 'value'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('test is for global-define, the preprocessor name and the endline continuations', () => {
  let statement = `&global-define~
SOMETHING value~
more value~
done`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 1, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.abl", "keyword.control.directive.define.abl"] },  // 'global-define'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.separator.continuation"] }  // '~'
    ],
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'SOMETHING'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.preprocessor.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'value'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "punctuation.separator.continuation"] }  // '~'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "variable.other.abl"] },  // 'more'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'value'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "punctuation.separator.continuation"] }  // '~'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "variable.other.abl"] }  // 'done'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
