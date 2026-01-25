const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `assign Domain = this-object:DefaultCookieDomain.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 13, "scopes": ["source.abl", "variable.other.abl"] },  // 'Domain'
    { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 16, "endIndex": 27, "scopes": ["source.abl", "variable.language.abl"] },  // 'this-object'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
    { "startIndex": 28, "endIndex": 47, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'DefaultCookieDomain'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `assign repeatTheAction = (if true then false else true)
       lowerMyExpecations = "40%"
       catchMeIf = youCan
       forTunately = thisWorks:Today()

       // this class
       finallyItsDone = true
       abstractRepresentations = Arehard(true).
       staticCodeIs("all the rage")
       .`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'assign'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 22, "scopes": ["source.abl", "variable.other.abl"] },  // 'repeatTheAction'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'if'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'true'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 38, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'then'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 44, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'false'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 45, "endIndex": 49, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'else'
      { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 50, "endIndex": 54, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'true'
      { "startIndex": 54, "endIndex": 55, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] },  // '       '
      { "startIndex": 7, "endIndex": 25, "scopes": ["source.abl", "variable.other.abl"] },  // 'lowerMyExpecations'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 29, "endIndex": 32, "scopes": ["source.abl", "string.quoted.double.abl"] },  // '40%'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] },  // '       '
      { "startIndex": 7, "endIndex": 16, "scopes": ["source.abl", "variable.other.abl"] },  // 'catchMeIf'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 25, "scopes": ["source.abl", "variable.other.abl"] }  // 'youCan'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] },  // '       '
      { "startIndex": 7, "endIndex": 18, "scopes": ["source.abl", "variable.other.abl"] },  // 'forTunately'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 30, "scopes": ["source.abl", "variable.other.abl"] },  // 'thisWorks'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
      { "startIndex": 31, "endIndex": 36, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Today'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] },  // '       '
      { "startIndex": 7, "endIndex": 20, "scopes": ["source.abl", "comment.line.double-slash.abl"] }  // '// this class'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] },  // '       '
      { "startIndex": 7, "endIndex": 21, "scopes": ["source.abl", "variable.other.abl"] },  // 'finallyItsDone'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 28, "scopes": ["source.abl", "constant.language.abl"] }  // 'true'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] },  // '       '
      { "startIndex": 7, "endIndex": 30, "scopes": ["source.abl", "variable.other.abl"] },  // 'abstractRepresentations'
      { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 33, "endIndex": 40, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'Arehard'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 41, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "constant.language.abl"] },  // 'true'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] },  // '       '
      { "startIndex": 7, "endIndex": 19, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'staticCodeIs'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 21, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'all the rage'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] },  // '       '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CASE action:
  WHEN "edition" THEN
  DO:
    ASSIGN
      produit = getChamp("produit")
      document = getChamp("document")
      printerName = getChamp("printerName").

    RUN pi_edition.

    setChamp("produit", produit + string(0x3)).

  END.
END CASE.  `;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CASE'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 5, "endIndex": 11, "scopes": ["source.abl", "variable.other.abl"] },  // 'action'
      { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WHEN'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'edition'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 21, "scopes": ["source.abl", "keyword.other.abl"] }  // 'THEN'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.block.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "meta.block.abl", "keyword.other.abl"] },  // 'DO'
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 10, "scopes": ["source.abl", "keyword.other.abl"] }  // 'ASSIGN'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 13, "scopes": ["source.abl", "variable.other.abl"] },  // 'produit'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 24, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'getChamp'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 26, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'produit'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 14, "scopes": ["source.abl", "variable.other.abl"] },  // 'document'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 17, "endIndex": 25, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'getChamp'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 27, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'document'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.brace.round.js"] }  // ')'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "variable.other.abl"] },  // 'printerName'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 28, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'getChamp'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 30, "endIndex": 41, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'printerName'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 43, "endIndex": 44, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "keyword.other.abl"] },  // 'RUN'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 18, "scopes": ["source.abl", "entity.name.procedure.abl"] },  // 'pi_edition'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'setChamp'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 14, "endIndex": 21, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'produit'
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.function.arguments.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 24, "endIndex": 31, "scopes": ["source.abl", "meta.function.arguments.abl", "variable.other.abl"] },  // 'produit'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.operator.source.abl"] },  // '+'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 40, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "support.function.abl"] },  // 'string'
      { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 41, "endIndex": 44, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.function.arguments.abl", "constant.numeric.source.abl"] },  // '0x3'
      { "startIndex": 44, "endIndex": 45, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.function-call.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 46, "endIndex": 47, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'END'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'CASE'
      { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
      { "startIndex": 9, "endIndex": 12, "scopes": ["source.abl"] }  // '  '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
