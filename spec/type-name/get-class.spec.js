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
  let statement = `GET-CLASS ( List<foo.bar.baz> ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'GET-CLASS'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'List'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 17, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `GET-CLASS ( Progress.Collections.List<foo.bar.baz> ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'GET-CLASS'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Progress.Collections.List'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 38, "endIndex": 49, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 52, "endIndex": 54, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `GET-CLASS ( Dictionary<foo.bar, boo.baz> ) `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'GET-CLASS'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'Dictionary'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "punctuation.definition.generic.begin.abl"] },  // '<'
    { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'foo.bar'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 39, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "entity.name.type.abl"] },  // 'boo.baz'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function-call.abl", "meta.generic.abl", "punctuation.definition.generic.end.abl"] },  // '>'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})