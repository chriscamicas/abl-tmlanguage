const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `FUNCTION operationName logical:
end function.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'FUNCTION'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'operationName'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.define.function.abl", "storage.type.abl"] },  // 'logical'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'function'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FUNCTION operationName RETURNS logical  ( p1 as char, output p4 as char extent 4 )  IN hPortType .
end.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'FUNCTION'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'operationName'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'RETURNS'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 38, "scopes": ["source.abl", "meta.define.function.abl", "storage.type.abl"] },  // 'logical'
      { "startIndex": 38, "endIndex": 40, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // '('
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "variable.parameter.abl"] },  // 'p1'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 45, "endIndex": 47, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'as'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 48, "endIndex": 52, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "storage.type.abl"] },  // 'char'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 54, "endIndex": 60, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'output'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 61, "endIndex": 63, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "variable.parameter.abl"] },  // 'p4'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 64, "endIndex": 66, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'as'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 67, "endIndex": 71, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "storage.type.abl"] },  // 'char'
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 72, "endIndex": 78, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'extent'
      { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "constant.numeric.source.abl"] },  // '4'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // ')'
      { "startIndex": 82, "endIndex": 84, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
      { "startIndex": 84, "endIndex": 86, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'IN'
      { "startIndex": 86, "endIndex": 87, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 87, "endIndex": 96, "scopes": ["source.abl", "meta.define.function.abl", "variable.other.abl"] },  // 'hPortType'
      { "startIndex": 96, "endIndex": 97, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 97, "endIndex": 98, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FUNCTION operationName  logical IN hPortType .
end.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'FUNCTION'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'operationName'
      { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
      { "startIndex": 24, "endIndex": 31, "scopes": ["source.abl", "meta.define.function.abl", "storage.type.abl"] },  // 'logical'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'IN'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 44, "scopes": ["source.abl", "meta.define.function.abl", "variable.other.abl"] },  // 'hPortType'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `// scope (function): variable.other.abl source.abl
function DoTheThing returns character
    (
    ):

