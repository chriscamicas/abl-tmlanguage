const vsctm = require('vscode-textmate');
const {
    assert
} = require('chai');
const fs = require('fs');

const grammarPaths = {
    'source.abl': './abl.tmLanguage.json'
};
let grammar;

let registry = new vsctm.Registry({
    loadGrammar: function (scopeName) {
        var path = grammarPaths[scopeName];
        if (path) {
            return new Promise((c, e) => {
                fs.readFile(path, (error, content) => {
                    if (error) {
                        e(error);
                    } else {
                        var rawGrammar = vsctm.parseRawGrammar(content.toString(), path);
                        c(rawGrammar);
                    }
                });
            });
        }
        return null;
    }
});

async function loadGrammar() {
    if (!grammar)
        return registry.loadGrammar('source.abl').then(g => grammar = g);
    return Promise.resolve(grammar);
};

module.exports = {
    get grammar() {
        return undefined;
    },
    itShouldMatchExpectedScopes: function (statement, expectedTokens) {
        describe(`${statement}`, () => {
            it('should match expected scopes', () => {
                return loadGrammar().then(grammar => {
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
                            tokens: []
                        };
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
        })
    }
}