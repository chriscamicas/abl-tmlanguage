const fs = require('fs');
const path = require('path');
const vsctm = require('vscode-textmate');
const oniguruma = require('vscode-oniguruma');
const { assert } = require('chai');

function readFile(p) {
    return new Promise((resolve, reject) => {
        fs.readFile(p, (error, data) => error ? reject(error) : resolve(data));
    })
}

const wasmBin = fs.readFileSync(path.join(__dirname, '../node_modules/vscode-oniguruma/release/onig.wasm')).buffer;
const vscodeOnigurumaLib = oniguruma.loadWASM(wasmBin).then(() => {
    return {
        createOnigScanner(patterns) { return new oniguruma.OnigScanner(patterns); },
        createOnigString(s) { return new oniguruma.OnigString(s); }
    };
});
// Create a registry that can create a grammar from a scope name.
const registry = new vsctm.Registry({
    onigLib: vscodeOnigurumaLib,
    loadGrammar: (scopeName) => {
        if (scopeName === 'source.abl') {
            return readFile('./abl.tmLanguage.json').then(data => vsctm.parseRawGrammar(data.toString(), './abl.tmLanguage.json'))
        }
        console.log(`Unknown scope name: ${scopeName}`);
        return null;
    }
});

module.exports = {
    itShouldMatchExpectedScopes: function (statement, expectedTokens) {
        describe(`${statement}`, () => {
            it('should match expected scopes', () => {
                return registry.loadGrammar('source.abl').then(grammar => {
                    let tokenResult;

                    let lines = statement.split(/\n/g);
                    let nbLines = lines.length;
                    if (nbLines === 1) {
                        //singleline                        
                        tokenResult = grammar.tokenizeLine(statement);

                        console.log(`\nTokenizing line: ${statement}`);
                        for (let j = 0; j < tokenResult.tokens.length; j++) {
                            const token = tokenResult.tokens[j];

                             console.log(` - token from ${token.startIndex} to ${token.endIndex} ` +
                                 `(${statement.substring(token.startIndex, token.endIndex)}) ` +
                                 `with scopes ${token.scopes.join(', ')}`
                             );

                            //var O = token.scopes.map((e) => ('"' + e + '",')).join(' ').replace(/,\s*$/, "");
                            //console.log(`{ "startIndex": ${token.startIndex}, "endIndex": ${token.endIndex}, "scopes": [${O}] },`,);

                        }
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

                            console.log(`\nTokenizing line: ${line}`);
                            //console.log(`[`);
                            for (let j = 0; j < r.tokens.length; j++) {
                                const token = r.tokens[j];
                                 console.log(` - token from ${token.startIndex} to ${token.endIndex} ` +
                                     `(${line.substring(token.startIndex, token.endIndex)}) ` +
                                     `with scopes ${token.scopes.join(', ')}`
                                 );

                                //var O = token.scopes.map((e) => ('"' + e + '",')).join(' ').replace(/,\s*$/, "");
                                //console.log(`{ "startIndex": ${token.startIndex}, "endIndex": ${token.endIndex}, "scopes": [${O}] },`,);

                            }
                            //console.log(`],`);

                        });
                    }
                    assert.deepEqual(tokenResult.tokens, expectedTokens, JSON.stringify(tokenResult.tokens));
                })
            })
        })
    }
}
