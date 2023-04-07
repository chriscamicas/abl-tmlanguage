const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `method public void MethodA():
  message "a method".
end method.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 26, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'MethodA'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 28, "endIndex": 30, "scopes": ["source.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 19, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'a method'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `method public JsonArray MethodA(pcString as character extent, po as Object):
  message "a method".
end method.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 23, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.abl"] },  // 'JsonArray'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 31, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'MethodA'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 32, "endIndex": 40, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'pcString'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 43, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'character'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 60, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'extent'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 62, "endIndex": 64, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 67, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 68, "endIndex": 74, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'Object'
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 75, "endIndex": 77, "scopes": ["source.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 11, "endIndex": 19, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'a method'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `method public static logical extent 12 MethodQ( po as List<Package.Thing>,
                                                    buffer pb for TableName,
                                                    input-output dataset dsData):
    define variable log1 as logical.

    message "a method".
end method.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 20, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'static'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 28, "scopes": ["source.abl", "meta.define.method.abl", "storage.type.abl"] },  // 'logical'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 35, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'extent'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 38, "scopes": ["source.abl", "meta.define.method.abl", "constant.numeric.source.abl"] },  // '12'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 46, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'MethodQ'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 48, "endIndex": 50, "scopes": ["source.abl", "meta.define.method.abl", "variable.parameter.abl"] },  // 'po'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 58, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'List'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.generic.abl"] },  // '<'
      { "startIndex": 59, "endIndex": 72, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.generic.abl", "entity.name.type.abl"] },  // 'Package.Thing'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.type.generic.abl"] },  // '>'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 52, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                                    '
      { "startIndex": 52, "endIndex": 58, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'buffer'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 59, "endIndex": 61, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.table.abl"] },  // 'pb'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 62, "endIndex": 65, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 66, "endIndex": 75, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.table.abl"] },  // 'TableName'
      { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.define.method.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 52, "scopes": ["source.abl", "meta.define.method.abl"] },  // '                                                    '
      { "startIndex": 52, "endIndex": 64, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input-output'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 65, "endIndex": 72, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'dataset'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 73, "endIndex": 79, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.table.abl"] },  // 'dsData'
      { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 80, "endIndex": 82, "scopes": ["source.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'variable'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'log1'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'logical'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'message'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 13, "endIndex": 21, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'a method'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
