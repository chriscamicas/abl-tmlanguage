const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `form
a at 15
skip()
with down# down row 12 no-labels no-box frame f-body.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] }  // 'form'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "variable.other.abl"] },  // 'a'
      { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'at'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "constant.numeric.source.abl"] }  // '15'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'skip'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'with'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 10, "scopes": ["source.abl", "variable.other.abl"] },  // 'down#'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'down'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'row'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '12'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 32, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-labels'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 39, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-box'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 45, "scopes": ["source.abl", "keyword.other.abl"] },  // 'frame'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 52, "scopes": ["source.abl", "variable.other.abl"] },  // 'f-body'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

