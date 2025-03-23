const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `CREATE ALIAS alias-string   FOR DATABASE logical-name-string.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CREATE'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ALIAS'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 25, "scopes": ["source.abl", "storage.data.database.abl"] },  // 'alias-string'
    { "startIndex": 25, "endIndex": 28, "scopes": ["source.abl"] },  // '   '
    { "startIndex": 28, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 40, "scopes": ["source.abl", "keyword.other.abl"] },  // 'DATABASE'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 60, "scopes": ["source.abl", "storage.data.database.abl"] },  // 'logical-name-string'
    { "startIndex": 60, "endIndex": 62, "scopes": ["source.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CREATE ALIAS value ( expression ) FOR DATABASE value ( expression ).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CREATE'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ALIAS'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'value'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 31, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'expression'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 46, "scopes": ["source.abl", "keyword.other.abl"] },  // 'DATABASE'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 47, "endIndex": 52, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'value'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 55, "endIndex": 65, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'expression'
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 67, "endIndex": 69, "scopes": ["source.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CREATE ALIAS ALIAS_STRING FOR DATABASE value ( tt.fld1 ).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CREATE'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ALIAS'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 25, "scopes": ["source.abl", "storage.data.database.abl"] },  // 'ALIAS_STRING'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 29, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 38, "scopes": ["source.abl", "keyword.other.abl"] },  // 'DATABASE'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 44, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'value'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 47, "endIndex": 54, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'tt.fld1'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 56, "endIndex": 58, "scopes": ["source.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CREATE ALIAS "DICTDB2" FOR DATABASE VALUE(user_dbname).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CREATE'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ALIAS'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 14, "endIndex": 21, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'DICTDB2'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FOR'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 35, "scopes": ["source.abl", "keyword.other.abl"] },  // 'DATABASE'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 41, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 42, "endIndex": 53, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'user_dbname'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
