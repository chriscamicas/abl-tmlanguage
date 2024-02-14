const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `&Scoped-define PROCEDURE-TYPE Procedure`;
  // `&Scoped-define PROCEDURE-TYPE Procedure
  // &Scoped-define DB-AWARE no`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.define.abl", "keyword.other.abl"] },
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.preprocessor.define.abl"] },
    { "startIndex": 15, "endIndex": 29, "scopes": ["source.abl", "meta.preprocessor.define.abl", "entity.name.function.preprocessor.abl"] },
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.preprocessor.define.abl"] },
    { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.preprocessor.define.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement =
    `&Scoped-define PROCEDURE-TYPE Procedure
&Scoped-define DB-AWARE no`;

  let expectedTokens = [
    [{ "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.define.abl", "keyword.other.abl"] },
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.preprocessor.define.abl"] },
    { "startIndex": 15, "endIndex": 29, "scopes": ["source.abl", "meta.preprocessor.define.abl", "entity.name.function.preprocessor.abl"] },
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.preprocessor.define.abl"] },
    { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.preprocessor.define.abl"] }],
    [{ "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.preprocessor.define.abl", "keyword.other.abl"] },
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.preprocessor.define.abl"] },
    { "startIndex": 15, "endIndex": 23, "scopes": ["source.abl", "meta.preprocessor.define.abl", "entity.name.function.preprocessor.abl"] },
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.preprocessor.define.abl"] },
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.preprocessor.define.abl"] }]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
