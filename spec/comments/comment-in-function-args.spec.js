const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `run getOEM( host, port, metricPath, "" /* cred */, opts, output xStatus, output result ).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.other.procedure.abl"] },  // 'getOEM'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'host'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'port'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'metricPath'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function.arguments.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 41, "scopes": ["source.abl", "meta.function.arguments.abl", "comment.block.source.abl"] },  // '/*'
    { "startIndex": 41, "endIndex": 47, "scopes": ["source.abl", "meta.function.arguments.abl", "comment.block.source.abl", "comment"] },  // ' cred '
    { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl", "meta.function.arguments.abl", "comment.block.source.abl"] },  // '*/'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 51, "endIndex": 55, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'opts'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 57, "endIndex": 63, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'output'
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 64, "endIndex": 71, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'xStatus'
    { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 73, "endIndex": 79, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'output'
    { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 80, "endIndex": 86, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'result'
    { "startIndex": 86, "endIndex": 87, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 87, "endIndex": 88, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 88, "endIndex": 89, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
