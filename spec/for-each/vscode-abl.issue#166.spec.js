const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `// scope (break): 	storage.data.table.abl source.abl
for each Customer
    no-lock
    break by Customer.CustNum by Customer.name:
end. /* */`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 52, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// scope (break): 	storage.data.table.abl source.abl'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'Customer'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] }  // 'no-lock'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'break'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'by'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 29, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Customer.CustNum'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "keyword.other.abl"] },  // 'by'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 46, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Customer.name'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' '
      { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `for first Customer no-lock by Customer.CustNum by Customer.name:
end. /* */`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'first'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Customer'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "keyword.other.abl"] },  // 'by'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 46, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Customer.CustNum'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "keyword.other.abl"] },  // 'by'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 63, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Customer.name'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' '
      { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

