// kwlist.txt file can be found in
// oeide\eclipse\plugins\com.openedge.pdt.core_11.6.0.00\oe_common_services.jar!\com\openedge\pdt\core\ast\kwlist.txt
// it may change with the OpenEdge version

const fs = require('fs');

let lineReader = require('readline').createInterface({
  input: fs.createReadStream('kwlist.txt')
});


// Launch parameters
let singleGrammarBlock = true;
let lowerCase = true;
let output = 'grammar.json';

// internal
let grammarBlocks = [];
let keywords = [];
keywords.push('');
const re = /(?:\w|-|\()+(?=\s|$)/g
lineReader.on('line', line => {
    let results;
    if(!singleGrammarBlock) {
        keywords = [];
    }
    if(lowerCase) {
        line = line.toLowerCase();
    }

    while ((results = re.exec(line)) !== null) {

        let kw = results[0];
        if(kw.indexOf('(') !== -1) {
            let kwParts = kw.split('(');
            kw = kwParts[0];
            keywords.push(kw);
            let kwComplete = kwParts[1];
            for(let charIndex=0; charIndex<kwComplete.length; charIndex++) {
                kw += kwComplete[charIndex];
                keywords.push(kw);
            }
        } else {
            keywords.push(kw);
        }
    }
    if(!singleGrammarBlock) {
        grammarBlocks.push(generateGrammarBlock(keywords));
    }
});
lineReader.on('close', () => {
    if(singleGrammarBlock) {
        grammarBlocks.push(generateGrammarBlock(keywords));
    }
    fs.writeFile(output, JSON.stringify(grammarBlocks, undefined, 4));
})

function generateGrammarBlock(keywords) {
    return {
        match : `(${keywords.join('|')})`,
        name: "keyword.statement.source.abl"
    };
}