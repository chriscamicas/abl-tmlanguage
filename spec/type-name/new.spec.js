const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `ASSIGN x = NEW foo.bar.baz()`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },
    { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "meta.function-call.new.abl", "keyword.other.abl"] },
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.new.abl"] },
    { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.new.abl", "entity.name.type.abl"] },
    { "startIndex": 26, "endIndex": 29, "scopes": ["source.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `ASSIGN x = NEW foo.bar.baz(true, ?)`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'x'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "meta.function-call.new.abl", "keyword.other.abl"] },  // 'NEW'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.new.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.new.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // '('
    { "startIndex": 27, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] },  // 'true'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // ','
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "constant.language.source.abl"] },  // '?'
    { "startIndex": 34, "endIndex": 36, "scopes": ["source.abl"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `ASSIGN oVar = NEW "foo.bar.baz" (true, ?)`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oVar'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEW'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 19, "endIndex": 30, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'foo.bar.baz'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl"] },  // ' ('
    { "startIndex": 33, "endIndex": 37, "scopes": ["source.abl", "keyword.other.abl"] },  // 'true'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // ','
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "constant.language.source.abl"] },  // '?'
    { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl"] }  // ')'

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

