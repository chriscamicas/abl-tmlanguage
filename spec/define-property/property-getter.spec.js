const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `    /** Trims whitespace off the contained string */
  method public void Trim():
      /* we can't use the ABL TRIM keyword, since we run into
         name conflicts, so do a left- and right-trim instead. */
      assign mUTF8Value = right-trim(left-trim(mUTF8Value)).
  end method.
`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "comment.block.abl"] },  // '/*'
      { "startIndex": 6, "endIndex": 50, "scopes": ["source.abl", "comment.block.abl", "comment"] },  // '* Trims whitespace off the contained string '
      { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "comment.block.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.method.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 15, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 20, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 25, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'Trim'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "comment.block.abl"] },  // '/*'
      { "startIndex": 8, "endIndex": 62, "scopes": ["source.abl", "comment.block.abl", "comment"] }  // ' we can't use the ABL TRIM keyword, since we run into'
    ],
    [
      { "startIndex": 0, "endIndex": 63, "scopes": ["source.abl", "comment.block.abl", "comment"] },  // '         name conflicts, so do a left- and right-trim instead. '
      { "startIndex": 63, "endIndex": 65, "scopes": ["source.abl", "comment.block.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 23, "scopes": ["source.abl", "variable.other.abl"] },  // 'mUTF8Value'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 36, "scopes": ["source.abl", "support.function.abl"] },  // 'right-trim'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 37, "endIndex": 46, "scopes": ["source.abl", "support.function.abl"] },  // 'left-trim'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 47, "endIndex": 57, "scopes": ["source.abl", "variable.other.abl"] },  // 'mUTF8Value'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `    /** Host name of the interface on which the request was received */
    DEFINE PUBLIC PROPERTY LocalHost AS CHARACTER NO-UNDO
        GET():
            RETURN GetCGIValue("ENV":U, "LOCAL_NAME":U).
        END GET.
        SET.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "comment.block.abl"] },  // '/*'
      { "startIndex": 6, "endIndex": 69, "scopes": ["source.abl", "comment.block.abl", "comment"] },  // '* Host name of the interface on which the request was received '
      { "startIndex": 69, "endIndex": 71, "scopes": ["source.abl", "comment.block.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'PUBLIC'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'PROPERTY'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'LocalHost'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'CHARACTER'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'NO-UNDO'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'GET'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "support.function.abl"] },  // 'RETURN'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'GetCGIValue'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 32, "endIndex": 35, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'ENV'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 36, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 41, "endIndex": 51, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl"] },  // 'LOCAL_NAME'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 52, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "string.quoted.double.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'GET'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SET'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `    DEFINE PROTECTED PROPERTY PrincipalType AS CHARACTER NO-UNDO
    GET:
        IF VALID-OBJECT (oAuthorizationService) THEN
            RETURN oAuthorizationService:PrincipalType.
    END GET.
    SET(arg AS CHARACTER):
        IF VALID-OBJECT (oAuthorizationService) THEN
            oAuthorizationService:PrincipalType = arg.
    END SET.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'DEFINE'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'PROTECTED'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'PROPERTY'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'PrincipalType'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 47, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'CHARACTER'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 57, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'NO-UNDO'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'GET'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'IF'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "support.function.abl"] },  // 'VALID-OBJECT'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 25, "endIndex": 46, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'oAuthorizationService'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 48, "endIndex": 52, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'THEN'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "support.function.abl"] },  // 'RETURN'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'oAuthorizationService'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 41, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl", "entity.name.function.abl"] },  // 'PrincipalType'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'GET'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SET'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "variable.parameter.abl"] },  // 'arg'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 24, "scopes": ["source.abl", "storage.type.abl"] },  // 'CHARACTER'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'IF'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 23, "scopes": ["source.abl", "support.function.abl"] },  // 'VALID-OBJECT'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.brace.round.abl"] },  // '('
      { "startIndex": 25, "endIndex": 46, "scopes": ["source.abl", "variable.other.abl"] },  // 'oAuthorizationService'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.brace.round.abl"] },  // ')'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 48, "endIndex": 52, "scopes": ["source.abl", "keyword.other.abl"] }  // 'THEN'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 33, "scopes": ["source.abl", "variable.other.abl"] },  // 'oAuthorizationService'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.accessor.abl"] },  // ':'
      { "startIndex": 34, "endIndex": 47, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'PrincipalType'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "keyword.operator.abl"] },  // '='
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "variable.other.abl"] },  // 'arg'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SET'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})