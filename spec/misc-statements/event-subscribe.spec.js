const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `method public void AMethod():
  oController:NewEventName:Subscribe(NewEventNameHandler).
end method.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 26, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'AMethod'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 14, "endIndex": 26, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventName'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 27, "endIndex": 36, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Subscribe'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 37, "endIndex": 56, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventNameHandler'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
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
  let statement = `oController:NewTempTableAdded:Subscribe(hProc ,  ipName).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAdded'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Subscribe'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 40, "endIndex": 45, "scopes": ["source.abl", "variable.other.abl"] },  // 'hProc'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl"] },  // '  '
    { "startIndex": 49, "endIndex": 55, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'ipName'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oController:NewTempTableAdded:Subscribe(hProc ,  "ipName").`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAdded'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Subscribe'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 40, "endIndex": 45, "scopes": ["source.abl", "variable.other.abl"] },  // 'hProc'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 47, "endIndex": 49, "scopes": ["source.abl"] },  // '  '
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 50, "endIndex": 56, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'ipName'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oController:NewTempTableAdded:Subscribe(NewTempTableAddedHandler).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAdded'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Subscribe'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 40, "endIndex": 64, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAddedHandler'
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oController:NewTempTableAdded:Subscribe('NewTempTableAddedHandler':u ).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAdded'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Subscribe'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 41, "endIndex": 65, "scopes": ["source.abl", "string.single.complex.abl"] },  // 'NewTempTableAddedHandler'
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 66, "endIndex": 68, "scopes": ["source.abl", "string.single.complex.abl", "support.other.abl"] },  // ':u'
    { "startIndex": 68, "endIndex": 69, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oController:NewTempTableAdded:Subscribe(objRef:NewTempTableAddedHandler).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAdded'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 30, "endIndex": 39, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Subscribe'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 40, "endIndex": 46, "scopes": ["source.abl", "variable.other.abl"] },  // 'objRef'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 47, "endIndex": 71, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAddedHandler'
    { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oRef:NewTempTableAdded:Subscribe(Package.Sub.Class:NewTempTableAddedHandler).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "variable.other.abl"] },  // 'oRef'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 5, "endIndex": 22, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAdded'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 23, "endIndex": 32, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Subscribe'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 33, "endIndex": 50, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'Package.Sub.Class'
    { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 51, "endIndex": 75, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAddedHandler'
    { "startIndex": 75, "endIndex": 76, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `method public void AMethod():
  oController:NewEventName:UnSubscribe(NewEventNameHandler).
end method.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'method'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'public'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.define.method.abl", "keyword.other.abl"] },  // 'void'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.method.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 26, "scopes": ["source.abl", "meta.define.method.abl", "entity.name.function.abl"] },  // 'AMethod'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define.method.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 14, "endIndex": 26, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventName'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 27, "endIndex": 38, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'UnSubscribe'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 39, "endIndex": 58, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewEventNameHandler'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
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
  let statement = `oController:NewTempTableAdded:Unsubscribe(hProc ,  ipName).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAdded'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 30, "endIndex": 41, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Unsubscribe'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 42, "endIndex": 47, "scopes": ["source.abl", "variable.other.abl"] },  // 'hProc'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl"] },  // '  '
    { "startIndex": 51, "endIndex": 57, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'ipName'
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oController:NewTempTableAdded:Unsubscribe(hProc ,  "ipName").`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAdded'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 30, "endIndex": 41, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Unsubscribe'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 42, "endIndex": 47, "scopes": ["source.abl", "variable.other.abl"] },  // 'hProc'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 49, "endIndex": 51, "scopes": ["source.abl"] },  // '  '
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 52, "endIndex": 58, "scopes": ["source.abl", "string.double.complex.abl"] },  // 'ipName'
    { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oController:NewTempTableAdded:Unsubscribe(NewTempTableAddedHandler).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAdded'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 30, "endIndex": 41, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Unsubscribe'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 42, "endIndex": 66, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAddedHandler'
    { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oController:NewTempTableAdded:Unsubscribe('NewTempTableAddedHandler':u ).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAdded'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 30, "endIndex": 41, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Unsubscribe'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 43, "endIndex": 67, "scopes": ["source.abl", "string.single.complex.abl"] },  // 'NewTempTableAddedHandler'
    { "startIndex": 67, "endIndex": 68, "scopes": ["source.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
    { "startIndex": 68, "endIndex": 70, "scopes": ["source.abl", "string.single.complex.abl", "support.other.abl"] },  // ':u'
    { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oController:NewTempTableAdded:Unsubscribe(objRef:NewTempTableAddedHandler).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'oController'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 12, "endIndex": 29, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAdded'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 30, "endIndex": 41, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Unsubscribe'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 42, "endIndex": 48, "scopes": ["source.abl", "variable.other.abl"] },  // 'objRef'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 49, "endIndex": 73, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAddedHandler'
    { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 74, "endIndex": 75, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `oRef:NewTempTableAdded:Unsubscribe(Package.Sub.Class:NewTempTableAddedHandler).`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "variable.other.abl"] },  // 'oRef'
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 5, "endIndex": 22, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAdded'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 23, "endIndex": 34, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Unsubscribe'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 35, "endIndex": 52, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'Package.Sub.Class'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 53, "endIndex": 77, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'NewTempTableAddedHandler'
    { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 78, "endIndex": 79, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

