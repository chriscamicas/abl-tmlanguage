const { assert } = require('chai');
const shared = require('../shared.js');

describe('', () => {
    let statement = `define variable variable-name as int no-undo./* comment */`;
    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
        { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 16, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
        { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 33, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },
        { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 37, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "punctuation.terminator.abl"] },
        { "startIndex": 45, "endIndex": 47, "scopes": ["source.abl", "comment.block.source.abl"] },
        { "startIndex": 47, "endIndex": 56, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },
        { "startIndex": 56, "endIndex": 58, "scopes": ["source.abl", "comment.block.source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
    let statement = `define variable variable-name as int no-undo.// comment`;
    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
        { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 16, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
        { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 33, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },
        { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 37, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "punctuation.terminator.abl"] },
        { "startIndex": 45, "endIndex": 55, "scopes": ["source.abl", "comment.line.double-slash.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
    let statement = `define variable variable-name as int no-undo.//comment`;
    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
        { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 16, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
        { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 33, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },
        { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
        { "startIndex": 37, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
        { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "punctuation.terminator.abl"] },
        { "startIndex": 45, "endIndex": 54, "scopes": ["source.abl", "comment.line.double-slash.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
