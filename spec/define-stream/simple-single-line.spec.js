const { assert, expect } = require('chai');
const shared = require('../shared.js');
let grammar = shared.grammar;

describe('', () => {
    let statement = `define stream fileLog.`;
    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
        { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.stream.abl", "keyword.other.abl"] },
        { "startIndex": 13, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "meta.define.stream.abl"] },
        { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})