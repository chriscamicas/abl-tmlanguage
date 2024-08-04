// This script create 3 sections: keywords-<A>, handle-attributes-<Z> and abl-functions-<A> . ABL keywords can only be in
// one of these sections.
// kwlist.txt file can be generated with `prowin -zgenkwlist > abl-keywords.txt`
//
// methods.txt can be created by copying the 'Related Links' from https://docs.progress.com/bundle/abl-reference/page/Handle-Attributes-and-Methods-Reference.html//
// It will look something like:
//    ACCELERATOR attribute
//    ACCEPT-CHANGES( ) method
//    ACCEPT-ROW-CHANGES( ) method
//
// abl-functions.txt can be created by copying the 'Related Links' from https://docs.progress.com/bundle/abl-reference/page/ABL-Syntax-Reference.html
//

const fs = require('fs');

let lineReaderMethods = require('readline').createInterface({
  input: fs.createReadStream('abl-methods.txt')
});

let lineReaderFunctions = require('readline').createInterface({
  input: fs.createReadStream('abl-functions.txt')
});

let lineReaderKeywords = require('readline').createInterface({
  input: fs.createReadStream('abl-keywords.txt')
});

let output = 'grammar.json';
let result = {};
let attributeBlocks = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
let methodBlocks    = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
let keywordBlocks   = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
let functionBlocks  = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
const re = /(?:\w|-|\()+(?=\s|$)/g

// The doc is not always accurate ...
// Add the full keyword to one of these arrays, and
// it and any abbreviated versions will be added to the
// appropriate scopes
let alsoStatements = [];
alsoStatements.push('ambiguous');
alsoStatements.push('available');
alsoStatements.push('centered');
alsoStatements.push('delete');
alsoStatements.push('first');
alsoStatements.push('format');
alsoStatements.push('initial');
alsoStatements.push('label');
alsoStatements.push('locked');
alsoStatements.push('namespace-prefix');
alsoStatements.push('namespace-uri');
alsoStatements.push('nested');
alsoStatements.push('return-value');
alsoStatements.push('row');
alsoStatements.push('serialize-name');
alsoStatements.push('single-run');
alsoStatements.push('transaction');
alsoStatements.push('xml-node-name');


let functionsNotStatements = [];
functionsNotStatements.push('set-size');

let alsoFunctions = [];
alsoFunctions.push('lower');
alsoFunctions.push('relation-fields');
alsoFunctions.push('return');
alsoFunctions.push('substitute');
alsoFunctions.push('this-object');
alsoFunctions.push('value');

lineReaderMethods.on('line', line => {
  let results;
  line = line.toLowerCase();

  if (!line.startsWith("#")) {
    let kw = line.split(' ');
    let charIdx = kw[0].charCodeAt(0) - 97;
    let keyWord = kw[0].split('(')[0];

    if (kw.includes('attribute')) {
      if (!attributeBlocks[charIdx].includes(keyWord)) {
        attributeBlocks[charIdx].push(keyWord);
      }
    } else if (kw.includes('method')) {
      if (!methodBlocks[charIdx].includes(keyWord)) {
        methodBlocks[charIdx].push(keyWord);
      }
    }

    if (alsoStatements.includes(keyWord)) {
      if (!keywordBlocks[charIdx].includes(keyWord)) {
        keywordBlocks[charIdx].push(keyWord);
      }
    }
    if (alsoFunctions.includes(keyWord)) {
      if (!functionBlocks[charIdx].includes(keyWord)) {
        functionBlocks[charIdx].push(keyWord);
      }
    }
  }
});

lineReaderFunctions.on('line', line => {
  let results;
  line = line.toLowerCase();

  if (!line.startsWith("#")) {

    let kw = line.split(' ');
    let kwName = '';

    // This is to skip the FUNCTION statement
    if (kw.includes('function') && !kw.includes('statement')) {

      if (kw.includes('preprocessor')) {
        kwName = kw[0];
      } else {
        kwName = kw.slice(0, kw.indexOf('function')).join(' ');
      }

      // CAPS letter alphabet
      let charIdx = kwName.charCodeAt(0) - 97;

      if (!functionBlocks[charIdx].includes(kwName) && !kwName.includes('...')) {
        functionBlocks[charIdx].push(kwName);
      }

      if (alsoStatements.includes(kwName)) {
        if (!keywordBlocks[charIdx].includes(kwName)) {
          keywordBlocks[charIdx].push(kwName);
        }
      }
    } else if (kw.includes('statement')) {
      for (const keyWord of kw) {
        let charIdx = keyWord.charCodeAt(0) - 97;

        if (keyWord == "statement") { break; }

        if (keyWord.indexOf('(') !== -1) { continue; }

        if (keyWord.includes('...')) { break; }

        kw2 = keyWord.replace(",", "");

        if (charIdx > 0 && functionsNotStatements.includes(kw2)) {
          functionBlocks[charIdx].push(kw2);
        } else if (charIdx > 0 && !keywordBlocks[charIdx].includes(kw2)) {
          keywordBlocks[charIdx].push(kw2);
        }
      }
    }
  }
});

lineReaderKeywords.on('line', line => {
  let results;
  line = line.toLowerCase();
  if (!line.startsWith("#")) {
    while ((results = re.exec(line)) !== null) {
      let kw = results[0];
      // CAPS letter alphabet
      let charIdx = kw.charCodeAt(0) - 97;

      if (kw.indexOf('(') !== -1) {
        let kwParts = kw.split('(');
        let fullKw = kwParts[0] + kwParts[1];

        kw = kwParts[0];
        addToBlock(charIdx, fullKw, kw);

        let kwComplete = kwParts[1];
        for (const element of kwComplete) {
          kw += element;

          addToBlock(charIdx, fullKw, kw);
        }
      } else {
        addToBlock(charIdx, kw, kw);
      }
    }
  }
});

function addToBlock(charIdx, fullKw, addKw) {

  if (alsoFunctions.includes(fullKw)) {
    if (!functionBlocks[charIdx].includes(addKw)) {
      functionBlocks[charIdx].push(addKw);
    }
  }

  if (attributeBlocks[charIdx].includes(fullKw)) {
    if (!attributeBlocks[charIdx].includes(addKw)) {
      attributeBlocks[charIdx].push(addKw);
    }
  } else if (methodBlocks[charIdx].includes(fullKw)) {
    if (!methodBlocks[charIdx].includes(addKw)) {
      methodBlocks[charIdx].push(addKw);
    }
  } else if (functionBlocks[charIdx].includes(fullKw)) {
    if (!functionBlocks[charIdx].includes(addKw)) {
      functionBlocks[charIdx].push(addKw);
    }
  } else {
    if (!keywordBlocks[charIdx].includes(addKw)) {
      keywordBlocks[charIdx].push(addKw);
    }
  }
}

lineReaderKeywords.on('close', () => {

  result['keywords'] = { patterns: [] }

  for (var zz = 0; zz < 26; zz++) {

    if (keywordBlocks[zz].length > 0) {
      result.keywords.patterns.push({ include: "#keywords-" + String.fromCharCode(97 + zz).toUpperCase() });

      result['keywords-' + String.fromCharCode(97 + zz).toUpperCase()] =
      {
        //match: "(?i)(?<![\\w\\-\\:\\.])(" + keywordBlocks[zz].sort(reverseSort).join('|') + ")(?![\\w\\-])",
        match: "(?i)\\b(" + keywordBlocks[zz].sort(reverseSort).join('|') + ")\\b",
        captures: {
          1: {
            name: "keyword.other.abl"
          }
        }
      }
    }
  }

  result['handle-attributes'] = { patterns: [] }

  for (var zz = 0; zz < 26; zz++) {
    if (attributeBlocks[zz].length > 0) {

      result['handle-attributes'].patterns.push({ include: "#handle-attributes-" + String.fromCharCode(97 + zz).toUpperCase() });

      result['handle-attributes-' + String.fromCharCode(97 + zz).toUpperCase()] =
      {
        match: "(?i)(:)(" + attributeBlocks[zz].sort(reverseSort).join('|') + ")\\s*",
        captures: {
          1: {
            name: "punctuation.separator.colon.abl"
          },
          2: {
            name: "entity.name.function.abl"
          }
        }
      }
    }
  }

  result['handle-methods'] = { patterns: [] }
  for (var zz = 0; zz < 26; zz++) {

    if (methodBlocks[zz].length > 0) {
      result['handle-methods'].patterns.push({ include: "#handle-methods-" + String.fromCharCode(97 + zz).toUpperCase() });

      result['handle-methods-' + String.fromCharCode(97 + zz).toUpperCase()] =
      {
        begin: "(?i)(:)(" + methodBlocks[zz].sort(reverseSort).join('|') + ")\\s*(?=\\()",
        beginCaptures: {
          1: {
            name: "punctuation.separator.colon.abl"
          },
          2: {
            name: "support.function.abl"
          }
        },
        end: "(\\))",
        endCaptures: {
          1: {
            name: "meta.brace.round.js"
          }
        },
        patterns: [
          {
            include: "#function-arguments"
          }
        ]
      }
    }
  }

  result['abl-functions'] = { patterns: [] }
  for (var zz = 0; zz < 26; zz++) {

    if (functionBlocks[zz].length > 0) {
      result['abl-functions'].patterns.push({ include: "#abl-functions-" + String.fromCharCode(97 + zz).toUpperCase() });

      result['abl-functions-' + String.fromCharCode(97 + zz).toUpperCase()] =
      {
        name: "meta.function-call.abl",
        begin: "(?i)\\s*(" + functionBlocks[zz].sort(reverseSort).join('|') + ")\\s*(?=\\()",
        beginCaptures: {
          1: {
            name: "support.function.abl"
          }
        },
        end: "(\\))",
        endCaptures: {
          1: {
            name: "meta.brace.round.js"
          }
        },
        patterns: [
          {
            include: "#function-arguments"
          }
        ]
      }
    }
  }
  fs.writeFileSync(output, JSON.stringify(result, undefined, 4));
})

// Sorts in reverse order - so that the longer versions of the keywords appear earlier in the regex
function reverseSort(a, b) {
  const nameA = a.toLowerCase(); // ignore upper and lowercase
  const nameB = b.toLowerCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }

  // names are equal
  return 0;
}
