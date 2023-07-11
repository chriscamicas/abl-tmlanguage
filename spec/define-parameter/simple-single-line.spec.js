const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `define input parameter iban as char no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'parameter'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "variable.parameter.abl"] },  // 'iban'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'char'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
describe('', () => {
  let statement = `define output parameter estValide as logical no-undo initial false.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'output'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'parameter'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "variable.parameter.abl"] },  // 'estValide'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'logical'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'initial'
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 61, "endIndex": 66, "scopes": ["source.abl", "meta.define.abl", "constant.language.source.abl"] },  // 'false'
    { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define input parameter iban as character no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'parameter'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "variable.parameter.abl"] },  // 'iban'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'character'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'        
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define input-output parameter iban as character no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 7, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 20, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 30, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "variable.parameter.abl"] },
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 38, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 48, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define input parameter vdec as decimal format ">>>.99" no-undo.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'parameter'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "variable.parameter.abl"] },  // 'vdec'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'decimal'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'format'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 47, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // '>>>.99'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 55, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
