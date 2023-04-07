const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
  let statement = `define variable xxx as foo.bar.baz no-undo.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 23, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },
    { "startIndex": 35, "endIndex": 42, "scopes": ["source.abl", "keyword.other.abl"] },
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable xxx as class foo.bar.baz no-undo.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable xxx as class foo.bar.baz no-undo extent.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
    { "startIndex": 49, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "punctuation.terminator.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `define public property AThing as IHttpClient no-undo
  get.
  set.
  `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 14, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 23, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 33, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
