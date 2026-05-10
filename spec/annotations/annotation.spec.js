const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `@annotation (name="value").  `;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.name.tag.abl"] },  // '@annotation'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'name'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 19, "endIndex": 24, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'value'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // ')'
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
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.name.tag.abl"] },  // '@annotation'
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
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.name.tag.abl"] },  // '@annotation'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'name'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 19, "endIndex": 24, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'value'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 30, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'two'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // '2'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 41, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'three'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.single.abl"] },  // '3'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 47, "endIndex": 50, "scopes": ["source.abl"] }  // '  '
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
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.name.tag.abl"] },  // '@annotation'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 13, "endIndex": 16, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] }  // 'two'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 5, "endIndex": 8, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '   '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // '2'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] }  // 'three'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] }  // '='
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.single.abl"] },  // '3'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] }  // '''
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // ')'
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
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.name.tag.abl"] },  // '@RestAddress'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'type'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 20, "endIndex": 30, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'collection'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 40, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'address'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 42, "endIndex": 52, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // '/Customers'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 55, "endIndex": 61, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'tables'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 63, "endIndex": 72, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'eCustomer'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 75, "endIndex": 77, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'id'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 79, "endIndex": 86, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'CustNum'
      { "startIndex": 86, "endIndex": 87, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 87, "endIndex": 88, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'fields'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 10, "endIndex": 27, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'Name,City,Country'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'canCreate'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 41, "endIndex": 45, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'true'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'links'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 9, "endIndex": 27, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'orders:/Customers/'
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 29, "endIndex": 65, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'CustNum}/Orders,salesrep:/Salesreps/'
      { "startIndex": 65, "endIndex": 67, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 67, "endIndex": 76, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'SalesRep}'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `@AnnotationName(attrib1="class-tag,store",
  attrib2="bob").`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 15, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.name.tag.abl"] },  // '@AnnotationName'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'attrib1'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 25, "endIndex": 40, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'class-tag,store'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'attrib2'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'bob'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `    @openapi.openedge.export(type="REST", useReturnValue="false", writeDataSetBeforeImage="true").
    @progress.service.resourceMapping(type="REST", operation="read", URI="?filter=~{filter~}", alias="", mediaType="application/json").
    @openapi.openedge.single.
    @openapi.openedge.method.property (name="mappingType", value="JFP").
    @openapi.openedge.method.property (name="capabilities", value="ablFilter,top,skip,id,orderBy").
    @openapi.openedge.single.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 28, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.name.tag.abl"] },  // '@openapi.openedge.export'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 29, "endIndex": 33, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'type'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 35, "endIndex": 39, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'REST'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 56, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'useReturnValue'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 58, "endIndex": 63, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'false'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 66, "endIndex": 89, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'writeDataSetBeforeImage'
      { "startIndex": 89, "endIndex": 90, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 90, "endIndex": 91, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 91, "endIndex": 95, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'true'
      { "startIndex": 95, "endIndex": 96, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 96, "endIndex": 97, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 97, "endIndex": 98, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 37, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.name.tag.abl"] },  // '@progress.service.resourceMapping'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 38, "endIndex": 42, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'type'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 44, "endIndex": 48, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'REST'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 60, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'operation'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 62, "endIndex": 66, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'read'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 69, "endIndex": 72, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'URI'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 74, "endIndex": 82, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // '?filter='
      { "startIndex": 82, "endIndex": 84, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 84, "endIndex": 90, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'filter'
      { "startIndex": 90, "endIndex": 92, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~}'
      { "startIndex": 92, "endIndex": 93, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 93, "endIndex": 94, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 94, "endIndex": 95, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 95, "endIndex": 100, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'alias'
      { "startIndex": 100, "endIndex": 101, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 101, "endIndex": 102, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 102, "endIndex": 103, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 103, "endIndex": 104, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 104, "endIndex": 105, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 105, "endIndex": 114, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'mediaType'
      { "startIndex": 114, "endIndex": 115, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 115, "endIndex": 116, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 116, "endIndex": 132, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'application/json'
      { "startIndex": 132, "endIndex": 133, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 133, "endIndex": 134, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 134, "endIndex": 135, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 28, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.name.tag.abl"] },  // '@openapi.openedge.single'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 37, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.name.tag.abl"] },  // '@openapi.openedge.method.property'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 39, "endIndex": 43, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'name'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 45, "endIndex": 56, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'mappingType'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 59, "endIndex": 64, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'value'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 66, "endIndex": 69, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'JFP'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 37, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.name.tag.abl"] },  // '@openapi.openedge.method.property'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 39, "endIndex": 43, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'name'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 45, "endIndex": 57, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'capabilities'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.declaration.annotation.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // ' '
      { "startIndex": 60, "endIndex": 65, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.other.attribute-name.abl"] },  // 'value'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.declaration.annotation.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 67, "endIndex": 96, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl"] },  // 'ablFilter,top,skip,id,orderBy'
      { "startIndex": 96, "endIndex": 97, "scopes": ["source.abl", "meta.declaration.annotation.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 97, "endIndex": 98, "scopes": ["source.abl", "meta.declaration.annotation.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 98, "endIndex": 99, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.declaration.annotation.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 28, "scopes": ["source.abl", "meta.declaration.annotation.abl", "entity.name.tag.abl"] },  // '@openapi.openedge.single'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
