const { assert, expect } = require('chai');
const shared = require('../shared.js');
let grammar = shared.grammar;

describe('', () => {
    let statement =
`&ANALYZE-SUSPEND _VERSION-NUMBER AB_v10r12
&ANALYZE-RESUME`;

    let expectedTokens = [
        [
            {"startIndex":0,"endIndex":17,"scopes":["source.abl","comment.preprocessor.analyze-suspend.abl"]},
            {"startIndex":17,"endIndex":42,"scopes":["source.abl","comment.preprocessor.analyze-suspend.abl"]}
        ],[
            {"startIndex":0,"endIndex":16,"scopes":["source.abl","comment.preprocessor.analyze-suspend.abl"]}
        ]];
    shared.itShouldMatchExpectedScopes(grammar, statement, expectedTokens);
})
