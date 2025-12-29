const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `input from c:/temp/blah3.txt.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 28, "scopes": ["source.abl", "storage.other.opsys-device.abl"] },  // 'c:/temp/blah3.txt'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];

  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input from c:\\temp\\blah3.txt.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 28, "scopes": ["source.abl", "storage.other.opsys-device.abl"] },  // 'c:\temp\blah3.txt'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];

  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input stream-handle hhh from c:/temp/blah3.txt.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'stream-handle'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 23, "scopes": ["source.abl", "variable.other.abl"] },  // 'hhh'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 46, "scopes": ["source.abl", "storage.other.opsys-device.abl"] },  // 'c:/temp/blah3.txt'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input stream streamS from c:/temp/blah3.txt.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'stream'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 20, "scopes": ["source.abl", "variable.other.abl"] },  // 'streamS'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 43, "scopes": ["source.abl", "storage.other.opsys-device.abl"] },  // 'c:/temp/blah3.txt'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input stream streamS from c:\\temp\\blah3.txt.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'stream'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 20, "scopes": ["source.abl", "variable.other.abl"] },  // 'streamS'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 21, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 43, "scopes": ["source.abl", "storage.other.opsys-device.abl"] },  // 'c:\temp\blah3.txt'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input from c:/blah.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 18, "scopes": ["source.abl", "storage.other.opsys-device.abl"] },  // 'c:/blah'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input from c:/blah .`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 18, "scopes": ["source.abl", "storage.other.opsys-device.abl"] },  // 'c:/blah'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input from "c:/blah".`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 12, "endIndex": 19, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'c:/blah'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input from /blah/path/to/file.bin.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 33, "scopes": ["source.abl", "storage.other.opsys-device.abl"] },  // '/blah/path/to/file.bin'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input from terminal .`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'terminal'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input from value("path/to/file") .`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'value'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 18, "endIndex": 30, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'path/to/file'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input from value(cv-file-name) .`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'value'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 17, "endIndex": 29, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cv-file-name'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input STREAM dump from VALUE(fil) LOB-DIR VALUE(lobdir)
       NO-ECHO NO-MAP NO-CONVERT.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'STREAM'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "variable.other.abl"] },  // 'dump'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'fil'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 41, "scopes": ["source.abl", "keyword.other.abl"] },  // 'LOB-DIR'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 47, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 48, "endIndex": 54, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lobdir'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] },  // '       '
      { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-ECHO'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-MAP'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 32, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-CONVERT'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input STREAM dump from VALUE(fil) NO-ECHO
        MAP VALUE(SUBSTRING(user_env[3],5,-1,"character"))
        NO-CONVERT.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'STREAM'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "variable.other.abl"] },  // 'dump'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'fil'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 41, "scopes": ["source.abl", "keyword.other.abl"] }  // 'NO-ECHO'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'MAP'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 18, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'SUBSTRING'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'user_env'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '3'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '5'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '-1'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 46, "endIndex": 55, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'character'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-CONVERT'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input STREAM dump from VALUE(fil) LOB-DIR VALUE(lobdir) NO-ECHO
        MAP VALUE(SUBSTRING(user_env[3],5,-1,"character"))
        CONVERT SOURCE SESSION:CHARSET TARGET user_env[5].`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'STREAM'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "variable.other.abl"] },  // 'dump'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'fil'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 41, "scopes": ["source.abl", "keyword.other.abl"] },  // 'LOB-DIR'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 47, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 48, "endIndex": 54, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lobdir'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 63, "scopes": ["source.abl", "keyword.other.abl"] }  // 'NO-ECHO'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'MAP'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 18, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'SUBSTRING'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'user_env'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '3'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '5'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '-1'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 46, "endIndex": 55, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'character'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CONVERT'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SOURCE'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 30, "scopes": ["source.abl", "variable.language.abl"] },  // 'SESSION'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 31, "endIndex": 38, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'CHARSET'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TARGET'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 46, "endIndex": 54, "scopes": ["source.abl", "variable.other.abl"] },  // 'user_env'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '5'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `input STREAM dump from VALUE(fil) LOB-DIR VALUE(lobdir) NO-ECHO
        MAP VALUE(SUBSTRING(user_env[3],5,-1,"character"))
        CONVERT SOURCE user_env[4] TARGET user_env[5].`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'input'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 12, "scopes": ["source.abl", "keyword.other.abl"] },  // 'STREAM'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "variable.other.abl"] },  // 'dump'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'from'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'fil'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 41, "scopes": ["source.abl", "keyword.other.abl"] },  // 'LOB-DIR'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 47, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 48, "endIndex": 54, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lobdir'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 63, "scopes": ["source.abl", "keyword.other.abl"] }  // 'NO-ECHO'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'MAP'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 18, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'SUBSTRING'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'user_env'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '3'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '5'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 42, "endIndex": 44, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '-1'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 46, "endIndex": 55, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'character'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CONVERT'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SOURCE'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 31, "scopes": ["source.abl", "variable.other.abl"] },  // 'user_env'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '4'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 35, "endIndex": 41, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TARGET'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 42, "endIndex": 50, "scopes": ["source.abl", "variable.other.abl"] },  // 'user_env'
      { "startIndex": 50, "endIndex": 51, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.begin.abl"] },  // '['
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.array.literal.abl", "constant.numeric.source.abl"] },  // '5'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.array.literal.abl", "punctuation.definition.bracket.square.end.abl"] },  // ']'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `INPUT FROM OS-DIR(CurDir) ECHO.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'INPUT'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FROM'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'OS-DIR'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 18, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'CurDir'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 30, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ECHO'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];

  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `INPUT FROM VALUE (s_logfile) NO-ECHO {&NO-MAP}.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'INPUT'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FROM'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 18, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 's_logfile'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 36, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-ECHO'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 39, "endIndex": 45, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'NO-MAP'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];

  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
