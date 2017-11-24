const { assert, expect } = require('chai');
const shared = require('../shared.js');
let grammar = shared.grammar;

describe('', () => {
    //label-with-a-dot-inside.spec
    let statement = `def var foo as char no-undo. /* bar.baz */`;
    let expectedTokens = [
        {"startIndex":0,"endIndex":3,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
        {"startIndex":3,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
        {"startIndex":4,"endIndex":7,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
        {"startIndex":7,"endIndex":8,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
        {"startIndex":8,"endIndex":11,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","variable.other.abl"]},
        {"startIndex":11,"endIndex":12,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
        {"startIndex":12,"endIndex":14,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
        {"startIndex":14,"endIndex":15,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
        {"startIndex":15,"endIndex":19,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","storage.type.abl"]},
        {"startIndex":19,"endIndex":20,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
        {"startIndex":20,"endIndex":27,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
        {"startIndex":27,"endIndex":28,"scopes":["source.abl","punctuation.terminator.abl"]},
        {"startIndex":28,"endIndex":29,"scopes":["source.abl"]},
        {"startIndex":29,"endIndex":31,"scopes":["source.abl","comment.block.source.abl"]},
        {"startIndex":31,"endIndex":40,"scopes":["source.abl","comment.block.source.abl","comment"]},
        {"startIndex":40,"endIndex":42,"scopes":["source.abl","comment.block.source.abl"]}];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})