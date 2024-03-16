const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `@annotation (name="value").  `;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.declaration.annotation.abl", "storage.type.annotation.abl"] },  // '@annotation'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'name'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 19, "endIndex": 24, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // 'value'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 27, "endIndex": 30, "scopes": ["source.abl"] }  // '  '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `  @annotation.
define variable i as int.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "meta.declaration.annotation.abl", "storage.type.annotation.abl"] },  // '@annotation'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'i'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'int'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `@annotation (name="value", two="2", three='3').  `;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.declaration.annotation.abl", "storage.type.annotation.abl"] },  // '@annotation'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'name'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 19, "endIndex": 24, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // 'value'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 30, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'two'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // '2'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 47, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'three='3').'
    { "startIndex": 47, "endIndex": 50, "scopes": ["source.abl", "meta.declaration.annotation.abl"] }  // '  '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `@annotation (two
    =   "2"
        , three
    =
    '3'
    ).
define temp-table tt like Customer.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.declaration.annotation.abl", "storage.type.annotation.abl"] },  // '@annotation'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 13, "endIndex": 16, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] }  // 'two'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 5, "endIndex": 8, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '   '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // '2'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] }  // 'three'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] }  // '='
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.single.complex.abl"] },  // '3'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] }  // '''
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'temp-table'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'tt'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'like'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'Customer'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `@RestAddress (type="collection", address="/Customers", tables="eCustomer", id="CustNum",
  fields="Name,City,Country", canCreate="true",
  links="orders:/Customers/~{CustNum}/Orders,salesrep:/Salesreps/~{SalesRep}").`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.declaration.annotation.abl", "storage.type.annotation.abl"] },  // '@RestAddress'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'type'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 20, "endIndex": 30, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // 'collection'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 40, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'address'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 42, "endIndex": 52, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // '/Customers'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 55, "endIndex": 61, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'tables'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 63, "endIndex": 72, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // 'eCustomer'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 75, "endIndex": 77, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'id'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 79, "endIndex": 86, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // 'CustNum'
      { "startIndex": 86, "endIndex": 87, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 87, "endIndex": 88, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'fields'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 10, "endIndex": 27, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // 'Name,City,Country'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'canCreate'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 41, "endIndex": 45, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // 'true'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.declaration.annotation.abl", "constant.other.key.abl"] },  // 'links'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 9, "endIndex": 27, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // 'orders:/Customers/'
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 29, "endIndex": 65, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // 'CustNum}/Orders,salesrep:/Salesreps/'
      { "startIndex": 65, "endIndex": 67, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 67, "endIndex": 76, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl"] },  // 'SalesRep}'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})