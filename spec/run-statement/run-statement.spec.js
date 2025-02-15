const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `run foo.p.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'foo.p'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];

  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `   run destry-object.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 20, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'destry-object'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `   run a/b\\c\\program.p (today).`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 22, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'a/b\c\program.p'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 24, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'today'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `   run value(cPriogram).`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'value'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 13, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cPriogram'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'ss
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `   run a\\program.p.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 18, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'a\program.p'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `   run a/b/c/program.p.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 22, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'a/b/c/program.p'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `   run "a/program.p".`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 20, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // '"a/program.p"'
    { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `   run a/program.p (input 0x4, output cData).`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl"] },  // '   '
    { "startIndex": 3, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 18, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'a/program.p'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 20, "endIndex": 25, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 26, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '0x4'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'output'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cData'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `run a/program.p on hAppServer single-run (input 0x4, output cData).`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 15, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'a/program.p'
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'on'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 29, "scopes": ["source.abl", "variable.other.abl"] },  // 'hAppServer'
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 30, "endIndex": 40, "scopes": ["source.abl", "keyword.other.abl"] },  // 'single-run'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 42, "endIndex": 47, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 48, "endIndex": 51, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '0x4'
    { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 59, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'output'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 60, "endIndex": 65, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cData'
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run $SYSSYS\\P\\TestServerSockAppSrv.p(31000).`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 36, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // '$SYSSYS\P\TestServerSockAppSrv.p'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 37, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '31000'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run $SYSSYS/P/TestServerSockAppSrv.p(31000).`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 36, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // '$SYSSYS/P/TestServerSockAppSrv.p'
    { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 37, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '31000'
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run "$SYSSYS/P/TestServerSockAppSrv.p"(31000).`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 38, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // '"$SYSSYS/P/TestServerSockAppSrv.p"'
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 39, "endIndex": 44, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '31000'
    { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run '$SYSSYS/P/TestServerSockAppSrv.p' (31000).`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 38, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // ''$SYSSYS/P/TestServerSockAppSrv.p''
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 40, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '31000'
    { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run value(SYSSYS) (31000).`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'value'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'SYSSYS'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 19, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '31000'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run temprunprogram.p@.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 21, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'temprunprogram.p@'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run me.p`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "entity.name.procedure.abl"] }  // 'me.p'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run foo.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'foo'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run foo/blah.r.`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'foo/blah.r'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
