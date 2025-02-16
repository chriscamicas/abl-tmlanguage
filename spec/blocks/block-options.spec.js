const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `do with frame {&FRAME-NAME}:`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'with'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'frame'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 27, "scopes": ["source.abl", "meta.block.abl", "storage.type.function.abl"] },  // '{&FRAME-NAME}'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

