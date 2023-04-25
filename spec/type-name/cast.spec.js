const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
  let statement = `x = cast(y, foo.bar.baz) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "keyword.other.abl"] },
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl"] },
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "keyword.operator.source.abl"] },
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.function.abl"] },
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.cast.abl", "variable.other.abl"] },
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.cast.abl", "punctuation.separator.comma.abl"] },
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
    { "startIndex": 12, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.type.abl"] },
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `x = cast(y
        ,foo.bar.baz) `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "keyword.other.abl"] },
      { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl"] },
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "keyword.operator.source.abl"] },
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.function.abl"] },
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },
      // this is currently like this because we need to look ahead to find a comma 
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.type.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.cast.abl", "punctuation.separator.comma.abl"] },
      { "startIndex": 9, "endIndex": 20, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.type.abl"] },
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },
      { "startIndex": 21, "endIndex": 23, "scopes": ["source.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `x = cast(y,
                              foo.bar.baz) `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "keyword.other.abl"] },
      { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl"] },
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "keyword.operator.source.abl"] },
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.function.abl"] },
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.cast.abl", "variable.other.abl"] },
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.cast.abl", "punctuation.separator.comma.abl"] }
    ],
    [
      { "startIndex": 0, "endIndex": 30, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
      { "startIndex": 30, "endIndex": 41, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.type.abl"] },
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },
      { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl"] }
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `cast ( q, foo.bar.baz ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.function.abl"] },
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.cast.abl", "variable.other.abl"] },
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.cast.abl", "punctuation.separator.comma.abl"] },
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
    { "startIndex": 10, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.type.abl"] },
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },
    { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `cast ( q, "foo.bar.baz" ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.function.abl"] },
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.cast.abl", "variable.other.abl"] },
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.cast.abl", "punctuation.separator.comma.abl"] },
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.cast.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },
    { "startIndex": 11, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.cast.abl", "string.double.complex.abl"] },
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.cast.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },
    { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl"] }
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `cast ( q, "foo.bar.baz":u ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.function.abl"] },  // 'cast'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.cast.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.cast.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.cast.abl", "variable.other.abl"] },  // 'q'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.cast.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.cast.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.cast.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 11, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.cast.abl", "string.double.complex.abl"] },  // 'foo.bar.baz'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.cast.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.cast.abl", "support.other.abl"] },  // ':u'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.cast.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl"] }  // ' '    
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `cast ( q, Map<foo.bar, baz> ) `;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.function.abl"] },
        { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
        { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.cast.abl", "variable.other.abl"] },
        { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.cast.abl", "punctuation.separator.comma.abl"] },
        { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
        { "startIndex": 10, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.cast.abl", "entity.name.type.abl"] },
        { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.cast.abl"] },
        { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.cast.abl", "meta.brace.round.js"] },
        { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

