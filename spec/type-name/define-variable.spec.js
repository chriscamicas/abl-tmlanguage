const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
  let statement = `define variable xxx as foo.bar.baz no-undo.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'xxx'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 35, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable xxx as class foo.bar.baz no-undo.`;

  let expectedTokens = [{ "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
  { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
  { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
  { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
  { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'xxx'
  { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
  { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
  { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
  { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
  { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
  { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
  { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
  { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
  { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] } // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable xxx as class foo.bar.baz no-undo extent.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'xxx'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'              
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable xxx as class foo.bar.baz no-undo extent .`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'xxx'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'        
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable xxx as class foo.bar.baz  extent 14 no-undo.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'xxx'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 42, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'extent'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '14'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 52, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'        
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define static package-protected abstract variable xxx as  foo.bar.baz  no-undo`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'static'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'package-protected'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'abstract'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'xxx'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 56, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 58, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 69, "endIndex": 71, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 71, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'        
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})



describe('', () => {
  let statement = `define static package-protected abstract variable When as datetime-tz initial now no-undo
  . //end on a different line`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'static'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'package-protected'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'abstract'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'When'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 55, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 58, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'datetime-tz'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 70, "endIndex": 77, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'initial'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 78, "endIndex": 81, "scopes": ["source.abl", "meta.define.abl", "constant.language.abl"] },  // 'now'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 82, "endIndex": 89, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 29, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '//end on a different line'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable ListString as Progress.Collections.List<String> no-undo`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'ListString'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'Progress.Collections.List'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '<'
    { "startIndex": 56, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'String'
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '> '
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 64, "endIndex": 71, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'no-undo'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable strList as Progress.Collections.List<String> no-undo.
  define variable strList2 as Progress.Collections.List<String> no-undo.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'strList'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'Progress.Collections.List'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '<'
      { "startIndex": 53, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'String'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '>'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl"] },  // ' '      
      { "startIndex": 61, "endIndex": 68, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'strList2'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'Progress.Collections.List'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '<'
      { "startIndex": 56, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'String'
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '> '
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 64, "endIndex": 71, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable strList as class Progress.Collections.List<String> no-undo.
  define variable strList2 as class Progress.Collections.List<String> no-undo.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'strList'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'Progress.Collections.List'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '<'
      { "startIndex": 59, "endIndex": 65, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'String'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '>'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.define.abl"] },  // ' '      
      { "startIndex": 67, "endIndex": 74, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'strList2'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 61, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'Progress.Collections.List'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '<'
      { "startIndex": 62, "endIndex": 68, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'String'
      { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '>'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl"] },  // ' '      
      { "startIndex": 70, "endIndex": 77, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable strList as Franwork.List<String> no-undo.
  define variable strList2 as List<String> no-undo.
  define variable cls as Progress.Lang.Class no-undo.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'strList'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'Franwork.List'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '<'
      { "startIndex": 41, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'String'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '>'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 49, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'strList2'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'List'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '<'
      { "startIndex": 35, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'String'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '>'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '      
      { "startIndex": 43, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'cls'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Class'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable strList as class Franwork.List<String> no-undo.
  define variable strList2 as class List<String> no-undo.
  define variable cls as class Progress.Lang.Class no-undo.
  `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'strList'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'Franwork.List'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '<'
      { "startIndex": 47, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'String'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '>'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 55, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'strList2'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'List'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '<'
      { "startIndex": 41, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'String'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.generic.abl"] },  // '>'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 49, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'cls'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'class'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Class'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] }  // '  '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `define variable dTaxRate as decimal decimals 4 no-undo.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'dTaxRate'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'decimal'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'decimals'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '4'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 47, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable dTaxRate as decimal decimals 4  . `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'dTaxRate'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'decimal'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'decimals'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '4'
    { "startIndex": 46, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl"] }  // ' '    
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable dTaxRate as decimal no-undo decimals 4  . `;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'dTaxRate'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'decimal'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 44, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'decimals'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "constant.numeric.source.abl"] },  // '4'
    { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl"] },  // '  '
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 57, "endIndex": 59, "scopes": ["source.abl"] }  // ' '    
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})