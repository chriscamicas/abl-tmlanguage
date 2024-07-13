const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `{rec/zetin.ooi &where="zetin.act"}`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 1, "endIndex": 14, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] },  // 'rec/zetin.ooi'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 21, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&where'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 23, "endIndex": 32, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl"] },  // 'zetin.act'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `{rec/zetin.ooi
    &where="zetin.act"
}`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 1, "endIndex": 14, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] }  // 'rec/zetin.ooi'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.include.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&where'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 12, "endIndex": 21, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl"] },  // 'zetin.act'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `{rec/zetin.ooi &where="zetin.act
    AND CAN-FIND(FIRST ztihu WHERE ztihu.zetin_iden = zetin.zetin_iden)"}
`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 1, "endIndex": 14, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] },  // 'rec/zetin.ooi'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 21, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&where'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 23, "endIndex": 33, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl"] }  // 'zetin.act'
    ],
    [
      { "startIndex": 0, "endIndex": 71, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl"] },  // '    AND CAN-FIND(FIRST ztihu WHERE ztihu.zetin_iden = zetin.zetin_iden)'
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `{rec/zetin.ooi &where="zetin.act" &MyArg &Thrid=43}`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 1, "endIndex": 14, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] },  // 'rec/zetin.ooi'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 21, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&where'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 23, "endIndex": 32, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl"] },  // 'zetin.act'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 40, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&MyArg'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 47, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&Thrid'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 48, "endIndex": 50, "scopes": ["source.abl", "meta.include.abl"] },  // '43'
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `{rec/zetin.ooi
  &where="zetin.act"
  &MyArg &Thrid=43}`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 1, "endIndex": 14, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] }  // 'rec/zetin.ooi'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&where'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 10, "endIndex": 19, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl"] },  // 'zetin.act'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.include.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&MyArg'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&Thrid'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 16, "endIndex": 18, "scopes": ["source.abl", "meta.include.abl"] },  // '43'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

