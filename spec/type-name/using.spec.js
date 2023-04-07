const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
    let statement = `using foo.bar.baz.`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `using foo.bar.baz from propath.`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 22, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },
        { "startIndex": 22, "endIndex": 30, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },
        { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `using foo.bar.* from propath.`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },
        { "startIndex": 6, "endIndex": 13, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },
        { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] },
        { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl"] },
        { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },
        { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"]}
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `using foo.bar.* .`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },
        { "startIndex": 6, "endIndex": 13, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },
        { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] },
        { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl"] },
        { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})



