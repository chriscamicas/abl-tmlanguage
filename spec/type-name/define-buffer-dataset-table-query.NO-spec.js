const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
    let statement = `define buffer bTable for Table.`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
        { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.data.table.abl"] },
        { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 21, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 25, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.data.table.abl"] },
        { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `define private static buffer bTable for Table.`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
        { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 15, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
        { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 22, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 29, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.data.table.abl"] },
        { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 36, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 40, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.data.table.abl"] },
        { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `define protected temp-table ttData no-undo
    field f1 as character
    field d1 as datetime-tz
    field o1 as Progress.Lang.Object
    field o2 as Object
    index idx1 as primary f1
    .
    `;

    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
            { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
            { "startIndex": 7, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 17, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
            { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 22, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
            { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 28, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
            { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 35, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 16, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 16, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 16, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] },
            { "startIndex": 25, "endIndex": 29, "scopes": ["source.abl", "support.function.abl"] },
            { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.terminator.abl"] },
            { "startIndex": 30, "endIndex": 36, "scopes": ["source.abl", "support.function.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },
            { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "variable.other.abl"] },
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },
            { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },
            { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },
            { "startIndex": 10, "endIndex": 14, "scopes": ["source.abl", "variable.other.abl"] },
            { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },
            { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },
            { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },
            { "startIndex": 18, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },
            { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },
            { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl", "variable.other.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },
            { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "punctuation.terminator.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl"] }
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
    let statement = `define private static buffer bTable for Table
    label "abc"
    preselect.    
    super().`;

    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
            { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
            { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 15, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
            { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 22, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 29, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.data.table.abl"] },
            { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 36, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 40, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.data.table.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },
            { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.double.complex.abl"] },
            { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] }
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `define private buffer bTable for Table
    xml-node-name "aTable"
     namespace-uri 'x:y'
    .`;

    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
            { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
            { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 15, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
            { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 22, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.data.table.abl"] },
            { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 33, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.data.table.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },
            { "startIndex": 19, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.double.complex.abl"] },
            { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },
            { "startIndex": 20, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.single.complex.abl"] },
            { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] }
        ]

    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `define private buffer bTable for Table xml-node-name "aTable" namespace-uri 'x:y'.`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
        { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 15, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
        { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 22, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.data.table.abl"] },
        { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 33, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.data.table.abl"] },
        { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 39, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },
        { "startIndex": 54, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.double.complex.abl"] },
        { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },
        { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 62, "endIndex": 75, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },
        { "startIndex": 77, "endIndex": 80, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.single.complex.abl"] },
        { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },
        { "startIndex": 81, "endIndex": 83, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})