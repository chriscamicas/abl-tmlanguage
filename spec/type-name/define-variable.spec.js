const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
    let statement = `define variable xxx as foo.bar.baz no-undo.`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
        { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'variable'
        { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },  // 'xxx'
        { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'as'
        { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 23, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
        { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 35, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'no-undo'
        { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'

    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `define variable xxx as class foo.bar.baz no-undo.`;

    let expectedTokens = [{ "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'variable'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },  // 'xxx'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'as'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'class'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'no-undo'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "punctuation.terminator.abl"] } // '.'
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `define variable xxx as class foo.bar.baz no-undo extent.`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
        { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'variable'
        { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },  // 'xxx'
        { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'as'
        { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'class'
        { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
        { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'no-undo'
        { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 49, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'extent'
        { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'              
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `define variable xxx as class foo.bar.baz no-undo extent .`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
        { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'variable'
        { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },  // 'xxx'
        { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'as'
        { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'class'
        { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
        { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 41, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'no-undo'
        { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 49, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'extent'
        { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'        
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `define variable xxx as class foo.bar.baz  extent 14 no-undo.`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
        { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'variable'
        { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 16, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },  // 'xxx'
        { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'as'
        { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'class'
        { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 29, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
        { "startIndex": 40, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // '  '
        { "startIndex": 42, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'extent'
        { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "constant.numeric.source.abl"] },  // '14'
        { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 52, "endIndex": 59, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'no-undo'
        { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'        
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
        { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 41, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'variable'
        { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },  // 'xxx'
        { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'as'
        { "startIndex": 56, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // '  '
        { "startIndex": 58, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
        { "startIndex": 69, "endIndex": 71, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // '  '
        { "startIndex": 71, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] }  // 'no-undo'        
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})



describe('', () => {
    let statement = `define static package-protected abstract variable When as datetime-tz initial now no-undo`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
        { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'static'
        { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
        { "startIndex": 14, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'package-protected'
        { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
        { "startIndex": 32, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'abstract'
        { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 41, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'variable'
        { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 50, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },  // 'When'
        { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 55, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'as'
        { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 58, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },  // 'datetime-tz'
        { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 70, "endIndex": 77, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'initial'
        { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 78, "endIndex": 81, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "constant.language.abl"] },  // 'now'
        { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 82, "endIndex": 89, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] }  // 'no-undo'        
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `define variable ListString as Progress.Collections.List<String> no-undo`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
        { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
        { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'static'
        { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
        { "startIndex": 14, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'package-protected'
        { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
        { "startIndex": 32, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'abstract'
        { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 41, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'variable'
        { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 50, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },  // 'When'
        { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 55, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'as'
        { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 58, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },  // 'datetime-tz'
        { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 70, "endIndex": 77, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'initial'
        { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 78, "endIndex": 81, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "constant.language.abl"] },  // 'now'
        { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
        { "startIndex": 82, "endIndex": 89, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] }  // 'no-undo'        
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define variable strList as Progress.Collections.List<String> no-undo.
  define variable strList2 as Progress.Collections.List<String> no-undo.`;

  let expectedTokens = [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'static'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'package-protected'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'abstract'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.other.abl"] },  // 'When'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
      { "startIndex": 55, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
      { "startIndex": 58, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },  // 'datetime-tz'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
      { "startIndex": 70, "endIndex": 77, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },  // 'initial'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
      { "startIndex": 78, "endIndex": 81, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "constant.language.abl"] },  // 'now'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },  // ' '
      { "startIndex": 82, "endIndex": 89, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] }  // 'no-undo'        
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

