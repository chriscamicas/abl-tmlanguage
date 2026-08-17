const { assert, expect } = require('chai');
const shared = require('../shared.js');

// Regression tests for https://github.com/chriscamicas/abl-tmlanguage/commit/282d6de
// Before the fix, the include-file "begin" pattern used a single character class
// (`[\\\/\w$\-\.]+`) for the filename regardless of whether it was quoted, so a
// space inside a quoted include file name would end the entity.name.include.abl
// token early, leave the rest of the name/spaces to be re-tokenized as arguments,
// and make the grammar treat the closing quote as the start of a new (unterminated)
// string that swallowed the rest of the line, including the closing '}'.
//
// The fix splits the pattern into two alternatives: a quoted filename that matches
// any non-quote character (so spaces are allowed) and an unquoted filename that
// keeps the original restricted character class.

describe('', () => {
  let statement = `{"my file.i"}`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 2, "endIndex": 11, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] },  // 'my file.i'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.include.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `{"my file.i" &DEBUG=TRUE}`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 2, "endIndex": 11, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] },  // 'my file.i'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.include.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 19, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&DEBUG'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.abl"] },  // '='
    { "startIndex": 20, "endIndex": 24, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] },  // 'TRUE'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('multiple spaces inside a quoted filename', () => {
  let statement = `{"path with  two spaces.i"}`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 2, "endIndex": 25, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] },  // 'path with  two spaces.i'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.include.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('quoted filename with a relative path and a space', () => {
  let statement = `{"rel path/my file.i"}`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 2, "endIndex": 20, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] },  // 'rel path/my file.i'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.include.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
