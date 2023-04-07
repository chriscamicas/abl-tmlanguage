const { assert, expect } = require('chai');
const shared = require('../shared.js');



describe('', () => {
  let statement = `define public property AThing as IHttpClient no-undo
  get():
     return this-object:AThing.
  end.
  set(pVal as IHttpClient):
     AThing = pVal.
  end set.
  `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'property'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'AThing'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'IHttpClient'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "keyword.other.abl"] },  // 'get'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "meta.function.parameters", "meta.brace.round.js"] },  // '('
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "meta.function.parameters", "meta.brace.round.js"] },  // ')'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "keyword.other.abl"] },  // 'return'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "variable.language.abl"] },  // 'this-object'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "punctuation.terminator.abl"] },  // ':'
      { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "entity.name.function.abl"] },  // 'AThing'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.setter.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.setter.abl", "keyword.other.abl"] },  // 'set'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters", "meta.brace.round.js"] },  // '('
      { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters", "variable.parameter.abl"] },  // 'pVal'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'as'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 14, "endIndex": 25, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters", "entity.name.type.abl"] },  // 'IHttpClient'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.setter.abl", "meta.function.parameters", "meta.brace.round.js"] },  // ')'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.setter.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.setter.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "meta.define.setter.abl", "variable.other.abl"] },  // 'AThing'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.setter.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.setter.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.setter.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.setter.abl", "variable.other.abl"] },  // 'pVal'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.setter.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.setter.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.setter.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.setter.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl", "meta.define.setter.abl", "keyword.other.abl"] },  // 'set'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] }  // '  '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define public property AThing as IHttpClient no-undo
  get .
  set. `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'property'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'AThing'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'IHttpClient'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "keyword.other.abl"] },  // 'get'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.setter.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.setter.abl", "keyword.other.abl"] },  // 'set'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl"] }  // ' '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})



describe('', () => {
  let statement = `define public property AThing as IHttpClient no-undo
  public get .
  private set.

  define buffer b for temp-table tt.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'property'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'AThing'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'IHttpClient'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "keyword.other.abl"] },  // 'get'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'private'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 13, "scopes": ["source.abl", "meta.define.setter.abl", "keyword.other.abl"] },  // 'set'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // '  '
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'buffer'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'b'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'tt'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define public property AThing as IHttpClient
  public get .
  private set.

  define buffer b for temp-table tt.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'property'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'AThing'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] }  // 'IHttpClient'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "keyword.other.abl"] },  // 'get'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'private'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 13, "scopes": ["source.abl", "meta.define.setter.abl", "keyword.other.abl"] },  // 'set'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'buffer'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'b'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'tt'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define public property AThing as IHttpClient no-undo
get .`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'property'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'AThing'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'IHttpClient'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl", "keyword.other.abl"] },  // 'get'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl", "meta.define.getter.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define public property AThing as IHttpClient no-undo
set. `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'property'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'AThing'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'IHttpClient'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "meta.define.setter.abl", "keyword.other.abl"] },  // 'set'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl"] }  // ' '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
