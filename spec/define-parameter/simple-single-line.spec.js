const { assert, expect } = require('chai');
const shared = require('../shared.js');
let grammar = shared.grammar;

describe('', () => {
    let statement = `define input parameter iban as char no-undo.`;
    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
        { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },
        { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl"] },
        { "startIndex": 13, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },
        { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl"] },
        { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "variable.parameter.abl"] },
        { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl"] },
        { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },
        { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl"] },
        { "startIndex": 31, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "storage.type.abl"] },
        { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl"] },
        { "startIndex": 36, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },
        { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})
describe('', () => {
    let statement = `define output parameter estValide as logical no-undo initial false.`;
    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
        { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },
        { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl"] },
        { "startIndex": 14, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },
        { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl"] },
        { "startIndex": 24, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "variable.parameter.abl"] },
        { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl"] },
        { "startIndex": 34, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },
        { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl"] },
        { "startIndex": 37, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "storage.type.abl"] },
        { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl"] },
        { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },
        { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl"] },
        { "startIndex": 53, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },
        { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl"] },
        { "startIndex": 61, "endIndex": 66, "scopes": ["source.abl", "meta.define.abl", "meta.define.parameter.abl", "keyword.other.abl"] },
        { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})

describe('', () => {
    let statement = `define input parameter iban as character no-undo.`;
    let expectedTokens =  [
        {"startIndex":0,"endIndex":6,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
        {"startIndex":6,"endIndex":7,"scopes":["source.abl","meta.define.abl"]},
        {"startIndex":7,"endIndex":12,"scopes":["source.abl","meta.define.abl","meta.define.parameter.abl","keyword.other.abl"]},
        {"startIndex":12,"endIndex":13,"scopes":["source.abl","meta.define.abl","meta.define.parameter.abl"]},
        {"startIndex":13,"endIndex":22,"scopes":["source.abl","meta.define.abl","meta.define.parameter.abl","keyword.other.abl"]},
        {"startIndex":22,"endIndex":23,"scopes":["source.abl","meta.define.abl","meta.define.parameter.abl"]},
        {"startIndex":23,"endIndex":27,"scopes":["source.abl","meta.define.abl","meta.define.parameter.abl","variable.parameter.abl"]},
        {"startIndex":27,"endIndex":28,"scopes":["source.abl","meta.define.abl","meta.define.parameter.abl"]},
        {"startIndex":28,"endIndex":30,"scopes":["source.abl","meta.define.abl","meta.define.parameter.abl","keyword.other.abl"]},
        {"startIndex":30,"endIndex":31,"scopes":["source.abl","meta.define.abl","meta.define.parameter.abl"]},
        {"startIndex":31,"endIndex":40,"scopes":["source.abl","meta.define.abl","meta.define.parameter.abl","storage.type.abl"]},
        {"startIndex":40,"endIndex":41,"scopes":["source.abl","meta.define.abl","meta.define.parameter.abl"]},
        {"startIndex":41,"endIndex":48,"scopes":["source.abl","meta.define.abl","meta.define.parameter.abl","keyword.other.abl"]},
        {"startIndex":48,"endIndex":49,"scopes":["source.abl","meta.define.abl","punctuation.terminator.abl"]}
    ];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})
