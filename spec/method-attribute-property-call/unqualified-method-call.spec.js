const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `cParameterField = SUBST("&1&2", LOWER(SUBSTRING(ttUniqueIndex.FieldDataType, 1, 1)), CamelCase(ttUniqueIndex.IndexField)).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 15, "scopes": ["source.abl", "variable.other.abl"] },  // 'cParameterField'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'SUBST'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 25, "endIndex": 29, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl"] },  // '&1&2'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'LOWER'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 38, "endIndex": 47, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'SUBSTRING'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 48, "endIndex": 75, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'ttUniqueIndex.FieldDataType'
    { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '1'
    { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '1'
    { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 82, "endIndex": 83, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 83, "endIndex": 84, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 84, "endIndex": 85, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 85, "endIndex": 94, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'CamelCase'
    { "startIndex": 94, "endIndex": 95, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 95, "endIndex": 119, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'ttUniqueIndex.IndexField'
    { "startIndex": 119, "endIndex": 120, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 120, "endIndex": 121, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 121, "endIndex": 122, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

