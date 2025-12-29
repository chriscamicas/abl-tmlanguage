const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `'    <INPUT TYPE = "HIDDEN" name=DVWebKey value="'  GET-VALUE("DVWebKey":U) '">~n'`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 1, "endIndex": 49, "scopes": ["source.abl", "string.quoted.single.abl"] },  // '    <INPUT TYPE = "HIDDEN" name=DVWebKey value="'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl"] },  // '  '
    { "startIndex": 52, "endIndex": 61, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'GET-VALUE'
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 63, "endIndex": 71, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'DVWebKey'
    { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 72, "endIndex": 74, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "support.other.abl"] },  // ':U'
    { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 77, "endIndex": 79, "scopes": ["source.abl", "string.quoted.single.abl"] },  // '">'
    { "startIndex": 79, "endIndex": 81, "scopes": ["source.abl", "string.quoted.single.abl", "constant.character.escape.abl"] },  // '~n'
    { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] }  // '''
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})



describe('', () => {
  let statement = `'    <INPUT TYPE = "HIDDEN" name=DVWebKey value="'  SET-VALUE("DVWebKey":U) '">~n'`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 1, "endIndex": 49, "scopes": ["source.abl", "string.quoted.single.abl"] },  // '    <INPUT TYPE = "HIDDEN" name=DVWebKey value="'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl"] },  // '  '
    { "startIndex": 52, "endIndex": 61, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'SET-VALUE'
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 63, "endIndex": 71, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'DVWebKey'
    { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 72, "endIndex": 74, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "support.other.abl"] },  // ':U'
    { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 77, "endIndex": 79, "scopes": ["source.abl", "string.quoted.single.abl"] },  // '">'
    { "startIndex": 79, "endIndex": 81, "scopes": ["source.abl", "string.quoted.single.abl", "constant.character.escape.abl"] },  // '~n'
    { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] }  // '''
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
