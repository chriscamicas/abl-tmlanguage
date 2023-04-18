const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
  let statement = `interface foo.IBar inherits bar.IFoo:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.interface.abl"] },
    { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.interface.abl"] },
    { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.interface.abl"] },
    { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `interface foo.IBar inherits bar.IFoo,baz,IBaz:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.interface.abl"] },
    { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.interface.abl"] },
    { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.interface.abl"] },
    { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },
    { "startIndex": 37, "endIndex": 40, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },
    { "startIndex": 41, "endIndex": 45, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `INTERFACE foo.IBar INHERITS bar.IFoo,baz,IBaz:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.interface.abl"] },
    { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.interface.abl"] },
    { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.interface.abl"] },
    { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },
    { "startIndex": 37, "endIndex": 40, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },
    { "startIndex": 41, "endIndex": 45, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `interface foo.IBar 
    inherits bar.IFoo,
             baz,
             IBaz
             :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
      { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.interface.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 13, "endIndex": 21, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 13, "endIndex": 16, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.terminator.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `interface foo.IBar 
    inherits bar.IFoo,
             baz,another.ISpa,thing
             IBaz,
             IYes, Inow 
             :`

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
      { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.interface.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 13, "endIndex": 21, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 13, "endIndex": 16, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },
      { "startIndex": 17, "endIndex": 29, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },
      { "startIndex": 30, "endIndex": 35, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.define.interface.abl"] }
    ],
    [
      //{ "startIndex": 0, "endIndex": 15, "scopes": ["source.abl", "meta.define.interface.abl"  ] }
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.terminator.abl"] }
    ]
  ];

  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})









