const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `&if defined(OpenEdge_12_8) gt 0 &then
                                                                    TokenResolver:Resolve("integrate-$~{t.YMD}-$~{t.HMS}.csv"))
&else
                                                                    TokenResolver:Resolve("integrate-$~{T.YYYY}$~{T.MM}$~{T.DD}-$~{T.HH}$~{T.MMM}$~{T.SS}.csv"))
&endif`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 1, "endIndex": 3, "scopes": ["source.abl", "keyword.control.directive.conditional.abl"] },  // 'if'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "storage.type.function.abl"] },  // 'defined'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 12, "endIndex": 25, "scopes": ["source.abl", "entity.name.function.preprocessor.abl"] },  // 'OpenEdge_12_8'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'gt'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '0'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 33, "endIndex": 37, "scopes": ["source.abl", "keyword.control.directive.conditional.abl"] }  // 'then'
    ],
    [
      { "startIndex": 0, "endIndex": 68, "scopes": ["source.abl"] },  // '                                                                    '
      { "startIndex": 68, "endIndex": 81, "scopes": ["source.abl", "variable.other.abl"] },  // 'TokenResolver'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 82, "endIndex": 89, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Resolve'
      { "startIndex": 89, "endIndex": 90, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 90, "endIndex": 91, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 91, "endIndex": 102, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'integrate-$'
      { "startIndex": 102, "endIndex": 104, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 104, "endIndex": 112, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 't.YMD}-$'
      { "startIndex": 112, "endIndex": 114, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 114, "endIndex": 124, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 't.HMS}.csv'
      { "startIndex": 124, "endIndex": 125, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 125, "endIndex": 126, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 126, "endIndex": 127, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 1, "endIndex": 5, "scopes": ["source.abl", "keyword.control.directive.conditional.abl"] }  // 'else'
    ],
    [
      { "startIndex": 0, "endIndex": 68, "scopes": ["source.abl"] },  // '                                                                    '
      { "startIndex": 68, "endIndex": 81, "scopes": ["source.abl", "variable.other.abl"] },  // 'TokenResolver'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 82, "endIndex": 89, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Resolve'
      { "startIndex": 89, "endIndex": 90, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 90, "endIndex": 91, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 91, "endIndex": 102, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'integrate-$'
      { "startIndex": 102, "endIndex": 104, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 104, "endIndex": 112, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'T.YYYY}$'
      { "startIndex": 112, "endIndex": 114, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 114, "endIndex": 120, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'T.MM}$'
      { "startIndex": 120, "endIndex": 122, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 122, "endIndex": 129, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'T.DD}-$'
      { "startIndex": 129, "endIndex": 131, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 131, "endIndex": 137, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'T.HH}$'
      { "startIndex": 137, "endIndex": 139, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 139, "endIndex": 146, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'T.MMM}$'
      { "startIndex": 146, "endIndex": 148, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 148, "endIndex": 157, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'T.SS}.csv'
      { "startIndex": 157, "endIndex": 158, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 158, "endIndex": 159, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 159, "endIndex": 160, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 1, "endIndex": 6, "scopes": ["source.abl", "keyword.control.directive.conditional.abl"] }  // 'endif'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
