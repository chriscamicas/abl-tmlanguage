const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `&ANALYZE-SUSPEND _VERSION-NUMBER AB_v10r12
&ANALYZE-RESUME`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 17, "scopes": ["source.abl", "comment.preprocessor.analyze-suspend.abl"] },  // '&ANALYZE-SUSPEND '
      { "startIndex": 17, "endIndex": 42, "scopes": ["source.abl", "comment.preprocessor.analyze-suspend.abl"] }  // '_VERSION-NUMBER AB_v10r12'
    ],
    [
      { "startIndex": 0, "endIndex": 16, "scopes": ["source.abl", "comment.preprocessor.analyze-suspend.abl"] }  // '&ANALYZE-RESUME'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
