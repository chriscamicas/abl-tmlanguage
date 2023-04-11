const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
  let statement = `method public void foo( po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 30, "endIndex": 41, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public Progress.Lang.Object foo( po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 14, "endIndex": 34, "scopes": ["source.abl", "meta.function.method", "entity.name.type.abl"] },
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 35, "endIndex": 38, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 46, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 58, "endIndex": 60, "scopes": ["source.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public Progress.Lang.Object foo( po as foo.bar.baz
                                                             po2 as JsonObject,
                                                             po3 as logical):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 14, "endIndex": 34, "scopes": ["source.abl", "meta.function.method", "entity.name.type.abl"] },
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 35, "endIndex": 38, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 46, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 61, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 61, "endIndex": 64, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 65, "endIndex": 67, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 68, "endIndex": 78, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
      { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 61, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 61, "endIndex": 64, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 65, "endIndex": 67, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 68, "endIndex": 75, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
      { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 76, "endIndex": 78, "scopes": ["source.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public Progress.Lang.Object foo( po as foo.bar.baz
                                                             , po2 as JsonObject
                                                             , po3 as logical):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 14, "endIndex": 34, "scopes": ["source.abl", "meta.function.method", "entity.name.type.abl"] },
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 35, "endIndex": 38, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 46, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 61, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] },
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 63, "endIndex": 66, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 67, "endIndex": 69, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 70, "endIndex": 80, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 61, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] },
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 63, "endIndex": 66, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 67, "endIndex": 69, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 70, "endIndex": 77, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 78, "endIndex": 80, "scopes": ["source.abl"] }
    ]

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method package-protected Progress.Lang.Object foo( po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 7, "endIndex": 24, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 25, "endIndex": 45, "scopes": ["source.abl", "meta.function.method", "entity.name.type.abl"] },
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 46, "endIndex": 49, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 57, "endIndex": 68, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 69, "endIndex": 71, "scopes": ["source.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method protected Progress.Lang.Object foo( po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 7, "endIndex": 16, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 17, "endIndex": 37, "scopes": ["source.abl", "meta.function.method", "entity.name.type.abl"] },
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 38, "endIndex": 41, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 46, "endIndex": 48, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 49, "endIndex": 60, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 61, "endIndex": 63, "scopes": ["source.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method private static  Progress.Lang.Object foo( po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 15, "endIndex": 21, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 21, "endIndex": 23, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 23, "endIndex": 43, "scopes": ["source.abl", "meta.function.method", "entity.name.type.abl"] },
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 44, "endIndex": 47, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 52, "endIndex": 54, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 55, "endIndex": 66, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
    { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 67, "endIndex": 69, "scopes": ["source.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo( pc as character, po as foo.bar.baz):`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] },
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 41, "endIndex": 43, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 47, "endIndex": 58, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 59, "endIndex": 61, "scopes": ["source.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method abstract public datetime-tz foo( pc as character, po as foo.bar.baz).`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 23, "endIndex": 34, "scopes": ["source.abl", "meta.function.method", "storage.type.abl"] },
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.method"] },
    { "startIndex": 35, "endIndex": 38, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 43, "endIndex": 45, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 46, "endIndex": 55, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] },
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 57, "endIndex": 59, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 60, "endIndex": 62, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
    { "startIndex": 63, "endIndex": 74, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
    { "startIndex": 74, "endIndex": 77, "scopes": ["source.abl", "meta.function.method"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo( pc as character, 
                                            po as foo.bar.baz):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] },
      { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 50, "endIndex": 61, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 62, "endIndex": 64, "scopes": ["source.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `METHOD PUBLIC VOID foo( pc as character, 
                                            po as class foo.bar.baz):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] },
      { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 50, "endIndex": 55, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 56, "endIndex": 67, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 68, "endIndex": 70, "scopes": ["source.abl"] }
    ]

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `METHOD PUBLIC 'System.Byte[]' foo( pc as character, 
                                            po as "System.Byte[]"):`;


  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.method", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },
      { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.function.method", "string.single.complex.abl"] },
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.method", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 30, "endIndex": 33, "scopes": ["source.abl", "meta.function.method", "entity.name.type.abl"] },
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 38, "endIndex": 40, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 41, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] },
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },
      { "startIndex": 51, "endIndex": 64, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "string.double.complex.abl"] },
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo( pc as character, 
                                            po as baz):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] },
      { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo( pc as character, 
                                            po as baz)
                                            /* comment */
                                            :
                        var int i.        
                    end method.    `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] },
      { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
      { "startIndex": 53, "endIndex": 55, "scopes": ["source.abl", "meta.function.method"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.function.method", "comment.block.source.abl"] },
      { "startIndex": 46, "endIndex": 55, "scopes": ["source.abl", "meta.function.method", "comment.block.source.abl", "comment"] },
      { "startIndex": 55, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "comment.block.source.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 24, "scopes": ["source.abl"] },
      { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },
      { "startIndex": 28, "endIndex": 31, "scopes": ["source.abl", "storage.type.abl"] },
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "variable.other.abl"] },
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.terminator.abl"] },
      { "startIndex": 34, "endIndex": 43, "scopes": ["source.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 20, "scopes": ["source.abl"] },
      { "startIndex": 20, "endIndex": 23, "scopes": ["source.abl", "keyword.other.abl"] },
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },
      { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "keyword.other.abl"] },
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] },
      { "startIndex": 31, "endIndex": 36, "scopes": ["source.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method /*public*/ void  foo (
            pc as character, 
            po as baz
            )
            // comment 
            :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl", "meta.function.method", "comment.block.source.abl"] },
      { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "meta.function.method", "comment.block.source.abl", "comment"] },
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.function.method", "comment.block.source.abl"] },
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 18, "endIndex": 27, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] },
      { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] }
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 12, "endIndex": 23, "scopes": ["source.abl", "meta.function.method", "comment.line.double-slash.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo(input pc as character, 
                                            output po as foo.bar.baz,
                                            buffer pb for Table,
                                            input-output dataset-handle hh):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 35, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] },
      { "startIndex": 45, "endIndex": 47, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 57, "endIndex": 68, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.data.table.abl"] },
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 58, "endIndex": 63, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.data.table.abl"] },
      { "startIndex": 63, "endIndex": 65, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 56, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 57, "endIndex": 71, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 72, "endIndex": 74, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 75, "endIndex": 77, "scopes": ["source.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo(input pc as character, 
                                            output po as foo.bar.baz,
                                            buffer pb for Table   preselect,
                                            input-output dataset-handle hh):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 35, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] },
      { "startIndex": 45, "endIndex": 47, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 57, "endIndex": 68, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "punctuation.separator.comma.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.data.table.abl"] },
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 58, "endIndex": 63, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.data.table.abl"] },
      { "startIndex": 63, "endIndex": 66, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 66, "endIndex": 75, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 75, "endIndex": 77, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 56, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 57, "endIndex": 71, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 72, "endIndex": 74, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 75, "endIndex": 77, "scopes": ["source.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo(input pc as character extent 99, 
                                            output po as foo.bar.baz extent,
                                            buffer pb for Table,
                                            input-output dataset-handle hh):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 35, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.type.abl"] },
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 45, "endIndex": 51, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 52, "endIndex": 54, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "constant.numeric.source.abl"] },
      { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 57, "endIndex": 68, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "entity.name.type.abl"] },
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 69, "endIndex": 75, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 75, "endIndex": 77, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 50, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.data.table.abl"] },
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 58, "endIndex": 63, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.data.table.abl"] },
      { "startIndex": 63, "endIndex": 65, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 56, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 57, "endIndex": 71, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 72, "endIndex": 74, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "variable.parameter.abl"] },
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 75, "endIndex": 77, "scopes": ["source.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void foo(table ttItem,
                                            input-output dataset dsCustomer):`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.function.method", "keyword.other.abl"] },
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.method"] },
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.function.method", "entity.name.function.abl"] },
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 29, "endIndex": 35, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.data.table.abl"] },
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ],
    [
      { "startIndex": 0, "endIndex": 44, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 44, "endIndex": 56, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 57, "endIndex": 64, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "keyword.other.abl"] },
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] },
      { "startIndex": 65, "endIndex": 75, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters", "storage.data.table.abl"] },
      { "startIndex": 75, "endIndex": 77, "scopes": ["source.abl", "meta.function.method", "meta.function.parameters"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
