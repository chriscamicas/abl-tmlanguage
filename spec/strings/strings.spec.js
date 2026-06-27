const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `substitute ("Unable to start Business Entity: &1"{&TRAN}, quoter (pcEntityName))`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "support.function.abl"] },  // 'substitute'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 13, "endIndex": 48, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'Unable to start Business Entity: &1'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 51, "endIndex": 55, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'TRAN'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 58, "endIndex": 64, "scopes": ["source.abl", "support.function.abl"] },  // 'quoter'
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
    { "startIndex": 66, "endIndex": 78, "scopes": ["source.abl", "variable.other.abl"] },  // 'pcEntityName'
    { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
    { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl", "meta.brace.round.abl"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})