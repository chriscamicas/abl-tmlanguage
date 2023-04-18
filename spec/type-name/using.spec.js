const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
    let statement = `using foo.bar.baz.`;

    let expectedTokens = [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'using'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.using.abl", "punctuation.terminator.abl"] }  // '.'
          ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `using foo.bar.baz from propath.`;

    let expectedTokens = [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'using'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'from'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'propath'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.using.abl", "punctuation.terminator.abl"] }  // '.'      
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `using foo.bar.* from propath.`;

    let expectedTokens = [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'using'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 15, "scopes": ["source.abl", "meta.using.abl", "entity.name.package.abl"] },  // 'foo.bar.*'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'from'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'propath'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.using.abl", "punctuation.terminator.abl"] }  // '.'      
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `using foo.bar.* .`;

    let expectedTokens = [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'using'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 15, "scopes": ["source.abl", "meta.using.abl", "entity.name.package.abl"] },  // 'foo.bar.*'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.using.abl", "punctuation.terminator.abl"] }  // '.'
          ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `using foo.bar.baz from propath.
  using foo.bar.* .
  using system.* from assembly .
  using openedge.core.string.
  `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'using'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'from'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'propath'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.using.abl", "punctuation.terminator.abl"] }  // '.'
      ],
      [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.using.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'using'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 17, "scopes": ["source.abl", "meta.using.abl", "entity.name.package.abl"] },  // 'foo.bar.*'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.using.abl", "punctuation.terminator.abl"] }  // '.'
      ],
      [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.using.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'using'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 16, "scopes": ["source.abl", "meta.using.abl", "entity.name.package.abl"] },  // 'system.*'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 21, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'from'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 30, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'assembly'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.using.abl", "punctuation.terminator.abl"] }  // '.'
      ],
      [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.using.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'using'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 28, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },  // 'openedge.core.string'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.using.abl", "punctuation.terminator.abl"] }  // '.'
      ],
      [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] }  // ''
      ]

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


