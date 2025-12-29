const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `assign oRequest = this-object:GenerateInvokeMethodProperties (input-output oOperation,
    input-output oArray,
    input-output poDocumentRoot,
    poRestMethod,
    pcParameters,
    oParameterDescriptions ).`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 15, "scopes": ["source.abl", "variable.other.abl"] },  // 'oRequest'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 29, "scopes": ["source.abl", "variable.language.abl"] },  // 'this-object'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 30, "endIndex": 60, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'GenerateInvokeMethodProperties'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 62, "endIndex": 74, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input-output'
      { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 75, "endIndex": 85, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'oOperation'
      { "startIndex": 85, "endIndex": 86, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input-output'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 23, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'oArray'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input-output'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 31, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'poDocumentRoot'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'poRestMethod'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'pcParameters'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'oParameterDescriptions'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method private void CopyTable(input table copytable):
  CopyTable(table copytable by-reference,"","").
end method.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'private'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 29, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'CopyTable'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 30, "endIndex": 35, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'input'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 41, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'table'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 51, "scopes": ["source.abl", "meta.define.method.abl", "storage.data.table.abl"] },  // 'copytable'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 11, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'CopyTable'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 12, "endIndex": 17, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'table'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'copytable'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 40, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'by-reference'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
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
  let statement = `for each table transaction:
  oAccessRequestBusinessEntity:SaveChanges(DATASET dsAccessRequest).
  oARBE:SaveChanges(DATASET dsAccessRequest).
  DatasetHelper:ThrowDatasetErrors(DATASET dsAccessRequest:HANDLE).
end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 14, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'table'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'transaction'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 30, "scopes": ["source.abl", "variable.other.abl"] },  // 'oAccessRequestBusinessEntity'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 31, "endIndex": 42, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'SaveChanges'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 43, "endIndex": 50, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'DATASET'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 66, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.dataset.abl"] },  // 'dsAccessRequest'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 7, "scopes": ["source.abl", "variable.other.abl"] },  // 'oARBE'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 8, "endIndex": 19, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'SaveChanges'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 20, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'DATASET'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.dataset.abl"] },  // 'dsAccessRequest'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 15, "scopes": ["source.abl", "variable.other.abl"] },  // 'DatasetHelper'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 16, "endIndex": 34, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'ThrowDatasetErrors'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 35, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'DATASET'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 43, "endIndex": 58, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.dataset.abl"] },  // 'dsAccessRequest'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 59, "endIndex": 65, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'HANDLE'
      { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if Progress.Lang.Class:GetClass (pcEntityName):IsA ( "Consultingwerk.OERA.BusinessTask":U) or
(Progress.Lang.Class:GetClass (pcEntityName):IsA ( "Consutingwerk.OERA.IBusinessService":U) and
Progress.Lang.Class:GetClass (pcEntityName) :IsA ( "Consultingwerk.SmartFramework.SmartBusinessEntity":U) eq false) then
  poRestResourceService:RegisterBusinessTaskRestMethod (oMethod).`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 22, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Class'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 23, "endIndex": 31, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'GetClass'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 33, "endIndex": 45, "scopes": ["source.abl", "variable.other.abl"] },  // 'pcEntityName'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 47, "endIndex": 50, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'IsA'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 54, "endIndex": 86, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'Consultingwerk.OERA.BusinessTask'
      { "startIndex": 86, "endIndex": 87, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 87, "endIndex": 89, "scopes": ["source.abl", "string.quoted.double.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 89, "endIndex": 90, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 90, "endIndex": 91, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 91, "endIndex": 93, "scopes": ["source.abl", "keyword.other.abl"] }  // 'or'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 1, "endIndex": 20, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Class'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 21, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'GetClass'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 31, "endIndex": 43, "scopes": ["source.abl", "variable.other.abl"] },  // 'pcEntityName'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 45, "endIndex": 48, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'IsA'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 52, "endIndex": 87, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'Consutingwerk.OERA.IBusinessService'
      { "startIndex": 87, "endIndex": 88, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 88, "endIndex": 90, "scopes": ["source.abl", "string.quoted.double.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 90, "endIndex": 91, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 91, "endIndex": 92, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 92, "endIndex": 95, "scopes": ["source.abl", "keyword.other.abl"] }  // 'and'
    ],
    [
      { "startIndex": 0, "endIndex": 19, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Class'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 20, "endIndex": 28, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'GetClass'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 30, "endIndex": 42, "scopes": ["source.abl", "variable.other.abl"] },  // 'pcEntityName'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 45, "endIndex": 48, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'IsA'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 52, "endIndex": 101, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'Consultingwerk.SmartFramework.SmartBusinessEntity'
      { "startIndex": 101, "endIndex": 102, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 102, "endIndex": 104, "scopes": ["source.abl", "string.quoted.double.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 104, "endIndex": 105, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 105, "endIndex": 106, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 106, "endIndex": 108, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // 'eq'
      { "startIndex": 108, "endIndex": 109, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 109, "endIndex": 114, "scopes": ["source.abl", "constant.language.abl"] },  // 'false'
      { "startIndex": 114, "endIndex": 115, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 115, "endIndex": 116, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 116, "endIndex": 120, "scopes": ["source.abl", "keyword.other.abl"] }  // 'then'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 23, "scopes": ["source.abl", "variable.other.abl"] },  // 'poRestResourceService'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 24, "endIndex": 54, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'RegisterBusinessTaskRestMethod'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 56, "endIndex": 63, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'oMethod'
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
