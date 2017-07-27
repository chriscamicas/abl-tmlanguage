const { Registry } = require('vscode-textmate');
const { assert } = require('chai');


module.exports = {
    get grammar() {
        let registry = new Registry();
        return registry.loadGrammarFromPathSync('abl.tmLanguage.json');
    },
    itShouldMatchExpectedScopes: function (grammar, statement, expectedTokens) {
        describe(`${statement}`, () => {
            it('should match expected scopes', () => {
                let tokenResult;

                let lines = statement.split(/\n/g);
                let nbLines = lines.length;
                if (nbLines === 1) {
                    //singleline
                    tokenResult = grammar.tokenizeLine(statement);
                } else {
                    //multiline, we stack the tokens in an array
                    let ruleStack = null;
                    tokenResult = {
                        tokens: [
                    ]};
                    lines.forEach(line => {
                        let r = grammar.tokenizeLine(line, ruleStack);
                        ruleStack = r.ruleStack;
                        tokenResult.tokens.push(r.tokens);
                    });
                }
                // assert.includeDeepMembers(tokenResult.tokens, expectedTokens);
                assert.deepEqual(tokenResult.tokens, expectedTokens, JSON.stringify(tokenResult.tokens));
            })
        })
    }
}
