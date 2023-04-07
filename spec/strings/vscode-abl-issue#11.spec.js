const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
    let statement =
`def var DirChar as char no-undo.
DirChar = if opsys begins 'win':u then '\\':u else '/':u.`;
    let expectedTokens = [
        [
            {"startIndex":0,"endIndex":3,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":3,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":7,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
            {"startIndex":7,"endIndex":8,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
            {"startIndex":8,"endIndex":15,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","variable.other.abl"]},
            {"startIndex":15,"endIndex":16,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
            {"startIndex":16,"endIndex":18,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
            {"startIndex":18,"endIndex":19,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
            {"startIndex":19,"endIndex":23,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","storage.type.abl"]},
            {"startIndex":23,"endIndex":24,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
            {"startIndex":24,"endIndex":31,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
            {"startIndex":31,"endIndex":32,"scopes":["source.abl","punctuation.terminator.abl"]}
        ],[
            {"startIndex":0,"endIndex":7,"scopes":["source.abl","variable.other.abl"]},
            {"startIndex":7,"endIndex":8,"scopes":["source.abl"]},
            {"startIndex":8,"endIndex":9,"scopes":["source.abl","keyword.operator.source.abl"]},
            {"startIndex":9,"endIndex":10,"scopes":["source.abl"]},
            {"startIndex":10,"endIndex":12,"scopes":["source.abl","keyword.other.abl"]},
            {"startIndex":12,"endIndex":13,"scopes":["source.abl"]},
            {"startIndex":13,"endIndex":18,"scopes":["source.abl","keyword.other.abl"]},
            {"startIndex":18,"endIndex":19,"scopes":["source.abl"]},
            {"startIndex":19,"endIndex":25,"scopes":["source.abl","keyword.other.abl"]},
            {"startIndex":25,"endIndex":26,"scopes":["source.abl"]},
            {"startIndex":26,"endIndex":27,"scopes":["source.abl","string.single.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":27,"endIndex":30,"scopes":["source.abl","string.single.complex.abl"]},
            {"startIndex":30,"endIndex":31,"scopes":["source.abl","string.single.complex.abl","punctuation.definition.string.end.abl"]},
            {"startIndex":31,"endIndex":32,"scopes":["source.abl"]},
            {"startIndex":32,"endIndex":33,"scopes":["source.abl","support.function.abl"]},
            {"startIndex":33,"endIndex":34,"scopes":["source.abl"]},
            {"startIndex":34,"endIndex":38,"scopes":["source.abl","keyword.other.abl"]},
            {"startIndex":38,"endIndex":39,"scopes":["source.abl"]},
            {"startIndex":39,"endIndex":40,"scopes":["source.abl","string.single.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":40,"endIndex":41,"scopes":["source.abl","string.single.complex.abl"]},
            {"startIndex":41,"endIndex":42,"scopes":["source.abl","string.single.complex.abl","punctuation.definition.string.end.abl"]},
            {"startIndex":42,"endIndex":43,"scopes":["source.abl"]},
            {"startIndex":43,"endIndex":44,"scopes":["source.abl","support.function.abl"]},
            {"startIndex":44,"endIndex":45,"scopes":["source.abl"]},
            {"startIndex":45,"endIndex":49,"scopes":["source.abl","keyword.other.abl"]},
            {"startIndex":49,"endIndex":50,"scopes":["source.abl"]},
            {"startIndex":50,"endIndex":51,"scopes":["source.abl","string.single.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":51,"endIndex":52,"scopes":["source.abl","string.single.complex.abl"]},
            {"startIndex":52,"endIndex":53,"scopes":["source.abl","string.single.complex.abl","punctuation.definition.string.end.abl"]},
            {"startIndex":53,"endIndex":54,"scopes":["source.abl"]},
            {"startIndex":54,"endIndex":55,"scopes":["source.abl","support.function.abl"]},
            {"startIndex":55,"endIndex":56,"scopes":["source.abl","punctuation.terminator.abl"]}
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
    let statement =
`def var DirChar as char no-undo.
DirChar = if opsys begins "win":u then "\\":u else "/":u.`;
//console.log(statement);
    let expectedTokens = [
        [
            {"startIndex":0,"endIndex":3,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":3,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":7,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
            {"startIndex":7,"endIndex":8,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
            {"startIndex":8,"endIndex":15,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","variable.other.abl"]},
            {"startIndex":15,"endIndex":16,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
            {"startIndex":16,"endIndex":18,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
            {"startIndex":18,"endIndex":19,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
            {"startIndex":19,"endIndex":23,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","storage.type.abl"]},
            {"startIndex":23,"endIndex":24,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
            {"startIndex":24,"endIndex":31,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
            {"startIndex":31,"endIndex":32,"scopes":["source.abl","punctuation.terminator.abl"]}
        ],[
            {"startIndex":0,"endIndex":7,"scopes":["source.abl","variable.other.abl"]},
            {"startIndex":7,"endIndex":8,"scopes":["source.abl"]},
            {"startIndex":8,"endIndex":9,"scopes":["source.abl","keyword.operator.source.abl"]},
            {"startIndex":9,"endIndex":10,"scopes":["source.abl"]},
            {"startIndex":10,"endIndex":12,"scopes":["source.abl","keyword.other.abl"]},
            {"startIndex":12,"endIndex":13,"scopes":["source.abl"]},
            {"startIndex":13,"endIndex":18,"scopes":["source.abl","keyword.other.abl"]},
            {"startIndex":18,"endIndex":19,"scopes":["source.abl"]},
            {"startIndex":19,"endIndex":25,"scopes":["source.abl","keyword.other.abl"]},
            {"startIndex":25,"endIndex":26,"scopes":["source.abl"]},
            {"startIndex":26,"endIndex":27,"scopes":["source.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":27,"endIndex":30,"scopes":["source.abl","string.double.complex.abl"]},
            {"startIndex":30,"endIndex":31,"scopes":["source.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]},
            {"startIndex":31,"endIndex":32,"scopes":["source.abl"]},
            {"startIndex":32,"endIndex":33,"scopes":["source.abl","support.function.abl"]},
            {"startIndex":33,"endIndex":34,"scopes":["source.abl"]},
            {"startIndex":34,"endIndex":38,"scopes":["source.abl","keyword.other.abl"]},
            {"startIndex":38,"endIndex":39,"scopes":["source.abl"]},
            {"startIndex":39,"endIndex":40,"scopes":["source.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":40,"endIndex":41,"scopes":["source.abl","string.double.complex.abl"]},
            {"startIndex":41,"endIndex":42,"scopes":["source.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]},
            {"startIndex":42,"endIndex":43,"scopes":["source.abl"]},
            {"startIndex":43,"endIndex":44,"scopes":["source.abl","support.function.abl"]},
            {"startIndex":44,"endIndex":45,"scopes":["source.abl"]},
            {"startIndex":45,"endIndex":49,"scopes":["source.abl","keyword.other.abl"]},
            {"startIndex":49,"endIndex":50,"scopes":["source.abl"]},
            {"startIndex":50,"endIndex":51,"scopes":["source.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":51,"endIndex":52,"scopes":["source.abl","string.double.complex.abl"]},
            {"startIndex":52,"endIndex":53,"scopes":["source.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]},
            {"startIndex":53,"endIndex":54,"scopes":["source.abl"]},
            {"startIndex":54,"endIndex":55,"scopes":["source.abl","support.function.abl"]},
            {"startIndex":55,"endIndex":56,"scopes":["source.abl","punctuation.terminator.abl"]}
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
