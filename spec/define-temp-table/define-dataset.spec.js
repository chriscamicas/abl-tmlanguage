const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `define dataset dsDataset{&suffix} for eTempTable{&suffix}.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'dataset'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "storage.data.dataset.abl"] },  // 'dsDataset'
    { "startIndex": 24, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '{&suffix}'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'eTempTable'
    { "startIndex": 48, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '{&suffix}'
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
