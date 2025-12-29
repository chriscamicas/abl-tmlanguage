const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `if can-do("data",output-content-type) then.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'can-do'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 11, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'data'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 17, "endIndex": 36, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'output-content-type'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 42, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `// b1-cust should be table scope
find b1-cust exclusive-lock where rowid(b1-cust) = rowid(customer) no-wait no-error.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 32, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// b1-cust should be table scope'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'find'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 12, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'b1-cust'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'exclusive-lock'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 33, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 39, "scopes": ["source.abl", "support.function.abl"] },  // 'rowid'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 40, "endIndex": 47, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'b1-cust'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 56, "scopes": ["source.abl", "support.function.abl"] },  // 'rowid'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 57, "endIndex": 65, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 67, "endIndex": 74, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-wait'
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 75, "endIndex": 83, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-error'
      { "startIndex": 83, "endIndex": 84, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