end function.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 50, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// scope (function): variable.other.abl source.abl'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'function'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 19, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'DoTheThing'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 27, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'returns'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.define.function.abl", "storage.type.abl"] }  // 'character'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.function.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] }  // '('
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // ')'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'function'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `function DoTheThing returns Progress.Lang.Object extent 3 ( ):
end function.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'function'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 19, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'DoTheThing'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 27, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'returns'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 48, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Object'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 49, "endIndex": 55, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'extent'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.type.abl"] },  // '3'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // '('
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // ')'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] },  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'function'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `function NoThing returns class String ( ):
end function.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'function'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 16, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'NoThing'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 24, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'returns'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 30, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'class'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 37, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.type.abl"] },  // 'String'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // '('
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // ')'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'function'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `function NoThing returns String ( ):
end function.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'function'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 16, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'NoThing'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 24, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'returns'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 31, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.type.abl"] },  // 'String'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // '('
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // ')'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'function'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FUNCTION 4gl-encode RETURNS CHARACTER (INPUT p_string AS CHAR) :
  RETURN
                p_string .
END FUNCTION.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'FUNCTION'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 19, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // '4gl-encode'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 27, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'RETURNS'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.define.function.abl", "storage.type.abl"] },  // 'CHARACTER'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // '('
      { "startIndex": 39, "endIndex": 44, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'INPUT'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 45, "endIndex": 53, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "variable.parameter.abl"] },  // 'p_string'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 54, "endIndex": 56, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 57, "endIndex": 61, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "storage.type.abl"] },  // 'CHAR'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // ')'
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] }  // 'RETURN'
    ],
    [
      { "startIndex": 0, "endIndex": 16, "scopes": ["source.abl"] },  // '                '
      { "startIndex": 16, "endIndex": 24, "scopes": ["source.abl", "variable.other.abl"] },  // 'p_string'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FUNCTION'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FUNCTION getAppService RETURNS CHARACTER IN SUPER.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'FUNCTION'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'getAppService'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'RETURNS'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 40, "scopes": ["source.abl", "meta.define.function.abl", "storage.type.abl"] },  // 'CHARACTER'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 43, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'IN'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 44, "endIndex": 49, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'SUPER'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FUNCTION runServerProcedure RETURNS HANDLE
  (INPUT pcServerFileName AS CHARACTER,
   INPUT phAppService AS HANDLE) IN SUPER.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'FUNCTION'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 27, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'runServerProcedure'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 35, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'RETURNS'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 42, "scopes": ["source.abl", "meta.define.function.abl", "storage.type.abl"] }  // 'HANDLE'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // '('
      { "startIndex": 3, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'INPUT'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 9, "endIndex": 25, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "variable.parameter.abl"] },  // 'pcServerFileName'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 29, "endIndex": 38, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "storage.type.abl"] },  // 'CHARACTER'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // '   '
      { "startIndex": 3, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'INPUT'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 9, "endIndex": 21, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "variable.parameter.abl"] },  // 'phAppService'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "keyword.other.abl"] },  // 'AS'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters"] },  // ' '
      { "startIndex": 25, "endIndex": 31, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "storage.type.abl"] },  // 'HANDLE'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.function.abl", "meta.function.parameters", "meta.brace.round.js"] },  // ')'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 35, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'IN'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 41, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'SUPER'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FUNCTION getAppService RETURNS CHARACTER IN SUPER.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'FUNCTION'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'getAppService'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'RETURNS'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 40, "scopes": ["source.abl", "meta.define.function.abl", "storage.type.abl"] },  // 'CHARACTER'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 43, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'IN'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 44, "endIndex": 49, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'SUPER'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FUNCTION operationName  logical  MAP TO actual-name IN proc-handle  .`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'FUNCTION'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'operationName'
    { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
    { "startIndex": 24, "endIndex": 31, "scopes": ["source.abl", "meta.define.function.abl", "storage.type.abl"] },  // 'logical'
    { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
    { "startIndex": 33, "endIndex": 36, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'MAP'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 39, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'TO'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 40, "endIndex": 51, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'actual-name'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 52, "endIndex": 54, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'IN'
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 55, "endIndex": 66, "scopes": ["source.abl", "meta.define.function.abl", "variable.other.abl"] },  // 'proc-handle'
    { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FUNCTION operationName  logical  MAP actual-name IN proc-handle  .`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'FUNCTION'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'operationName'
    { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
    { "startIndex": 24, "endIndex": 31, "scopes": ["source.abl", "meta.define.function.abl", "storage.type.abl"] },  // 'logical'
    { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
    { "startIndex": 33, "endIndex": 36, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'MAP'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 48, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'actual-name'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'IN'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 52, "endIndex": 63, "scopes": ["source.abl", "meta.define.function.abl", "variable.other.abl"] },  // 'proc-handle'
    { "startIndex": 63, "endIndex": 65, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `FUNCTION operationName  logical  MAP actual-name IN obJRef:Property  .`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'FUNCTION'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 22, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'operationName'
    { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
    { "startIndex": 24, "endIndex": 31, "scopes": ["source.abl", "meta.define.function.abl", "storage.type.abl"] },  // 'logical'
    { "startIndex": 31, "endIndex": 33, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
    { "startIndex": 33, "endIndex": 36, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'MAP'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 48, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'actual-name'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.define.function.abl", "keyword.other.abl"] },  // 'IN'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.function.abl"] },  // ' '
    { "startIndex": 52, "endIndex": 58, "scopes": ["source.abl", "meta.define.function.abl", "variable.other.abl"] },  // 'obJRef'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 59, "endIndex": 67, "scopes": ["source.abl", "meta.define.function.abl", "entity.name.function.abl"] },  // 'Property'
    { "startIndex": 67, "endIndex": 69, "scopes": ["source.abl", "meta.define.function.abl"] },  // '  '
    { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.function.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})