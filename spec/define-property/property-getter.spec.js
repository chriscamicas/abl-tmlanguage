const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `    define final public non-serializable property Value as longchar no-undo
  get():
      // no need for changes if we're using UTF-8 as CPINTERNAL
      if this-object:Encoding eq 'UTF-8':u then
          return mUTF8Value.
      else
          return codepage-convert(mUTF8Value, this-object:Encoding).
  end get.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'final'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'non-serializable'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'property'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'Value'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 59, "endIndex": 67, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'longchar'
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 68, "endIndex": 75, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'get'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "meta.function.parameters", "meta.brace.round.js"] },  // '('
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "meta.function.parameters", "meta.brace.round.js"] },  // ')'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "comment.line.double-slash.abl"] }  // '// no need for changes if we're using UTF-8 as CPINTERNAL'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "variable.language.abl"] },  // 'this-object'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 21, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'Encoding'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.operator.source.abl"] },  // 'eq'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
      { "startIndex": 34, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "string.single.complex.abl"] },  // 'UTF-8'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
      { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "string.single.complex.abl", "support.other.abl"] },  // ':u'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 43, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'then'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'return'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'mUTF8Value'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'else'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'return'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "support.function.abl"] },  // 'codepage-convert'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 34, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'mUTF8Value'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.language.abl"] },  // 'this-object'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 58, "endIndex": 66, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'Encoding'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.define.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'get'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

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
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 36, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'right-trim'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 37, "endIndex": 46, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'left-trim'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 47, "endIndex": 57, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'mUTF8Value'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
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