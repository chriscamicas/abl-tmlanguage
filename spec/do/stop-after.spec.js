const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  //label-with-a-dot-inside.spec
  let statement = `do stop-after 12:
  /* comment */
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'stop-after'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '12'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 4, "endIndex": 13, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' comment '
      { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `do stop-after poParameter:StopAfter:
  if something then return.
  else
    super:Fn().
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'stop-after'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 25, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'poParameter'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 26, "endIndex": 35, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'StopAfter'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 14, "scopes": ["source.abl", "variable.other.abl"] },  // 'something'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'return'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] }  // 'else'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "variable.language.abl"] },  // 'super'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Fn'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})