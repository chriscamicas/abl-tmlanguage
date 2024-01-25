const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
    let statement = `ENUM package.type :`;

    let expectedTokens = [        
        { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },
        { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 5, "endIndex": 17, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `ENUM package.type   flags :`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },
        { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 5, "endIndex": 17, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 20, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 20, "endIndex": 25, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },
        { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `ENUM package.flagsenum flags:`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },
        { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 5, "endIndex": 22, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },
        { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },
        { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})