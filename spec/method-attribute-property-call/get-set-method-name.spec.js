const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `if type-of(pProxyReq, IAdaptable) then
  assign baseRequest = cast(cast(pProxyReq, IAdaptable):GetAdapter(get-class(IHttpRequest)), IHttpRequest).
else
if type-of(pProxyReq, IHttpRequest) then
  assign baseRequest = cast(pProxyReq, IHttpRequest):Set(now).`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'type-of'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 11, "endIndex": 20, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'pProxyReq'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'IAdaptable'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 38, "scopes": ["source.abl", "keyword.other.abl"] }  // 'then'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 20, "scopes": ["source.abl", "variable.other.abl"] },  // 'baseRequest'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'cast'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 28, "endIndex": 32, "scopes": ["source.abl", "meta.function-call.abl", "meta.function-call.abl", "support.function.abl"] },  // 'cast'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function-call.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 33, "endIndex": 42, "scopes": ["source.abl", "meta.function-call.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'pProxyReq'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.function-call.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "meta.function-call.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 44, "endIndex": 54, "scopes": ["source.abl", "meta.function-call.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'IAdaptable'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.function-call.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl"] },  // ':'
      { "startIndex": 56, "endIndex": 66, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'GetAdapter'
      { "startIndex": 66, "endIndex": 67, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 67, "endIndex": 76, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'get-class'
      { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 77, "endIndex": 89, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'IHttpRequest'
      { "startIndex": 89, "endIndex": 90, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 90, "endIndex": 91, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 91, "endIndex": 92, "scopes": ["source.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 92, "endIndex": 93, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 93, "endIndex": 105, "scopes": ["source.abl", "variable.other.abl"] },  // 'IHttpRequest'
      { "startIndex": 105, "endIndex": 106, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 106, "endIndex": 107, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] }  // 'else'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 2, "endIndex": 3, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 3, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'type-of'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 11, "endIndex": 20, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'pProxyReq'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 34, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'IHttpRequest'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 40, "scopes": ["source.abl", "keyword.other.abl"] }  // 'then'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 9, "endIndex": 20, "scopes": ["source.abl", "variable.other.abl"] },  // 'baseRequest'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 27, "scopes": ["source.abl", "meta.function-call.abl", "support.function.abl"] },  // 'cast'
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 28, "endIndex": 37, "scopes": ["source.abl", "meta.function-call.abl", "variable.other.abl"] },  // 'pProxyReq'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.function-call.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 51, "scopes": ["source.abl", "meta.function-call.abl", "entity.name.type.abl"] },  // 'IHttpRequest'
      { "startIndex": 51, "endIndex": 52, "scopes": ["source.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl"] },  // ':'
      { "startIndex": 53, "endIndex": 56, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Set'
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 57, "endIndex": 60, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'now'
      { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

