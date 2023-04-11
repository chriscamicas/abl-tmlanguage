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
            { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "keyword.other.abl"] },  // 'property'
            { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "variable.other.abl"] },  // 'AThing'
            { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "entity.name.type.abl"] },  // 'IHttpClient'
            { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "keyword.other.abl"] }  // 'no-undo'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.other.abl"] },  // 'get'
            { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "meta.function.parameters"] },  // '('
            { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] }  // '):'
        ],
        [
            { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // '     '
            { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.other.abl"] },  // 'return'
            { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // ' '
            { "startIndex": 12, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "variable.language.abl"] },  // 'this-object'
            { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "punctuation.terminator.abl"] },  // ':'
            { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "support.function.abl"] },  // 'AThing'
            { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.other.abl"] },  // 'end'
            { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "punctuation.terminator.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.other.abl"] },  // 'set'
            { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "meta.function.parameters"] },  // '('
            { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "meta.function.parameters", "variable.parameter.abl"] },  // 'pVal'
            { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "meta.function.parameters"] },  // ' '
            { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'as'
            { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "meta.function.parameters"] },  // ' '
            { "startIndex": 14, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "meta.function.parameters", "entity.name.type.abl"] },  // 'IHttpClient'
            { "startIndex": 25, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] }  // '):'
        ],
        [
            { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // '     '
            { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "variable.other.abl"] },  // 'AThing'
            { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // ' '
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.operator.source.abl"] },  // '='
            { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // ' '
            { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "variable.other.abl"] },  // 'pVal'
            { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.other.abl"] },  // 'end'
            { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // ' '
            { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.other.abl"] },  // 'set'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "punctuation.terminator.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl"] }  // '  '
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
            { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "keyword.other.abl"] },  // 'property'
            { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "variable.other.abl"] },  // 'AThing'
            { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "entity.name.type.abl"] },  // 'IHttpClient'
            { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "keyword.other.abl"] }  // 'no-undo'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.other.abl"] },  // 'get'
            { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // ' '
            { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "punctuation.terminator.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.other.abl"] },  // 'set'
            { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "punctuation.terminator.abl"] },  // '.'
            { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] }  // ' '
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
            { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "keyword.other.abl"] },  // 'property'
            { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "variable.other.abl"] },  // 'AThing'
            { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "entity.name.type.abl"] },  // 'IHttpClient'
            { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "keyword.other.abl"] }  // 'no-undo'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
            { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 9, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.other.abl"] },  // 'get'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "punctuation.terminator.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'private'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.other.abl"] },  // 'set'
            { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "punctuation.terminator.abl"] },  // '.'
            { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] }  // ' '
        ],
        [
            { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl"] }  // '  '
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
            { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
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
            { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "keyword.other.abl"] },  // 'property'
            { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "variable.other.abl"] },  // 'AThing'
            { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // ' '
            { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl", "entity.name.type.abl"] },  // 'IHttpClient'
            { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] }  // ' '
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.property.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'public'
            { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 9, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.other.abl"] },  // 'get'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "punctuation.terminator.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
            { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'private'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "keyword.other.abl"] },  // 'set'
            { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.accessor.abl", "punctuation.terminator.abl"] },  // '.'
            { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] }  // ' '
        ],
        [
            { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl"] }  // '  '
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
            { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})