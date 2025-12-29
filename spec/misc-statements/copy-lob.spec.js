const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `copy-lob
  from respBuf
  starting at ( i + 4 )
  for x
  to result /* overlay at length( results ) +  1 */ no-convert
no-error.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] }  // 'copy-lob'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "variable.other.abl"] }  // 'respBuf'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'starting'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'at'
      { "startIndex": 13, "endIndex": 16, "scopes": ["source.abl"] },  // ' ( '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "variable.other.abl"] },  // 'i'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '+'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '4'
      { "startIndex": 21, "endIndex": 24, "scopes": ["source.abl"] }  // ' )'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "variable.other.abl"] }  // 'x'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'to'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'result'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 14, "endIndex": 49, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' overlay at length( results ) +  1 '
      { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "comment.block.source.abl"] },  // '*/'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 52, "endIndex": 62, "scopes": ["source.abl", "keyword.other.abl"] }  // 'no-convert'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-error'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `copy-lob from respBuf starting at ( i + 4 ) for x to result /* overlay at length( results ) +  1 */ no-convert no-error.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'copy-lob'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 21, "scopes": ["source.abl", "variable.other.abl"] },  // 'respBuf'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 30, "scopes": ["source.abl", "keyword.other.abl"] },  // 'starting'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "keyword.other.abl"] },  // 'at'
    { "startIndex": 33, "endIndex": 36, "scopes": ["source.abl"] },  // ' ( '
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "variable.other.abl"] },  // 'i'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '+'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '4'
    { "startIndex": 41, "endIndex": 44, "scopes": ["source.abl"] },  // ' ) '
    { "startIndex": 44, "endIndex": 47, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "variable.other.abl"] },  // 'x'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "keyword.other.abl"] },  // 'to'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 59, "scopes": ["source.abl", "keyword.other.abl"] },  // 'result'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 60, "endIndex": 62, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
    { "startIndex": 62, "endIndex": 97, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' overlay at length( results ) +  1 '
    { "startIndex": 97, "endIndex": 99, "scopes": ["source.abl", "comment.block.source.abl"] },  // '*/'
    { "startIndex": 99, "endIndex": 100, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 100, "endIndex": 110, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-convert'
    { "startIndex": 110, "endIndex": 111, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 111, "endIndex": 119, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-error'
    { "startIndex": 119, "endIndex": 120, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `copy-lob
  from respBuf
  starting at oSomething:Length
  to file "/path/to/file".`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'copy-lob'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "variable.other.abl"] }  // 'respBuf'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'starting'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'at'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 24, "scopes": ["source.abl", "variable.other.abl"] },  // 'oSomething'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 25, "endIndex": 31, "scopes": ["source.abl", "entity.name.function.abl"] }  // 'Length'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'to'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'file'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 24, "scopes": ["source.abl", "string.quoted.double.abl"] },  // '/path/to/file'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})