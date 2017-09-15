const { assert, expect } = require('chai');
const shared = require('../shared.js');
let grammar = shared.grammar;

describe('', () => {
    //label-with-a-dot-inside.spec
    let statement = `DEFINE VARIABLE test  AS CHARACTER FORMAT "X(50)" LABEL "NO.MAQUINA".`;
    let expectedTokens = [
        {"startIndex":0,"endIndex":6,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
        {"startIndex":6,"endIndex":7,"scopes":["source.abl","meta.define.abl"]},
        {"startIndex":7,"endIndex":15,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
        {"startIndex":15,"endIndex":16,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
        {"startIndex":16,"endIndex":20,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","variable.other.abl"]},
        {"startIndex":20,"endIndex":22,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
        {"startIndex":22,"endIndex":24,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
        {"startIndex":24,"endIndex":25,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
        {"startIndex":25,"endIndex":34,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","storage.type.abl"]},
        {"startIndex":34,"endIndex":35,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
        {"startIndex":35,"endIndex":41,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
        {"startIndex":41,"endIndex":42,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
        {"startIndex":42,"endIndex":43,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
        {"startIndex":43,"endIndex":48,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","string.double.complex.abl"]},
        {"startIndex":48,"endIndex":49,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]},
        {"startIndex":49,"endIndex":50,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
        {"startIndex":50,"endIndex":55,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","keyword.other.abl"]},
        {"startIndex":55,"endIndex":56,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl"]},
        {"startIndex":56,"endIndex":57,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
        {"startIndex":57,"endIndex":67,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","string.double.complex.abl"]},
        {"startIndex":67,"endIndex":68,"scopes":["source.abl","meta.define.abl","meta.define.variable.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]},
        {"startIndex":68,"endIndex":69,"scopes":["source.abl","meta.define.abl","punctuation.terminator.abl"]}
    ];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})

describe('', () => {
    //label-with-a-dot-inside.spec
    let statement = `
DEFINE TEMP-TABLE inventario
    FIELD fecInv       AS DATE format 99/99/9999
    FIELD almInv       AS CHARACTER
    FIELD linInv       AS CHARACTER
    FIELD invIni       LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD entProd      LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD entProdCedis LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD entTransf    LIKE in_qty_oh  FORMAT "->>,>>9.999"
    FIELD embCedis     LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD uniEmbCedis  AS   DECIMAL    FORMAT ">,>>9.<<"
    FIELD embPlanta    LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD uniEmbPlanta AS   DECIMAL    FORMAT ">,>>9.<<"
    FIELD invFin       LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD tonEmb       LIKE in_qty_oh  FORMAT "->>>,>>9.999"
    FIELD uniEmb       AS INTEGER FORMAT ">,>>9".
    `;
    let expectedTokens = [
        [
            {"startIndex":0,"endIndex":1,"scopes":["source.abl"]}
        ],[
            {"startIndex":0,"endIndex":6,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":6,"endIndex":7,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":7,"endIndex":17,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":17,"endIndex":29,"scopes":["source.abl","meta.define.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":25,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":25,"endIndex":26,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":26,"endIndex":30,"scopes":["source.abl","meta.define.abl","storage.type.abl"]},
            {"startIndex":30,"endIndex":31,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":31,"endIndex":37,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":37,"endIndex":38,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":38,"endIndex":40,"scopes":["source.abl","meta.define.abl","constant.numeric.source.abl"]},
            {"startIndex":40,"endIndex":41,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":41,"endIndex":43,"scopes":["source.abl","meta.define.abl","constant.numeric.source.abl"]},
            {"startIndex":43,"endIndex":44,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":44,"endIndex":48,"scopes":["source.abl","meta.define.abl","constant.numeric.source.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":25,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":25,"endIndex":26,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":26,"endIndex":35,"scopes":["source.abl","meta.define.abl","storage.type.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":25,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":25,"endIndex":26,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":26,"endIndex":35,"scopes":["source.abl","meta.define.abl","storage.type.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":27,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":27,"endIndex":39,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":39,"endIndex":45,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":45,"endIndex":46,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":46,"endIndex":47,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":47,"endIndex":59,"scopes":["source.abl","meta.define.abl","string.double.complex.abl"]},
            {"startIndex":59,"endIndex":60,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":27,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":27,"endIndex":39,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":39,"endIndex":45,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":45,"endIndex":46,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":46,"endIndex":47,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":47,"endIndex":59,"scopes":["source.abl","meta.define.abl","string.double.complex.abl"]},
            {"startIndex":59,"endIndex":60,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":27,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":27,"endIndex":39,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":39,"endIndex":45,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":45,"endIndex":46,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":46,"endIndex":47,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":47,"endIndex":59,"scopes":["source.abl","meta.define.abl","string.double.complex.abl"]},
            {"startIndex":59,"endIndex":60,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":27,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":27,"endIndex":39,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":39,"endIndex":45,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":45,"endIndex":46,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":46,"endIndex":47,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":47,"endIndex":58,"scopes":["source.abl","meta.define.abl","string.double.complex.abl"]},
            {"startIndex":58,"endIndex":59,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":27,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":27,"endIndex":39,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":39,"endIndex":45,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":45,"endIndex":46,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":46,"endIndex":47,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":47,"endIndex":59,"scopes":["source.abl","meta.define.abl","string.double.complex.abl"]},
            {"startIndex":59,"endIndex":60,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":25,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":25,"endIndex":28,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":28,"endIndex":35,"scopes":["source.abl","meta.define.abl","storage.type.abl"]},
            {"startIndex":35,"endIndex":39,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":39,"endIndex":45,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":45,"endIndex":46,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":46,"endIndex":47,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":47,"endIndex":55,"scopes":["source.abl","meta.define.abl","string.double.complex.abl"]},
            {"startIndex":55,"endIndex":56,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":27,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":27,"endIndex":39,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":39,"endIndex":45,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":45,"endIndex":46,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":46,"endIndex":47,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":47,"endIndex":59,"scopes":["source.abl","meta.define.abl","string.double.complex.abl"]},
            {"startIndex":59,"endIndex":60,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":25,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":25,"endIndex":28,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":28,"endIndex":35,"scopes":["source.abl","meta.define.abl","storage.type.abl"]},
            {"startIndex":35,"endIndex":39,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":39,"endIndex":45,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":45,"endIndex":46,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":46,"endIndex":47,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":47,"endIndex":55,"scopes":["source.abl","meta.define.abl","string.double.complex.abl"]},
            {"startIndex":55,"endIndex":56,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":27,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":27,"endIndex":39,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":39,"endIndex":45,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":45,"endIndex":46,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":46,"endIndex":47,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":47,"endIndex":59,"scopes":["source.abl","meta.define.abl","string.double.complex.abl"]},
            {"startIndex":59,"endIndex":60,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":27,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":27,"endIndex":39,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":39,"endIndex":45,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":45,"endIndex":46,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":46,"endIndex":47,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":47,"endIndex":59,"scopes":["source.abl","meta.define.abl","string.double.complex.abl"]},
            {"startIndex":59,"endIndex":60,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]}
        ],[
            {"startIndex":0,"endIndex":4,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":4,"endIndex":9,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":9,"endIndex":23,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":23,"endIndex":25,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":25,"endIndex":26,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":26,"endIndex":33,"scopes":["source.abl","meta.define.abl","storage.type.abl"]},
            {"startIndex":33,"endIndex":34,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":34,"endIndex":40,"scopes":["source.abl","meta.define.abl","keyword.other.abl"]},
            {"startIndex":40,"endIndex":41,"scopes":["source.abl","meta.define.abl"]},
            {"startIndex":41,"endIndex":42,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.begin.abl"]},
            {"startIndex":42,"endIndex":47,"scopes":["source.abl","meta.define.abl","string.double.complex.abl"]},
            {"startIndex":47,"endIndex":48,"scopes":["source.abl","meta.define.abl","string.double.complex.abl","punctuation.definition.string.end.abl"]},
            {"startIndex":48,"endIndex":49,"scopes":["source.abl","meta.define.abl","punctuation.terminator.abl"]}
        ],[
            {"startIndex":0,"endIndex":5,"scopes":["source.abl"]}
        ]];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})