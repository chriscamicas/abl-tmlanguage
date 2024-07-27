const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `GET-CLASS(foo.bar.baz) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'GET-CLASS'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 10, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `GET-CLASS ( foo.bar.baz ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'GET-CLASS'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz :`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz ABSTRACT:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'ABSTRACT'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz :`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `ASSIGN x = NEW foo.bar.baz()`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "variable.other.abl"] },  // 'x'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEW'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `ASSIGN x = NEW foo.bar.baz(true, ?)`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "variable.other.abl"] },  // 'x'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEW'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 27, "endIndex": 31, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'true'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // '?'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `ASSIGN x = NEW "foo.bar.baz" (true, ?)`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ASSIGN'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "variable.other.abl"] },  // 'x'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEW'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 16, "endIndex": 27, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'foo.bar.baz'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 30, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'true'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // '?'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `ENUM package.type :`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'ENUM'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 17, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },  // 'package.type'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `ENUM package.type   flags :`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'ENUM'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 17, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },  // 'package.type'
    { "startIndex": 17, "endIndex": 20, "scopes": ["source.abl", "meta.define.enum.abl"] },  // '   '
    { "startIndex": 20, "endIndex": 25, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'flags'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `ENUM package.flagsenum flags:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'ENUM'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
    { "startIndex": 5, "endIndex": 22, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },  // 'package.flagsenum'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.enum.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },  // 'flags'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `using foo.bar.baz.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'using'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.using.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `using foo.bar.baz from propath.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'using'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'propath'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.using.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `using foo.bar.* from propath.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'using'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 15, "scopes": ["source.abl", "meta.using.abl", "entity.name.package.abl"] },  // 'foo.bar.*'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'propath'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.using.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `using foo.bar.* ..`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },  // 'using'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 15, "scopes": ["source.abl", "meta.using.abl", "entity.name.package.abl"] },  // 'foo.bar.*'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.using.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.using.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `interface foo.IBar:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },  // 'interface'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'foo.IBar'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `interface foo.IBar inherits bar.IFoo:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },  // 'interface'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'foo.IBar'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },  // 'inherits'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'bar.IFoo'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `interface foo.IBar inherits bar.IFoo,baz,IBaz:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },  // 'interface'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'foo.IBar'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },  // 'inherits'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'bar.IFoo'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 37, "endIndex": 40, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'baz'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 41, "endIndex": 45, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'IBaz'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `INTERFACE foo.IBar INHERITS bar.IFoo,baz,IBaz:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },  // 'INTERFACE'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'foo.IBar'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },  // 'INHERITS'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'bar.IFoo'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 37, "endIndex": 40, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'baz'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 41, "endIndex": 45, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'IBaz'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `interface foo.IBar
    inherits bar.IFoo,
             baz,
             IBaz`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },  // 'interface'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] }  // 'foo.IBar'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.interface.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 21, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'bar.IFoo'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },  // '             '
      { "startIndex": 13, "endIndex": 16, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'baz'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },  // '             '
      { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] }  // 'IBaz'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `interface foo.IBar
    inherits bar.IFoo,
             baz,another.ISpa,thing
             IBaz,
             IYes, Inow
             :`

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },  // 'interface'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] }  // 'foo.IBar'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.interface.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.interface.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 21, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'bar.IFoo'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },  // '             '
      { "startIndex": 13, "endIndex": 16, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'baz'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 17, "endIndex": 29, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'another.ISpa'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 30, "endIndex": 35, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] }  // 'thing'
    ],
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },  // '             '
      { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'IBaz'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },  // '             '
      { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] },  // 'IYes'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.interface.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "meta.define.interface.abl", "entity.name.type.abl"] }  // 'Inow'
    ],
    [
      { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.define.interface.abl"] },  // '             '
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.interface.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz ABSTRACT

    inherits parent.class
    implements one.interface,
    another.iface

    :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'ABSTRACT'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.define.class.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 25, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'parent.class'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'one.interface'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'another.iface'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.define.class.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz inherits parent.class
    implements one.interface,
    another.iface
    abstract
    use-widget-pool:`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 39, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'parent.class'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'one.interface'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'another.iface'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'abstract'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz serializable inherits parent.class implements one.interface,another.iface abstract use-widget-pool:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 30, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'serializable'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 39, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 40, "endIndex": 52, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'parent.class'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 63, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 64, "endIndex": 77, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'one.interface'
    { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 78, "endIndex": 91, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'another.iface'
    { "startIndex": 91, "endIndex": 92, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 92, "endIndex": 100, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'abstract'
    { "startIndex": 100, "endIndex": 101, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 101, "endIndex": 116, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
    { "startIndex": 116, "endIndex": 117, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz inherits parent.class
    implements one.interface,
    another.iface
    abstract
    use-widget-pool serializable
    :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 39, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'parent.class'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'one.interface'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'another.iface'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'abstract'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 32, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'serializable'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz  use-widget-pool:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl"] },  // '  '
    { "startIndex": 19, "endIndex": 34, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz
     use-widget-pool:`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'foo.bar.baz'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz inherits boo.scoo
     use-widget-pool:`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 35, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'boo.scoo'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz
            INheriTS boo.scoo
     use-widget-POOL
     :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'foo.bar.baz'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'INheriTS'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 29, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'boo.scoo'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'use-widget-POOL'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz
        INheriTS
            boo.scoo

     :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'foo.bar.baz'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.class.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 16, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'INheriTS'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'boo.scoo'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.define.class.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


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
    ]];
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
  let statement = `SessionManager:ContestDataset:READ-XML("longchar":U,
  lcDataset,
  "EMPTY":U, ?, ?) . `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "variable.other.abl"] },  // 'SessionManager'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 15, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'ContestDataset'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 30, "endIndex": 38, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'READ-XML'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 40, "endIndex": 48, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'longchar'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 11, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lcDataset'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 3, "endIndex": 8, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'EMPTY'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 9, "endIndex": 11, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // '?'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // '?'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl"] }  // ' '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if eBusinessEntity.GenerateBE AND CharacterType:IsNUllOrEmpty(eBusinessEntity.BEName) THEN
    undo, throw NEW ClassNameNotEntertedException("unable"{&TRAN}, 0,  ClassNameNotEntertedEnum:BusinessEntity).`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 29, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'eBusinessEntity.GenerateBE'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 33, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 47, "scopes": ["source.abl", "variable.other.abl"] },  // 'CharacterType'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 48, "endIndex": 61, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'IsNUllOrEmpty'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 62, "endIndex": 84, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'eBusinessEntity.BEName'
      { "startIndex": 84, "endIndex": 85, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 85, "endIndex": 86, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 86, "endIndex": 90, "scopes": ["source.abl", "keyword.other.abl"] }  // 'THEN'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'undo'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'throw'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NEW'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 49, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'ClassNameNotEntertedException'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 51, "endIndex": 57, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // 'unable'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 58, "endIndex": 65, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.type.function.abl"] },  // '{&TRAN}'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '0'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 69, "endIndex": 71, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '  '
      { "startIndex": 71, "endIndex": 95, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'ClassNameNotEntertedEnum'
      { "startIndex": 95, "endIndex": 96, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 96, "endIndex": 110, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'BusinessEntity'
      { "startIndex": 110, "endIndex": 111, "scopes": ["source.abl"] },  // ')'
      { "startIndex": 111, "endIndex": 112, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

