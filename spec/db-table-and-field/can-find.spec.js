const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `can-find(first lbCollection use-index idx-one).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'can-find'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 9, "endIndex": 14, "scopes": ["source.abl", "meta.function-call.abl", "keyword.other.abl"] },  // 'first'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "storage.data.table.abl"] },  // 'lbCollection'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "keyword.other.abl"] },  // 'use-index'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 45, "scopes": ["source.abl", "meta.function-call.abl", "storage.data.table.abl"] },  // 'idx-one'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `/* try by-reference first */
can-find(lbCollection where lbCollection.ObjectRef = checkObject).`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 2, "endIndex": 26, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' try by-reference first '
      { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'can-find'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 9, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "storage.data.table.abl"] },  // 'lbCollection'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 50, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'lbCollection.ObjectRef'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 64, "scopes": ["source.abl", "variable.other.abl"] },  // 'checkObject'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `can-find(lbCollection where lbCollection.ObjectRef = objRef:PropertyValue).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'can-find'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 9, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "storage.data.table.abl"] },  // 'lbCollection'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 50, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'lbCollection.ObjectRef'
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 59, "scopes": ["source.abl", "variable.other.abl"] },  // 'objRef'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 60, "endIndex": 73, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'PropertyValue'
    { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `can-find(lbCollection where lbCollection.ObjectRef = objRef:functionCall(123)).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'can-find'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 9, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "storage.data.table.abl"] },  // 'lbCollection'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 50, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'lbCollection.ObjectRef'
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 59, "scopes": ["source.abl", "variable.other.abl"] },  // 'objRef'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 60, "endIndex": 72, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'functionCall'
    { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 73, "endIndex": 76, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '123'
    { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `can-find( lbCollection).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'can-find'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "storage.data.table.abl"] },  // 'lbCollection'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `can-find(first lbCollection share-lock).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'can-find'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 9, "endIndex": 14, "scopes": ["source.abl", "meta.function-call.abl", "keyword.other.abl"] },  // 'first'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "storage.data.table.abl"] },  // 'lbCollection'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 38, "scopes": ["source.abl", "keyword.other.abl"] },  // 'share-lock'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
