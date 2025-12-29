const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  //label-with-a-dot-inside.spec
  let statement = `
DO mI = 1 TO 3 on error undo, throw:
    /* comment */
END.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'DO'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 5, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'mI'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'TO'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '3'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'on'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 23, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'error'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 28, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'undo'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.block.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 35, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'throw'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 6, "endIndex": 15, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' comment '
      { "startIndex": 15, "endIndex": 17, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if plcSerializable begins "~{":U then do on error undo, throw:
END.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 18, "scopes": ["source.abl", "variable.other.abl"] },  // 'plcSerializable'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 25, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'begins'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~{'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 30, "endIndex": 32, "scopes": ["source.abl", "string.quoted.double.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 37, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 40, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 43, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'on'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 49, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'error'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 54, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'undo'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.block.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 61, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'throw'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `/* Bug 12345
  asagfagsd   */
do &if "{&CATCH-STOP}" eq "" &then on stop undo, return error new StopConditionException
  (substitute( "A stop condition raised while waiting for the backend.~nComp: &1"{&TRAN},
              pcEntityName),
    0) &endif :

   run goo.p.
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "comment.block.source.abl", "comment"] }  // ' Bug 12345'
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // '  asagfagsd   '
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.block.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "meta.block.abl", "keyword.control.directive.conditional.abl"] },  // 'if'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 8, "endIndex": 21, "scopes": ["source.abl", "meta.block.abl", "string.quoted.double.abl"] },  // '{&CATCH-STOP}'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.block.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 25, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // 'eq'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.block.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.block.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.block.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 30, "endIndex": 34, "scopes": ["source.abl", "meta.block.abl", "keyword.control.directive.conditional.abl"] },  // 'then'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 37, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'on'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 42, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'stop'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 43, "endIndex": 47, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'undo'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.block.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 49, "endIndex": 55, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'return'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 61, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'error'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 62, "endIndex": 65, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'new'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 66, "endIndex": 88, "scopes": ["source.abl", "meta.block.abl", "entity.name.type.abl"] }  // 'StopConditionException'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 3, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'substitute'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 16, "endIndex": 70, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'A stop condition raised while waiting for the backend.'
      { "startIndex": 70, "endIndex": 72, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "constant.character.escape.abl"] },  // '~n'
      { "startIndex": 72, "endIndex": 80, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'Comp: &1'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 82, "endIndex": 83, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 83, "endIndex": 87, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'TRAN'
      { "startIndex": 87, "endIndex": 88, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
      { "startIndex": 88, "endIndex": 89, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // '              '
      { "startIndex": 14, "endIndex": 26, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'pcEntityName'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.block.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '0'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.block.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "keyword.control.directive.conditional.abl"] },  // 'endif'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
      { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'goo.p'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `do vI = 1 to num-entries(vList):
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 5, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'vI'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'to'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 24, "scopes": ["source.abl", "meta.block.abl", "meta.function-call.abl", "support.function.abl"] },  // 'num-entries'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.block.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 25, "endIndex": 30, "scopes": ["source.abl", "meta.block.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'vList'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.block.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `do vI = 1 to objRef:MethodCalledNumEntries(vList):
  run ip_thing.
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 5, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'vI'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'to'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 19, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'objRef'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 20, "endIndex": 42, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'MethodCalledNumEntries'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 43, "endIndex": 48, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'vList'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 14, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'ip_thing'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `do vIndex = 1 to ttFoo.MaximumValue:
  end. /* */`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 9, "scopes": ["source.abl", "meta.block.abl", "variable.other.abl"] },  // 'vIndex'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.block.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "constant.numeric.source.abl"] },  // '1'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'to'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 35, "scopes": ["source.abl", "meta.block.abl", "storage.data.table.abl"] },  // 'ttFoo.MaximumValue'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // ' '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "comment.block.source.abl"] }  // '*/'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})