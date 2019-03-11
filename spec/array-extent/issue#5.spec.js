const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
    //label-with-a-dot-inside.spec
    let statement = `mExtVar[mI]`;
    let expectedTokens = [
        {"startIndex":0,"endIndex":7,"scopes":["source.abl","variable.other.abl"]},
        {"startIndex":7,"endIndex":8,"scopes":["source.abl","meta.array.literal.abl","meta.brace.square.abl"]},
        {"startIndex":8,"endIndex":10,"scopes":["source.abl","meta.array.literal.abl","variable.other.abl"]},
        {"startIndex":10,"endIndex":11,"scopes":["source.abl","meta.array.literal.abl","meta.brace.square.abl"]}
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `mExtVar[ mI]`;
    let expectedTokens = [
        {"startIndex":0,"endIndex":7,"scopes":["source.abl","variable.other.abl"]},
        {"startIndex":7,"endIndex":8,"scopes":["source.abl","meta.array.literal.abl","meta.brace.square.abl"]},
        {"startIndex":8,"endIndex":9,"scopes":["source.abl","meta.array.literal.abl"]},
        {"startIndex":9,"endIndex":11,"scopes":["source.abl","meta.array.literal.abl","variable.other.abl"]},
        {"startIndex":11,"endIndex":12,"scopes":["source.abl","meta.array.literal.abl","meta.brace.square.abl"]}
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})