const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `    /** Trims whitespace off the contained string */
  method public void Trim():
      /* we can't use the ABL TRIM keyword, since we run into
         name conflicts, so do a left- and right-trim instead. */
      assign mUTF8Value = right-trim(left-trim(mUTF8Value)).
  end method.
`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 6, "endIndex": 50, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // '* Trims whitespace off the contained string '
      { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.method.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 25, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'Trim'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 8, "endIndex": 62, "scopes": ["source.abl", "comment.block.source.abl", "comment"] }  // ' we can't use the ABL TRIM keyword, since we run into'
    ],
    [
      { "startIndex": 0, "endIndex": 63, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // '         name conflicts, so do a left- and right-trim instead. '
      { "startIndex": 63, "endIndex": 65, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 23, "scopes": ["source.abl", "variable.other.abl"] },  // 'mUTF8Value'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 36, "scopes": ["source.abl", "support.function.abl"] },  // 'right-trim'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 37, "endIndex": 46, "scopes": ["source.abl", "meta.function.arguments.abl", "support.function.abl"] },  // 'left-trim'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 47, "endIndex": 57, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'mUTF8Value'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})