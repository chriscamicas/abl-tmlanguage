const shared = require('../shared.js');

describe('', () => {
  let statement = `{ test.i {&Test} }`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] },  // 'test.i'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 16, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] },  // '{&Test}'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `{ test.i &abc = ABC &def    = 'D E  F' &hij="H   I   J" }`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] },  // 'test.i'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&abc'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] },  // 'ABC'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 24, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&def'
    { "startIndex": 24, "endIndex": 28, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl"] },  // '    '
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.include.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 31, "endIndex": 37, "scopes": ["source.abl", "meta.include.abl", "string.single.complex.abl"] },  // 'D E  F'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.include.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 43, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&hij'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 45, "endIndex": 54, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl"] },  // 'H   I   J'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})