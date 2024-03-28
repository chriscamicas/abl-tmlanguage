const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `// Per https://tools.ietf.org/html/rfc2817 section 5.3, any 2xx status code is good
  if (200 <= connectResponse:StatusCode and connectResponse:StatusCode < 300) then
  do on error undo, throw:
      // On success, we need to tell the socket connection to upgrade to TLS
      moSocketLib:StartTls(baseRequest:URI:Host).

      catch sockErr as Progress.Lang.Error:
          Logger:Error(substitute('Unable to create HTTP tunnel to &1', baseRequest:URI:ToString()),
                        sockErr).
          undo, throw sockErr.
      end catch.
  end.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 83, "scopes": ["source.abl", "comment.line.double-slash.abl"] },  // '// Per https://tools.ietf.org/html/rfc2817 section 5.3, any 2xx status code is good'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '200'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 12, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<='
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 28, "scopes": ["source.abl", "variable.other.abl"] },  // 'connectResponse'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 29, "endIndex": 39, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'StatusCode'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 43, "scopes": ["source.abl", "keyword.other.abl"] },  // 'and'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 59, "scopes": ["source.abl", "variable.other.abl"] },  // 'connectResponse'
      { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 60, "endIndex": 70, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'StatusCode'
      { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<'
      { "startIndex": 72, "endIndex": 73, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 73, "endIndex": 76, "scopes": ["source.abl", "constant.numeric.source.abl"] },  // '300'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 78, "endIndex": 82, "scopes": ["source.abl", "keyword.other.abl"] }  // 'then'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'do'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.block.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'on'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'error'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 18, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'undo'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.block.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 25, "scopes": ["source.abl", "meta.block.abl", "meta.block.branch.abl", "keyword.other.abl"] },  // 'throw'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 76, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// On success, we need to tell the socket connection to upgrade to TLS'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "variable.other.abl"] },  // 'moSocketLib'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'StartTls'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 27, "endIndex": 38, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'baseRequest'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 39, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'URI'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 43, "endIndex": 47, "scopes": ["source.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'Host'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 11, "scopes": ["source.abl", "keyword.other.abl"] },  // 'catch'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 12, "endIndex": 19, "scopes": ["source.abl", "variable.parameter.abl"] },  // 'sockErr'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 22, "scopes": ["source.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 42, "scopes": ["source.abl", "entity.name.type.abl"] },  // 'Progress.Lang.Error'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 16, "scopes": ["source.abl", "variable.other.abl"] },  // 'Logger'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 17, "endIndex": 22, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Error'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 23, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'substitute'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.single.complex.abl", "punctuation.definition.string.begin.abl"] },  // '''
      { "startIndex": 35, "endIndex": 69, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.single.complex.abl"] },  // 'Unable to create HTTP tunnel to &1'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "string.single.complex.abl", "punctuation.definition.string.end.abl"] },  // '''
      { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 71, "endIndex": 72, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 72, "endIndex": 83, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'baseRequest'
      { "startIndex": 83, "endIndex": 84, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 84, "endIndex": 87, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'URI'
      { "startIndex": 87, "endIndex": 88, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 88, "endIndex": 96, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "entity.name.function.abl"] },  // 'ToString'
      { "startIndex": 96, "endIndex": 97, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 97, "endIndex": 98, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 98, "endIndex": 99, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 99, "endIndex": 100, "scopes": ["source.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 24, "scopes": ["source.abl"] },  // '                        '
      { "startIndex": 24, "endIndex": 31, "scopes": ["source.abl", "variable.other.abl"] },  // 'sockErr'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
      { "startIndex": 10, "endIndex": 14, "scopes": ["source.abl", "keyword.other.abl"] },  // 'undo'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] },  // 'throw'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 29, "scopes": ["source.abl", "variable.other.abl"] },  // 'sockErr'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'catch'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `if string(1) = "1" then .`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
    { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 3, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'string'
    { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '1'
    { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
    { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "string.double.complex.abl"] },  // '1'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 19, "endIndex": 23, "scopes": ["source.abl", "keyword.other.abl"] },  // 'then'
    { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

