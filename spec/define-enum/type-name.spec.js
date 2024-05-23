const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `enum Foo.Bar.BazEnum flags:
  define enum First
              Second
              None.
end enum.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'enum'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 20, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },  // 'Foo.Bar.BazEnum'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 26, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'flags'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'enum'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] }  // 'First'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // '              '
      { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] }  // 'Second'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // '              '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'None'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'enum'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `enum Foo.Bar.BazEnum flags:
  define enum First = 1
              Second
              None = 0xa2.
end enum.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'enum'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 20, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },  // 'Foo.Bar.BazEnum'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 26, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'flags'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'enum'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'First'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] }  // '1'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // '              '
      { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] }  // 'Second'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // '              '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'None'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '0xa2'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'enum'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `enum Foo.Bar.BazEnum flags:
  define enum First // first enum
              Second
              None /*no value*/ .
end enum.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'enum'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 20, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },  // 'Foo.Bar.BazEnum'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 26, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'flags'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'enum'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'First'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "comment.line.double-slash.abl"] }  // '// first enum'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // '              '
      { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] }  // 'Second'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // '              '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'None'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 21, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl", "comment"] },  // 'no value'
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] },  // '*/'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'enum'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `enum Foo.Bar.BazEnum flags:
  define enum First // first enum
              Second
              None /*no value*/
              Default = First.
end enum.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'enum'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 20, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },  // 'Foo.Bar.BazEnum'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 26, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'flags'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'enum'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'First'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "comment.line.double-slash.abl"] }  // '// first enum'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // '              '
      { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] }  // 'Second'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // '              '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'None'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 21, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl", "comment"] },  // 'no value'
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // '              '
      { "startIndex": 14, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'Default'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'First'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'enum'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})