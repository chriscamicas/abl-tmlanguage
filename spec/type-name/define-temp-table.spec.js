const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
    let statement = `define temp-table ttData no-undo
    field f1 as class Progress.Lang.Object
    field f3 as Object
  `;

    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
            { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 7, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
            { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 18, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttData'
            { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 25, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f1'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
            { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 22, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] }  // 'Progress.Lang.Object'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f3'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] }  // 'Object'
        ],
        [
            { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl"] }  // '  '
        ]

    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `define temp-table ttData no-undo
    field f1 as class Progress.Lang.Object /* long */
    field f2 as date init today
    field f3 as Object    // short version
    field f4 as clob initial ?
    .
  `;

    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
            { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 7, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
            { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 18, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttData'
            { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 25, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f1'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
            { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 22, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
            { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] },  // '/*'
            { "startIndex": 45, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl", "comment"] },  // ' long '
            { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] }  // '*/'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f2'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'date'
            { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 21, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'init'
            { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 26, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "constant.language.abl"] }  // 'today'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f3'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Object'
            { "startIndex": 22, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 26, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "comment.line.double-slash.abl"] }  // '// short version '
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f4'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'clob'
            { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'initial'
            { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "constant.language.abl"] }  // '?'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] }  // '  '
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `define temp-table ttData no-undo before-table btData
    field f1 as class Progress.Lang.Object /* long */
    field f2 as date init today
    field f3 as Object    // short version
    field f4 as clob initial ?
    .
  `;

    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
            { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 7, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
            { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 18, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttData'
            { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 25, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
            { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 33, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'before-table'
            { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 46, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'btData'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f1'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
            { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 22, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
            { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] },  // '/*'
            { "startIndex": 45, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl", "comment"] },  // ' long '
            { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] }  // '*/'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f2'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'date'
            { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 21, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'init'
            { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 26, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "constant.language.abl"] }  // 'today'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f3'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Object'
            { "startIndex": 22, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 26, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "comment.line.double-slash.abl"] }  // '// short version '
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f4'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'clob'
            { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'initial'
            { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "constant.language.abl"] }  // '?'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] }  // '  '
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `define temp-table ttData no-undo like Customer
    field f1 as class Progress.Lang.Object /* long */
    field f2 as date init today
    field f3 as Object    // short version
    field f4 as clob initial ?
    field f5 as int64
    field f6 as  Progress.Lang.Object /* long */
    .
  `;

    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
            { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 7, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
            { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 18, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttData'
            { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 25, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
            { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 33, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'like'
            { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 38, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'Customer'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f1'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
            { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 22, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
            { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] },  // '/*'
            { "startIndex": 45, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl", "comment"] },  // ' long '
            { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] }  // '*/'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f2'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'date'
            { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 21, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'init'
            { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 26, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "constant.language.abl"] }  // 'today'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f3'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Object'
            { "startIndex": 22, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 26, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "comment.line.double-slash.abl"] }  // '// short version '
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f4'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'clob'
            { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'initial'
            { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "constant.language.abl"] }  // '?'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f5'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] }  // 'int64'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f6'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
            { "startIndex": 17, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
            { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 38, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] },  // '/*'
            { "startIndex": 40, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl", "comment"] },  // ' long '
            { "startIndex": 46, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] }  // '*/'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] }  // '  '
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
    let statement = `define temp-table ttData no-undo before-table btData
    field f1 as class Progress.Lang.Object extent 12 /* long */
    field f2 as date init today extent 3
    field f3 as character format "X(32)" initial "q"
    .
  `;

    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
            { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 7, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
            { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 18, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttData'
            { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 25, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
            { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 33, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'before-table'
            { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 46, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'btData'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f1'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
            { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 22, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
            { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 43, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
            { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '12'
            { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 53, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] },  // '/*'
            { "startIndex": 55, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl", "comment"] },  // ' long '
            { "startIndex": 61, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "comment.block.source.abl"] }  // '*/'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f2'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'date'
            { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 21, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'init'
            { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 26, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "constant.language.abl"] },  // 'today'
            { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 32, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
            { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] }  // '3'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'field'
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'f3'
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 16, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'character'
            { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 26, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'format'
            { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
            { "startIndex": 34, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'X(32)'
            { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
            { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'initial'
            { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
            { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
            { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'q'
            { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
            { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
        ],
        [
            { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] }  // '  '
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
