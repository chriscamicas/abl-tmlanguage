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
share-lo:
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
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'share-lo'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
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
share-lo:
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "entity.name.label.abl"] },  // 'block-label'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // ':'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 16, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 31, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'bCustomer'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'share-lo'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
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
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "entity.name.label.abl"] },  // 'block-label'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
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

describe('', () => {
  let statement = `EXCLUSIVE-LOCK-BLOCK:
for bCustomer exclusive-lock:
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 20, "scopes": ["source.abl", "entity.name.label.abl"] },  // 'EXCLUSIVE-LOCK-BLOCK'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 13, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'bCustomer'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },  // 'exclusive-lock'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  // The Next in NextOrderprocessError should not be a flow statement
  let statement = `ASSIGN NextOrderprocessError = UIMessage:canFindFirstUIMessage("SH0057A").`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 28, "scopes": ["source.abl", "variable.other.abl"] },  // 'NextOrderprocessError'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 40, "scopes": ["source.abl", "variable.other.abl"] },  // 'UIMessage'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 41, "endIndex": 62, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'canFindFirstUIMessage'
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 64, "endIndex": 71, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'SH0057A'
    { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ]
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})