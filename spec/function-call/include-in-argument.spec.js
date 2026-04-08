const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `c1 = substitute("&1", {translate.i
                        &scope="'ScopeKey':u"
                        &key="'Translation_string_Key':u"}
               ).

dt1 = now.
message 1234.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "variable.other.abl"] },  // 'c1'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 15, "scopes": ["source.abl", "support.function.abl"] },  // 'substitute'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // '&1'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 23, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "entity.name.include.abl"] }  // 'translate.i'
    ],
    [
      { "startIndex": 0, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl"] },  // '                        '
      { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&scope'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 32, "endIndex": 44, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "string.quoted.double.abl"] },  // ''ScopeKey':u'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl"] },  // '                        '
      { "startIndex": 24, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&key'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 30, "endIndex": 56, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "string.quoted.double.abl"] },  // ''Translation_string_Key':u'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
    ],
    [
      { "startIndex": 0, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '               '
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "variable.other.abl"] },  // 'dt1'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl", "support.function.abl"] },  // 'now'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 12, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '1234'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `c1 = {translate.i
                        &scope="'ScopeKey':u"
                        &key="'Translation_string_Key':u"}.
dt1 = now.
message 1234.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "variable.other.abl"] },  // 'c1'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] }  // 'translate.i'
    ],
    [
      { "startIndex": 0, "endIndex": 24, "scopes": ["source.abl", "meta.include.abl"] },  // '                        '
      { "startIndex": 24, "endIndex": 30, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&scope'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.include.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 32, "endIndex": 44, "scopes": ["source.abl", "meta.include.abl", "string.quoted.double.abl"] },  // ''ScopeKey':u'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.include.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 24, "scopes": ["source.abl", "meta.include.abl"] },  // '                        '
      { "startIndex": 24, "endIndex": 28, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&key'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.include.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 30, "endIndex": 56, "scopes": ["source.abl", "meta.include.abl", "string.quoted.double.abl"] },  // ''Translation_string_Key':u'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.include.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '}'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "variable.other.abl"] },  // 'dt1'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl", "support.function.abl"] },  // 'now'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 12, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '1234'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
