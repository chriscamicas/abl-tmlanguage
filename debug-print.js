const fs = require('fs');
const path = require('path');
const vsctm = require('vscode-textmate');
const oniguruma = require('vscode-oniguruma');

function readFile(p) {
  return new Promise((resolve, reject) => {
    fs.readFile(p, (error, data) => error ? reject(error) : resolve(data));
  })
}

const wasmBin = fs.readFileSync(path.join(__dirname, './node_modules/vscode-oniguruma/release/onig.wasm')).buffer;
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

//dbg = readFile('./debug-in.txt');
const dbgData = fs.readFileSync('./debug-in.txt', 'utf8');

printScopes(dbgData);

function printScopes(statement) {
  return registry.loadGrammar('source.abl').then(grammar => {
    let tokenResult;

    let lines = statement.split(/\n/g);
    let nbLines = lines.length;
    if (nbLines === 1) {
      //single line
      tokenResult = grammar.tokenizeLine(statement);

      // More human-readable output
      for (let j = 0; j < tokenResult.tokens.length; j++) {
        const token = tokenResult.tokens[j];
        console.log(`${statement.substring(token.startIndex, token.endIndex)} ${token.scopes[token.scopes.length - 1]} ${token.startIndex}-${token.endIndex}`);
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

        // Formatted as input-values
        for (let j = 0; j < r.tokens.length; j++) {
          const token = r.tokens[j];
          console.log(`${line.substring(token.startIndex, token.endIndex)}\t\t\t${token.scopes[token.scopes.length - 1]} ${token.startIndex}-${token.endIndex}`,);
        }
      });
    }
  }
  )
}
