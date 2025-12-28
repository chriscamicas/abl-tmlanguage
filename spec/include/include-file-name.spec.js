const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `{$syssys\\i\\sysvar.i &NEW=NY}`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 1, "endIndex": 19, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] },  // '$syssys\i\sysvar.i'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 24, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&NEW'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] },  // 'NY'
    { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
  ];

  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `{$syssys\\i\\sysvar.i &NEW=NEW}`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 1, "endIndex": 19, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] },  // '$syssys\i\sysvar.i'
    { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 20, "endIndex": 24, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&NEW'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 25, "endIndex": 28, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] },  // 'NEW'
    { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `{ aderes/_arest.i
  &FRAME-NAME = {&FRAME-NAME}
  &HELP-NO    = {&Menu_Editor_Res_Dlg_Box}}
`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 2, "endIndex": 17, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] }  // 'aderes/_arest.i'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&FRAME-NAME'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 18, "endIndex": 28, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'FRAME-NAME'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "punctuation.section.abl"] }  // '}'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 10, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&HELP-NO'
      { "startIndex": 10, "endIndex": 14, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl"] },  // '    '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 18, "endIndex": 41, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'Menu_Editor_Res_Dlg_Box'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement =
    `{ _arest.i
  &FRAME-NAME = {&FRAME-NAME}
  &HELP-NO    = {&Menu_Editor_Res_Dlg_Box}}
`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 1, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 2, "endIndex": 10, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] }  // '_arest.i'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 13, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&FRAME-NAME'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 18, "endIndex": 28, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'FRAME-NAME'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "punctuation.section.abl"] }  // '}'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 10, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&HELP-NO'
      { "startIndex": 10, "endIndex": 14, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl"] },  // '    '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
      { "startIndex": 18, "endIndex": 41, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'Menu_Editor_Res_Dlg_Box'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.include.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `{silly.i
  &co=/*
  &cc=*/
  &int=13
  &NEW=OLD
  &lc=//
}`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 1, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] }  // 'silly.i'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&co'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] }  // '/*'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&cc'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&int'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 7, "endIndex": 9, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] }  // '13'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 6, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&NEW'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 7, "endIndex": 10, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] }  // 'OLD'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&lc'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] }  // '//'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `{silly.i
  &co=/*
  &cc=*/

  /*
  &int=13
  &NEW=OLD
  */

  &lc=//
}`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
      { "startIndex": 1, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] }  // 'silly.i'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&co'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] }  // '/*'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&cc'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "meta.include.abl", "comment.block.source.abl"] }  // '/*'
    ],
    [
      { "startIndex": 0, "endIndex": 10, "scopes": ["source.abl", "meta.include.abl", "comment.block.source.abl", "comment"] }  // '  &int=13'
    ],
    [
      { "startIndex": 0, "endIndex": 11, "scopes": ["source.abl", "meta.include.abl", "comment.block.source.abl", "comment"] }  // '  &NEW=OLD'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl", "comment.block.source.abl", "comment"] },  // '  '
      { "startIndex": 2, "endIndex": 4, "scopes": ["source.abl", "meta.include.abl", "comment.block.source.abl"] }  // '*/'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.include.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 5, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&lc'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
      { "startIndex": 6, "endIndex": 8, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] }  // '//'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('UNC path, FQDN, and multiple dots in the filename', () => {
  // see: https://github.com/vscode-abl/vscode-abl/issues/362
  let statement = `{\\\\fileserver.corp.company.com\\shared\\data\\config.backup.2024.07.29.i &DEBUG=TRUE}`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 1, "endIndex": 69, "scopes": ["source.abl", "meta.include.abl", "entity.name.include.abl"] },  // '\\fileserver.corp.company.com\shared\data\config.backup.2024.07.29.i'
    { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.include.abl"] },  // ' '
    { "startIndex": 70, "endIndex": 76, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "support.other.argument.abl"] },  // '&DEBUG'
    { "startIndex": 76, "endIndex": 77, "scopes": ["source.abl", "meta.include.abl", "meta.include.argument.abl", "keyword.operator.source.abl"] },  // '='
    { "startIndex": 77, "endIndex": 81, "scopes": ["source.abl", "meta.include.abl", "support.other.argument.abl"] },  // 'TRUE'
    { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.include.abl", "punctuation.section.abl"] }  // '}'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
});
