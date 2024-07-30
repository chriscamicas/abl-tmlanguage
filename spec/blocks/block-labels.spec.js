const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `for each bCustomer
    no-lock:
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 18, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'bCustomer'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `for each bCustomer where true no-lock:
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 18, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'bCustomer'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 24, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 29, "scopes": ["source.abl", "constant.language.abl"] },  // 'true'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 37, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `for each bCustomer
exclusive-l:
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 18, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'bCustomer'
    ],
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'exclusive-l'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `for each bCustomer
shared-lo:
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 18, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'bCustomer'
    ],
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'shared-lo'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `block-label: for each bCustomer
shared-lo:
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.block.label.abl"] },  // 'block-label'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ':'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 16, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 31, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'bCustomer'
    ],
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'shared-lo'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `block-label:
repeat for bCustomer:
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.block.label.abl"] },  // 'block-label'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'repeat'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 10, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 20, "scopes": ["source.abl", "meta.block.abl", "storage.data.table.abl"] },  // 'bCustomer'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})