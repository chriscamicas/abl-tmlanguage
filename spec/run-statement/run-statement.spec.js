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
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'value'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 13, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'cPriogram'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
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
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 8, "endIndex": 19, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'a/program.p'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
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
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 5, "endIndex": 37, "scopes": ["source.abl", "string.quoted.double.abl"] },  // '$SYSSYS/P/TestServerSockAppSrv.p'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
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
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
    { "startIndex": 5, "endIndex": 37, "scopes": ["source.abl", "string.quoted.single.abl"] },  // '$SYSSYS/P/TestServerSockAppSrv.p'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
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
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
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

describe('', () => {
  let statement = `RUN {&rhdr}brslsag3.p{&rtrl} .`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RUN'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 6, "endIndex": 10, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'rhdr'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 11, "endIndex": 21, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'brslsag3.p'
    { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'rtrl'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RUN /*debug remove / path */ {&rhdr}brslsag3.p{&rtrl} .`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RUN'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "comment.block.source.abl"] },  // '/*'
    { "startIndex": 6, "endIndex": 26, "scopes": ["source.abl", "comment.block.source.abl", "comment"] },  // 'debug remove / path '
    { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl", "comment.block.source.abl"] },  // '*/'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 31, "endIndex": 35, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'rhdr'
    { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 36, "endIndex": 46, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'brslsag3.p'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 48, "endIndex": 52, "scopes": ["source.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'rtrl'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RUN VALUE(THIS-OBJECT:ServiceInterfacePath + "/proSIinvokeTaskAsync2.p":U)
        ON hAppServer
        ASYNCHRONOUS
        (INPUT pcTaskName,
          INPUT pcMethodName,
          {1},
          lcDataset1,
          lcDataset2,
          lcDataset3,
          lcDataset4,
          lcDataset5,
          lcParameter,
          lcContext) .`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RUN'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'VALUE'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 10, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.language.abl"] },  // 'THIS-OBJECT'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 22, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'ServiceInterfacePath'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "keyword.operator.source.abl"] },  // '+'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 46, "endIndex": 70, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // '/proSIinvokeTaskAsync2.p'
      { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 71, "endIndex": 73, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ON'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 21, "scopes": ["source.abl", "variable.other.abl"] }  // 'hAppServer'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] }  // 'ASYNCHRONOUS'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 9, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'INPUT'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 25, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'pcTaskName'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'INPUT'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'pcMethodName'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.argument.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.argument.abl", "support.other.argument.abl"] },  // '1'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.argument.abl", "punctuation.section.abl"] },  // '}'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lcDataset1'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lcDataset2'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lcDataset3'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lcDataset4'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lcDataset5'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 21, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lcParameter'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 19, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'lcContext'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run Bar in vProcedureHandle(input "hello World").`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'Bar'
    { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'in'
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 11, "endIndex": 27, "scopes": ["source.abl", "variable.other.abl"] },  // 'vProcedureHandle'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 28, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 35, "endIndex": 46, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'hello World'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RUN test.p
    ON hServer
    ASYNCHRONOUS
    EVENT-HANDLER "test"
    EVENT-HANDLER-CONTEXT o .`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RUN'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "entity.name.procedure.abl"] }  // 'test.p'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ON'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "variable.other.abl"] }  // 'hServer'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "keyword.other.abl"] }  // 'ASYNCHRONOUS'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-HANDLER'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'test'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-HANDLER-CONTEXT'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "variable.other.abl"] },  // 'o'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RUN test.p
    ON SERVER hServer
    ASYNCHRONOUS
    EVENT-HANDLER "test"
    EVENT-HANDLER-CONTEXT o .`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RUN'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "entity.name.procedure.abl"] }  // 'test.p'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ON'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SERVER'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 21, "scopes": ["source.abl", "variable.other.abl"] }  // 'hServer'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "keyword.other.abl"] }  // 'ASYNCHRONOUS'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-HANDLER'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'test'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-HANDLER-CONTEXT'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "variable.other.abl"] },  // 'o'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RUN test.p
    ON SESSION
    ASYNCHRONOUS
    EVENT-HANDLER "test"
    EVENT-HANDLER-CONTEXT o .`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RUN'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "entity.name.procedure.abl"] }  // 'test.p'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ON'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "variable.language.abl"] }  // 'SESSION'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "keyword.other.abl"] }  // 'ASYNCHRONOUS'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-HANDLER'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'test'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-HANDLER-CONTEXT'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "variable.other.abl"] },  // 'o'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RUN test.p
    ON SESSION:HANDLE
    ASYNCHRONOUS
    EVENT-HANDLER "test"
    EVENT-HANDLER-CONTEXT o .`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RUN'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "entity.name.procedure.abl"] }  // 'test.p'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ON'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "variable.language.abl"] },  // 'SESSION'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 15, "endIndex": 21, "scopes": ["source.abl", "entity.name.function.abl"] }  // 'HANDLE'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 16, "scopes": ["source.abl", "keyword.other.abl"] }  // 'ASYNCHRONOUS'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-HANDLER'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'test'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-HANDLER-CONTEXT'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "variable.other.abl"] },  // 'o'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run Foo.Bar in vProcedureHandle(input "goodbye").`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 11, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'Foo.Bar'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'in'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 31, "scopes": ["source.abl", "variable.other.abl"] },  // 'vProcedureHandle'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 32, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 39, "endIndex": 46, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'goodbye'
    { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run foo.p persistent set vProcedureHandle.
run Bar in vProcedureHandle(input "hello World").`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 9, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'foo.p'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] },  // 'persistent'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 24, "scopes": ["source.abl", "keyword.other.abl"] },  // 'set'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 41, "scopes": ["source.abl", "variable.other.abl"] },  // 'vProcedureHandle'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'Bar'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] },  // 'in'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 27, "scopes": ["source.abl", "variable.other.abl"] },  // 'vProcedureHandle'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 28, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'input'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 35, "endIndex": 46, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'hello World'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run gfgg.p  persistent set h on oT:GetHdl().`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'gfgg.p'
    { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl"] },  // '  '
    { "startIndex": 12, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'persistent'
    { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 23, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },  // 'set'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "variable.other.abl"] },  // 'h'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 29, "endIndex": 31, "scopes": ["source.abl", "keyword.other.abl"] },  // 'on'
    { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 32, "endIndex": 34, "scopes": ["source.abl", "variable.other.abl"] },  // 'oT'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 35, "endIndex": 41, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'GetHdl'
    { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `run adfasf.p  EVENT-PROCEDURE "event-internal-procedure".
run adfasf.p  EVENT-PROCEDURE 'event-internal-procedure':u.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'adfasf.p'
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 14, "endIndex": 29, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-PROCEDURE'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 31, "endIndex": 55, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'event-internal-procedure'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'run'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'adfasf.p'
      { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 14, "endIndex": 29, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-PROCEDURE'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
      { "startIndex": 31, "endIndex": 55, "scopes": ["source.abl", "string.quoted.single.abl"] },  // 'event-internal-procedure'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
      { "startIndex": 56, "endIndex": 58, "scopes": ["source.abl", "string.quoted.single.abl", "support.other.abl"] },  // ':u'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RUN
     extern-proc-name
    SINGLETON  SET proc-handle
    ON  SERVER session
        TRANSACTION DISTINCT
        ASYNCHRONOUS
            SET async-request-handle
            EVENT-PROCEDURE event-internal-procedure
                IN procedure-context
            EVENT-HANDLER string(event-handler-name:Method())
               EVENT-HANDLER-CONTEXT objRef
 ( "abc", objRef) .`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] }  // 'RUN'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 21, "scopes": ["source.abl", "entity.name.procedure.abl"] }  // 'extern-proc-name'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SINGLETON'
      { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 15, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SET'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 30, "scopes": ["source.abl", "variable.other.abl"] }  // 'proc-handle'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ON'
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SERVER'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 22, "scopes": ["source.abl", "variable.language.abl"] }  // 'session'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TRANSACTION'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] }  // 'DISTINCT'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] }  // 'ASYNCHRONOUS'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SET'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 36, "scopes": ["source.abl", "variable.other.abl"] }  // 'async-request-handle'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-PROCEDURE'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 52, "scopes": ["source.abl", "variable.other.abl"] }  // 'event-internal-procedure'
    ],
    [
      { "startIndex": 0, "endIndex": 16, "scopes": ["source.abl"] },  // '                '
      { "startIndex": 16, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'IN'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 36, "scopes": ["source.abl", "variable.other.abl"] }  // 'procedure-context'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-HANDLER'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'string'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 33, "endIndex": 51, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'event-handler-name'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 52, "endIndex": 58, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'Method'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 15, "scopes": ["source.abl"] },  // '               '
      { "startIndex": 15, "endIndex": 36, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-HANDLER-CONTEXT'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 43, "scopes": ["source.abl", "variable.other.abl"] }  // 'objRef'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'abc'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'objRef'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `RUN
     extern-proc-name
    SINGLETON  SET proc-handle
    ON  SERVER session
        TRANSACTION DISTINCT
        ASYNCHRONOUS
            SET async-request-handle
            EVENT-PROCEDURE event-internal-procedure
                IN procedure-context
            EVENT-HANDLER string(event-handler-name:Method())
               EVENT-HANDLER-CONTEXT this-procedure
 ( "abc", objRef) .`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] }  // 'RUN'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 21, "scopes": ["source.abl", "entity.name.procedure.abl"] }  // 'extern-proc-name'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SINGLETON'
      { "startIndex": 13, "endIndex": 15, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 15, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SET'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 30, "scopes": ["source.abl", "variable.other.abl"] }  // 'proc-handle'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'ON'
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SERVER'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 22, "scopes": ["source.abl", "variable.language.abl"] }  // 'session'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 19, "scopes": ["source.abl", "keyword.other.abl"] },  // 'TRANSACTION'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 28, "scopes": ["source.abl", "keyword.other.abl"] }  // 'DISTINCT'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 20, "scopes": ["source.abl", "keyword.other.abl"] }  // 'ASYNCHRONOUS'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'SET'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 36, "scopes": ["source.abl", "variable.other.abl"] }  // 'async-request-handle'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 27, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-PROCEDURE'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 52, "scopes": ["source.abl", "variable.other.abl"] }  // 'event-internal-procedure'
    ],
    [
      { "startIndex": 0, "endIndex": 16, "scopes": ["source.abl"] },  // '                '
      { "startIndex": 16, "endIndex": 18, "scopes": ["source.abl", "keyword.other.abl"] },  // 'IN'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 36, "scopes": ["source.abl", "variable.other.abl"] }  // 'procedure-context'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 25, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-HANDLER'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'string'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 33, "endIndex": 51, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'event-handler-name'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 52, "endIndex": 58, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'Method'
      { "startIndex": 58, "endIndex": 59, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 15, "scopes": ["source.abl"] },  // '               '
      { "startIndex": 15, "endIndex": 36, "scopes": ["source.abl", "keyword.other.abl"] },  // 'EVENT-HANDLER-CONTEXT'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 37, "endIndex": 51, "scopes": ["source.abl", "variable.language.abl"] }  // 'this-procedure'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'abc'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'objRef'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
