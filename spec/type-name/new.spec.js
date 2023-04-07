const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
    let statement = `ASSIGN x = NEW foo.bar.baz()`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },
        { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },
        { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },
        { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },
        { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "meta.function-call.new.abl", "keyword.other.abl"] },
        { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.new.abl"] },
        { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.new.abl", "entity.name.type.abl"] },        
        { "startIndex": 26, "endIndex": 29, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `ASSIGN x = NEW foo.bar.baz(true, ?)`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },
        { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },
        { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },
        { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },
        { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "meta.function-call.new.abl", "keyword.other.abl"] },
        { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.new.abl"] },        
        { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.new.abl", "entity.name.type.abl"] },
        { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },
        { "startIndex": 27, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"]},
        { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "keyword.operator.source.abl"] },
        { "startIndex": 32, "endIndex": 36, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `ASSIGN x = NEW "foo.bar.baz" (true, ?)`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },
        { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },
        { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },
        { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },
        { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },
        { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },
        { "startIndex": 16, "endIndex": 27, "scopes": ["source.abl", "string.double.complex.abl"] },
        { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },
        { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl"] },
        { "startIndex": 30, "endIndex": 34, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "keyword.operator.source.abl"] },
        { "startIndex": 35, "endIndex": 39, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

