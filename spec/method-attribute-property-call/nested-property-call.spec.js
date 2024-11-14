const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `quoter(poPaymentLogParameter:TransactionPaymentParameter:RequestID).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'quoter'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 7, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'poPaymentLogParameter'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 29, "endIndex": 56, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'TransactionPaymentParameter'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 57, "endIndex": 66, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'RequestID'
    { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `quoter(poPaymentLogParameter:LockTransactionPaymentParameter:RequestID).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'quoter'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 7, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'poPaymentLogParameter'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 29, "endIndex": 60, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'LockTransactionPaymentParameter'
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 61, "endIndex": 70, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'RequestID'
    { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

