const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `oController?:NewEventName:Subscribe(NewEventNameHandler).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 13, "endIndex": 25, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventName'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 26, "endIndex": 35, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Subscribe'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 36, "endIndex": 55, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventNameHandler'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oController?:NewEventName?:Subscribe(NewEventNameHandler).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 13, "endIndex": 25, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventName'
    { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 27, "endIndex": 36, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Subscribe'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 37, "endIndex": 56, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventNameHandler'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oController:NewEventName?:Subscribe(NewEventNameHandler).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 24, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventName'
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 26, "endIndex": 35, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Subscribe'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 36, "endIndex": 55, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventNameHandler'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oController:NewEventName?:AThing(oVariable).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 24, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventName'
    { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 26, "endIndex": 32, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'AThing'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 33, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'oVariable'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `message this-object:NewEventName?:PropertySays.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 19, "scopes": ["source.abl", "variable.language.abl"] },  // 'this-object'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 20, "endIndex": 32, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventName'
    { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 34, "endIndex": 46, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'PropertySays'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `assign this-object:NewEventName?:PropertySays = "Some value".`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 18, "scopes": ["source.abl", "variable.language.abl"] },  // 'this-object'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 19, "endIndex": 31, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventName'
    { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 33, "endIndex": 45, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'PropertySays'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 49, "endIndex": 59, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'Some value'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('technically impossible but will pass the compiler', () => {
  let statement = `message this-object?:NewEventName?:PropertySays.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 19, "scopes": ["source.abl", "variable.language.abl"] },  // 'this-object'
    { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 21, "endIndex": 33, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventName'
    { "startIndex": 33, "endIndex": 35, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 35, "endIndex": 47, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'PropertySays'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `message session:current-request-info?:AdapterType:ToString()`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "variable.language.abl"] },  // 'session'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 16, "endIndex": 36, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'current-request-info'
    { "startIndex": 36, "endIndex": 38, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 38, "endIndex": 49, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'AdapterType'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 50, "endIndex": 58, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'ToString'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `message session?:current-request-info?:AdapterType:ToString()`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "variable.language.abl"] },  // 'session'
    { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 17, "endIndex": 37, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'current-request-info'
    { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 39, "endIndex": 50, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'AdapterType'
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 51, "endIndex": 59, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'ToString'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `a[x]?:aMethod():aField // Evaluates to null if a[x] == null`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "variable.other.abl"] },  // 'a'
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.array.literal.abl", "variable.other.abl"] },  // 'x'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 6, "endIndex": 13, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'aMethod'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'aField'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 59, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// Evaluates to null if a[x] == null'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `a[x]:aMethod()?:aField`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "variable.other.abl"] },  // 'a'
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.array.literal.abl", "variable.other.abl"] },  // 'x'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 5, "endIndex": 12, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'aMethod'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "entity.name.function.abl"] }  // 'aField'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CAST(obj?:prop, My.Type)`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'CAST'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 5, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'obj'
    { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 10, "endIndex": 14, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.function.abl"] },  // 'prop'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'My.Type'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `type-OF(obj?:meth()?:val, My.Type)`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'type-OF'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'obj'
    { "startIndex": 11, "endIndex": 13, "scopes": ["source.abl", "meta.function-call.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.function.abl"] },  // 'meth'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 19, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 21, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.function.abl"] },  // 'val'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'My.Type'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `type-OF(obj:meth()?:val, My.Type)`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'type-OF'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'obj'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.function.abl"] },  // 'meth'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.function-call.abl", "keyword.operator.source.abl"] },  // '?:'
    { "startIndex": 20, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.function.abl"] },  // 'val'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'My.Type'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})