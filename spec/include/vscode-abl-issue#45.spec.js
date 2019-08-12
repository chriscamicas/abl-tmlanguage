const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
    let statement =
`{ test.i "{&Test}" }`;

    let expectedTokens = [
        {"startIndex":0,"endIndex":1,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":1,"endIndex":2,"scopes":["source.abl","meta.include.abl"]},
        {"startIndex":2,"endIndex":8,"scopes":["source.abl","meta.include.abl","string.unquoted.include-argument.abl"]},
        {"startIndex":8,"endIndex":9,"scopes":["source.abl","meta.include.abl"]},
        {"startIndex":9,"endIndex":10,"scopes":["source.abl","meta.include.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
        {"startIndex":10,"endIndex":17,"scopes":["source.abl","meta.include.abl","string.double.complex.abl"]},
        {"startIndex":17,"endIndex":18,"scopes":["source.abl","meta.include.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]},
        {"startIndex":18,"endIndex":19,"scopes":["source.abl","meta.include.abl"]},
        {"startIndex":19,"endIndex":20,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]}
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
