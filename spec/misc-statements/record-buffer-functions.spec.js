const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `if available bCustomer then .
else if ambiguous bCustomer then .`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 12, "scopes": ["source.abl", "support.function.abl"] },  // 'available'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 22, "scopes": ["source.abl", "support.data.table.abl"] },  // 'bCustomer'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'else'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 17, "scopes": ["source.abl", "support.function.abl"] },  // 'ambiguous'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 27, "scopes": ["source.abl", "support.data.table.abl"] },  // 'bCustomer'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 32, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `   if available sports.bCustomer then message "s".
   else if ambiguous(s2k.bCustomer) then.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 3, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 15, "scopes": ["source.abl", "support.function.abl"] },  // 'available'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 32, "scopes": ["source.abl", "support.data.table.abl"] },  // 'sports.bCustomer'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 37, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 45, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "string.double.complex.abl"] },  // 's'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 3, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'else'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 20, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'ambiguous'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 21, "endIndex": 34, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 's2k.bCustomer'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 40, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
