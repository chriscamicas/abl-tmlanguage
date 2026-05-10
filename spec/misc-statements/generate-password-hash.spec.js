const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `GENERATE-PASSWORD-HASH(cPassword1, rSalt1, "PBKDF2-HMAC-SHA-384")`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 22, "scopes": ["source.abl", "support.function.abl"] },  // 'GENERATE-PASSWORD-HASH'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 23, "endIndex": 33, "scopes": ["source.abl", "variable.other.abl"] },  // 'cPassword1'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 41, "scopes": ["source.abl", "variable.other.abl"] },  // 'rSalt1'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 44, "endIndex": 63, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'PBKDF2-HMAC-SHA-384'
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.brace.round.abl"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `GENERATE-PASSWORD-HASH(cPassword2, rSalt2, ?)`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 22, "scopes": ["source.abl", "support.function.abl"] },  // 'GENERATE-PASSWORD-HASH'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 23, "endIndex": 33, "scopes": ["source.abl", "variable.other.abl"] },  // 'cPassword2'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 41, "scopes": ["source.abl", "variable.other.abl"] },  // 'rSalt2'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "constant.language.abl"] },  // '?'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.brace.round.abl"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `GENERATE-PASSWORD-HASH(cPassword3, GENERATE-SALT(iSize), "PBKDF2-HMAC-SHA-512").`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 22, "scopes": ["source.abl", "support.function.abl"] },  // 'GENERATE-PASSWORD-HASH'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 23, "endIndex": 33, "scopes": ["source.abl", "variable.other.abl"] },  // 'cPassword3'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 48, "scopes": ["source.abl", "support.function.abl"] },  // 'GENERATE-SALT'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 49, "endIndex": 54, "scopes": ["source.abl", "variable.other.abl"] },  // 'iSize'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 58, "endIndex": 77, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'PBKDF2-HMAC-SHA-512'
    { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `GENERATE-PASSWORD-HASH("PBKDF2-HMAC-SHA-512" /*not good practice*/ ).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 22, "scopes": ["source.abl", "support.function.abl"] },  // 'GENERATE-PASSWORD-HASH'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 24, "endIndex": 43, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'PBKDF2-HMAC-SHA-512'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 47, "scopes": ["source.abl", "comment.block.abl"] },  // '/*'
    { "startIndex": 47, "endIndex": 64, "scopes": ["source.abl", "comment.block.abl", "comment"] },  // 'not good practice'
    { "startIndex": 64, "endIndex": 66, "scopes": ["source.abl", "comment.block.abl"] },  // '*/'
    { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `GENERATE-PASSWORD-HASH({&secretPw} /*not good practice*/ ).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 22, "scopes": ["source.abl", "support.function.abl"] },  // 'GENERATE-PASSWORD-HASH'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 25, "endIndex": 33, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'secretPw'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl", "comment.block.abl"] },  // '/*'
    { "startIndex": 37, "endIndex": 54, "scopes": ["source.abl", "comment.block.abl", "comment"] },  // 'not good practice'
    { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "comment.block.abl"] },  // '*/'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `GENERATE-salt().`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "support.function.abl"] },  // 'GENERATE-salt'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `GENERATE-SALT(256).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "support.function.abl"] },  // 'GENERATE-SALT'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 14, "endIndex": 17, "scopes": ["source.abl", "constant.numeric.abl"] },  // '256'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `GENERATE-SALT(iSize).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "support.function.abl"] },  // 'GENERATE-SALT'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "variable.other.abl"] },  // 'iSize'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `rSalt = GENERATE-SALT(obj:DefaultSaltSize).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "variable.other.abl"] },  // 'rSalt'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 21, "scopes": ["source.abl", "support.function.abl"] },  // 'GENERATE-SALT'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 22, "endIndex": 25, "scopes": ["source.abl", "variable.other.abl"] },  // 'obj'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
    { "startIndex": 26, "endIndex": 41, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'DefaultSaltSize'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
