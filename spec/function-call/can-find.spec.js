const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `IF NOT CAN-FIND(InstanceChildren WHERE InstanceChildren.contPath         = pcPath      AND
    InstanceChildren.contName         = pcFile      AND
  InstanceChildren.parentInstanceID = Instance.ID AND
  InstanceChildren.ID               = cField) THEN DO: end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'IF'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'NOT'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "support.function.abl"] },  // 'CAN-FIND'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 16, "endIndex": 32, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'InstanceChildren'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 38, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WHERE'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 64, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'InstanceChildren.contPath'
      { "startIndex": 64, "endIndex": 73, "scopes": ["source.abl"] },  // '         '
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 75, "endIndex": 81, "scopes": ["source.abl", "variable.other.abl"] },  // 'pcPath'
      { "startIndex": 81, "endIndex": 87, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 87, "endIndex": 90, "scopes": ["source.abl", "keyword.other.abl"] }  // 'AND'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 29, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'InstanceChildren.contName'
      { "startIndex": 29, "endIndex": 38, "scopes": ["source.abl"] },  // '         '
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 46, "scopes": ["source.abl", "variable.other.abl"] },  // 'pcFile'
      { "startIndex": 46, "endIndex": 52, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 52, "endIndex": 55, "scopes": ["source.abl", "keyword.other.abl"] }  // 'AND'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 35, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'InstanceChildren.parentInstanceID'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 49, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'Instance.ID'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 53, "scopes": ["source.abl", "keyword.other.abl"] }  // 'AND'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 21, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'InstanceChildren.ID'
      { "startIndex": 21, "endIndex": 36, "scopes": ["source.abl"] },  // '               '
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 44, "scopes": ["source.abl", "variable.other.abl"] },  // 'cField'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 50, "scopes": ["source.abl", "keyword.other.abl"] },  // 'THEN'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 53, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'DO'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // ':'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 55, "endIndex": 58, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `any_trig = (IF CAN-FIND(FIRST dictdb._Field-trig OF bField) THEN yes else no).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "variable.other.abl"] },  // 'any_trig'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'IF'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 23, "scopes": ["source.abl", "meta.function.arguments.abl", "support.function.abl"] },  // 'CAN-FIND'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 24, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'FIRST'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 48, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'dictdb._Field-trig'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'OF'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 52, "endIndex": 58, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'bField'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 60, "endIndex": 64, "scopes": ["source.abl", "keyword.other.abl"] },  // 'THEN'
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 65, "endIndex": 68, "scopes": ["source.abl", "constant.language.abl"] },  // 'yes'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 69, "endIndex": 73, "scopes": ["source.abl", "keyword.other.abl"] },  // 'else'
    { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 74, "endIndex": 76, "scopes": ["source.abl", "constant.language.abl"] },  // 'no'
    { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `STRING(CAN-FIND(FIRST DICTDB._Index-field OF DICTDB._Field),"y/n":u)`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'STRING'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "support.function.abl"] },  // 'CAN-FIND'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'FIRST'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 22, "endIndex": 41, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'DICTDB._Index-field'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'OF'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 45, "endIndex": 58, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'DICTDB._Field'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 61, "endIndex": 64, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'y/n'
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 65, "endIndex": 67, "scopes": ["source.abl", "string.double.complex.abl", "support.other.abl"] },  // ':u'
    { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `if can-find(customer 2) then. `;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 11, "scopes": ["source.abl", "support.function.abl"] },  // 'can-find'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 12, "endIndex": 20, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '2'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
  let statement = `if can-find(department "100") then. `;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 11, "scopes": ["source.abl", "support.function.abl"] },  // 'can-find'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 12, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'department'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 24, "endIndex": 27, "scopes": ["source.abl", "string.double.complex.abl"] },  // '100'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 34, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'then'
    { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl"] }  // '. '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if can-find(department where department.dept-code eq "100" use-index codeIndex) then. `;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 11, "scopes": ["source.abl", "support.function.abl"] },  // 'can-find'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 12, "endIndex": 22, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'department'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 49, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'department.dept-code'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 50, "endIndex": 52, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'eq'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 54, "endIndex": 57, "scopes": ["source.abl", "string.double.complex.abl"] },  // '100'
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 59, "endIndex": 68, "scopes": ["source.abl", "keyword.other.abl"] },  // 'use-index'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 69, "endIndex": 78, "scopes": ["source.abl", "variable.other.abl"] },  // 'codeIndex'
    { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 79, "endIndex": 80, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 80, "endIndex": 84, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 84, "endIndex": 85, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
    { "startIndex": 85, "endIndex": 87, "scopes": ["source.abl"] }  // ' '
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if
    can-find(
        first department
           where department.dept-code eq ttFoo.Code)
then.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] }  // 'if'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "support.function.abl"] },  // 'can-find'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.brace.round.js"] }  // '('
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'first'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 24, "scopes": ["source.abl", "storage.data.table.abl"] }  // 'department'
    ],
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl"] },  // '           '
      { "startIndex": 11, "endIndex": 16, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 37, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'department.dept-code'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 38, "endIndex": 40, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'eq'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 41, "endIndex": 51, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'ttFoo.Code'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

