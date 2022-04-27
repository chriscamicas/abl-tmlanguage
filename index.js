// kwlist.txt file can be generated with `prowin -zgenkwlist > kwlist.txt`
const fs = require('fs');

let lineReader = require('readline').createInterface({
  input: fs.createReadStream('kwlist.txt')
});

 
let output = 'grammar.json';
let result = {};
let grammarBlocks2 = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
const re = /(?:\w|-|\()+(?=\s|$)/g

lineReader.on('line', line => {
    let results;
    line = line.toLowerCase();

    while ((results = re.exec(line)) !== null) {
        let kw = results[0];
        if (kw.indexOf('(') !== -1) {
            let kwParts = kw.split('(');
            kw = kwParts[0];
            grammarBlocks2[kw.charCodeAt(0) - 97].push(kw);
            let kwComplete = kwParts[1];
            for (const element of kwComplete) {
                kw += element;
                grammarBlocks2[kw.charCodeAt(0) - 97].push(kw);
            }
        } else {
            grammarBlocks2[kw.charCodeAt(0) - 97].push(kw);
        }
    }
});

lineReader.on('close', () => {
    for (var zz = 0; zz < 26; zz++) {
        result['keywords-' + String.fromCharCode(97 + zz)] = 
         {
            match: "(?i)(?<![\\w-])(" + grammarBlocks2[zz].sort().join('|') + ")(?![\\w-])",
            name: "keyword.other.abl"
        }
    }
    fs.writeFileSync(output, JSON.stringify(result, undefined, 4));
})
