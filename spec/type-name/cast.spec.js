const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
  let statement = `x = cast(y, foo.bar.baz) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "variable.other.abl"] },  // 'x'
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'cast'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'y'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl"] }  // ' '

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `x = cast(y
        ,foo.bar.baz) `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "variable.other.abl"] },  // 'x'
      { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'cast'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] }  // 'y'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 9, "endIndex": 20, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 21, "endIndex": 23, "scopes": ["source.abl"] }  // ' '
    ]

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `x = cast(y,
                              foo.bar.baz) `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "variable.other.abl"] },  // 'x'
      { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'cast'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'y'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 30, "scopes": ["source.abl", "meta.function-call.abl"] },  // '                              '
      { "startIndex": 30, "endIndex": 41, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl"] }  // ' '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `cast ( q, foo.bar.baz ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'cast'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'q'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `cast ( q, "foo.bar.baz" ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'cast'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'q'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 11, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl"] },  // 'foo.bar.baz'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `cast ( q, "foo.bar.baz":u ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'cast'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'q'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 11, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl"] },  // 'foo.bar.baz'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.abl", "string.double.complex.abl", "support.other.abl"] },  // ':u'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl"] }  // ' '

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `cast ( q, Map<foo.bar, baz> ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'cast'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'q'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.generic.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 13, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'Map'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.generic.abl"] },  // '<'
    { "startIndex": 14, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'foo.bar'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.generic.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.generic.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'baz'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.generic.abl"] },  // '>'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl"] }  // ' '

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
