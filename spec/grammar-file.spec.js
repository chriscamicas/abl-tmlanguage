const { assert } = require('chai');
let Registry = require('vscode-textmate').Registry;

describe('The grammar', () => {
    it('should load', () => {
        let registry = new Registry();
        let grammar = registry.loadGrammarFromPathSync('abl.tmLanguage.json');
        assert(true);
    })
})
