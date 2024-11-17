const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `vHandle = this-procedure.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "variable.other.abl"] },  // 'vHandle'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 24, "scopes": ["source.abl", "variable.language.abl"] },  // 'this-procedure'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `vHandle = this-procedure:first-sibling.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "variable.other.abl"] },  // 'vHandle'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 10, "endIndex": 24, "scopes": ["source.abl", "variable.language.abl"] },  // 'this-procedure'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 25, "endIndex": 38, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'first-sibling'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run ip (this-procedure).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'ip'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 22, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.language.abl"] },  // 'this-procedure'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `run ip (this-procedure, this-object).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'ip'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 8, "endIndex": 22, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.language.abl"] },  // 'this-procedure'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.language.abl"] },  // 'this-object'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `this-object().`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'this-object'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `objRef:Add(this-object).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },  // 'objRef'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 7, "endIndex": 10, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Add'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 11, "endIndex": 22, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.language.abl"] },  // 'this-object'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `objRef:Add(file-info:handle).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "variable.other.abl"] },  // 'objRef'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 7, "endIndex": 10, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Add'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 11, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.language.abl"] },  // 'file-info'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 21, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'handle'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

