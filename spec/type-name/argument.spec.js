const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
  let statement = `new foo.bar(y, foo.bar.baz:Property) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'new'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'foo.bar'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'y'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 27, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'Property'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 36, "endIndex": 38, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `new foo.bar("y":L9, new foo.bar.baz()) `;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'new'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'foo.bar'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'y'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 15, "endIndex": 18, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "support.other.abl"] },  // ':L9'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 23, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'new'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 38, "endIndex": 40, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `x = new baz (true, today, now, ?, -12).`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "variable.other.abl"] },  // 'x'
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'new'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'baz'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'true'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'today'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'now'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // '?'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '-12'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `cast ( q:Prop, foo.bar.baz ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'cast'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'q'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl"] },  // ':'
    { "startIndex": 9, "endIndex": 13, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.function.abl"] },  // 'Prop'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl"] }   // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `cast ( ttable.field, foo.bar.baz ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'cast'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 19, "scopes": ["source.abl", "meta.function-call.abl", "storage.data.table.abl"] },  // 'ttable.field'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 34, "endIndex": 36, "scopes": ["source.abl"] }  // ' '
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

