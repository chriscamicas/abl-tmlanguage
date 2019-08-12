const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
    let statement =
`{assigned "mExtVar"}      /* comment */`;

    let expectedTokens = [
        {"startIndex":0,"endIndex":1,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":1,"endIndex":9,"scopes":["source.abl","meta.include.abl","string.unquoted.include-argument.abl"]},
        {"startIndex":9,"endIndex":10,"scopes":["source.abl","meta.include.abl"]},
        {"startIndex":10,"endIndex":11,"scopes":["source.abl","meta.include.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
        {"startIndex":11,"endIndex":18,"scopes":["source.abl","meta.include.abl","string.double.complex.abl"]},
        {"startIndex":18,"endIndex":19,"scopes":["source.abl","meta.include.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]},
        {"startIndex":19,"endIndex":20,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":20,"endIndex":26,"scopes":["source.abl"]},
        {"startIndex":26,"endIndex":28,"scopes":["source.abl","comment.block.source.abl"]},
        {"startIndex":28,"endIndex":37,"scopes":["source.abl","comment.block.source.abl","comment"]},
        {"startIndex":37,"endIndex":39,"scopes":["source.abl","comment.block.source.abl"]}
    ];

    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
    let statement =
`{assigned &ExtVar}       /* comment */`;

    let expectedTokens = [
        {"startIndex":0,"endIndex":1,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":1,"endIndex":9,"scopes":["source.abl","meta.include.abl","string.unquoted.include-argument.abl"]},
        {"startIndex":9,"endIndex":10,"scopes":["source.abl","meta.include.abl"]},
        {"startIndex":10,"endIndex":17,"scopes":["source.abl","meta.include.abl","string.unquoted.include-argument.abl"]},
        {"startIndex":17,"endIndex":18,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":18,"endIndex":25,"scopes":["source.abl"]},
        {"startIndex":25,"endIndex":27,"scopes":["source.abl","comment.block.source.abl"]},
        {"startIndex":27,"endIndex":36,"scopes":["source.abl","comment.block.source.abl","comment"]},
        {"startIndex":36,"endIndex":38,"scopes":["source.abl","comment.block.source.abl"]}
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
    let statement =
`{assigned mExtVar}       /* comment */`;

    let expectedTokens = [
        {"startIndex":0,"endIndex":1,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":1,"endIndex":9,"scopes":["source.abl","meta.include.abl","string.unquoted.include-argument.abl"]},
        {"startIndex":9,"endIndex":10,"scopes":["source.abl","meta.include.abl"]},
        {"startIndex":10,"endIndex":17,"scopes":["source.abl","meta.include.abl","string.unquoted.include-argument.abl"]},
        {"startIndex":17,"endIndex":18,"scopes":["source.abl","meta.include.abl","punctuation.section.abl"]},
        {"startIndex":18,"endIndex":25,"scopes":["source.abl"]},
        {"startIndex":25,"endIndex":27,"scopes":["source.abl","comment.block.source.abl"]},
        {"startIndex":27,"endIndex":36,"scopes":["source.abl","comment.block.source.abl","comment"]},
        {"startIndex":36,"endIndex":38,"scopes":["source.abl","comment.block.source.abl"]}
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
