const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
  let statement = `CLASS foo.bar.baz :`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] } // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz ABSTRACT:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'ABSTRACT'
    { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] } // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz ABSTRACT
    inherits parent.class
    implements one.interface,
    another.iface
    :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'ABSTRACT'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 25, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'parent.class'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'one.interface'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'another.iface'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz inherits parent.class
    implements one.interface,
    another.iface
    abstract
    use-widget-pool:
      def var x as int.
      `;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 39, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'parent.class'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'one.interface'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'another.iface'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'abstract'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl"] },  // '      '
      { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'def'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'var'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "variable.other.abl"] },  // 'x'
      { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 16, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'as'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "storage.type.abl"] },  // 'int'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ],
    [
      { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] }  // '      '
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz serializable inherits parent.class implements one.interface,another.iface abstract use-widget-pool:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 30, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'serializable'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 39, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
    { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 40, "endIndex": 52, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'parent.class'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 53, "endIndex": 63, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
    { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 64, "endIndex": 77, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'one.interface'
    { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 78, "endIndex": 91, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'another.iface'
    { "startIndex": 91, "endIndex": 92, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 92, "endIndex": 100, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'abstract'
    { "startIndex": 100, "endIndex": 101, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 101, "endIndex": 116, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
    { "startIndex": 116, "endIndex": 117, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz inherits parent.class
    implements one.interface,
    another.iface
    abstract
    use-widget-pool serializable
    :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 39, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'parent.class'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'one.interface'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'another.iface'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'abstract'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 32, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'serializable'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz
  implements one.interface,
  another.iface
  inherits parent.class
    abstract
    use-widget-pool serializable
    :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'foo.bar.baz'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.class.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'one.interface'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.separator.comma.abl"] }  // ','
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.class.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 15, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'another.iface'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.class.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 10, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 11, "endIndex": 23, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'parent.class'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'abstract'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 20, "endIndex": 32, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'serializable'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]

  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz  use-widget-pool:`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl"] },  // '  '
    { "startIndex": 19, "endIndex": 34, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
    { "startIndex": 34, "endIndex": 35, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz
     use-widget-pool:`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'foo.bar.baz'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz inherits boo.scoo
     use-widget-pool:`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 35, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] } // 'boo.scoo'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'use-widget-pool'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz
            INheriTS boo.scoo
     use-widget-POOL
     :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'foo.bar.baz'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'INheriTS'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 29, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'boo.scoo'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'use-widget-POOL'
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz
        INheriTS
            boo.scoo

     :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'foo.bar.baz'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.class.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 16, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'INheriTS'
    ],
    [
      { "startIndex": 0, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl"] },  // '            '
      { "startIndex": 12, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'boo.scoo'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.define.class.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl"] },  // '     '
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS
        foo.bar.baz
        INheriTS
        boo.scoo
:`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }  // 'CLASS'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.class.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'foo.bar.baz'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.class.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 16, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] }, // 'INheriTS'
    ],
    [
      { "startIndex": 0, "endIndex": 8, "scopes": ["source.abl", "meta.define.class.abl"] },  // '        '
      { "startIndex": 8, "endIndex": 16, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'boo.scoo'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]


  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `CLASS foo.bar.baz  INheriTS  boo.scoo implements a.b, c.def, ijk :`;

  let expectedTokens = [
    { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'CLASS'
    { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'foo.bar.baz'
    { "startIndex": 17, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl"] },  // '  '
    { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'INheriTS'
    { "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.define.class.abl"] },  // '  '
    { "startIndex": 29, "endIndex": 37, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'boo.scoo'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 48, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 49, "endIndex": 52, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'a.b'
    { "startIndex": 52, "endIndex": 53, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 54, "endIndex": 59, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'c.def'
    { "startIndex": 59, "endIndex": 60, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.separator.comma.abl"] },  // ','
    { "startIndex": 60, "endIndex": 61, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 61, "endIndex": 64, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'ijk'
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
    { "startIndex": 65, "endIndex": 66, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `class Package.SubModule.ClassName
  //inherits JSONSerializer
  serializable:`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'class'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 33, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'Package.SubModule.ClassName'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.class.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl", "comment.line.double-slash.abl"] }  // '//inherits JSONSerializer'
    ],
    [
      { "startIndex": 0, "endIndex": 2, "scopes": ["source.abl", "meta.define.class.abl"] },  // '  '
      { "startIndex": 2, "endIndex": 14, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'serializable'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `class Company.Plugins.ServerPlugin
    inherits AbstractPlugin
    implements IServerPlugin :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'class'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 34, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'Company.Plugins.ServerPlugin'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'AbstractPlugin'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'IServerPlugin'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `class Company.Plugins.ServerPlugin
    inherits FinalAbstractPlugin
    implements IServerPlugin :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'class'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 34, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'Company.Plugins.ServerPlugin'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 32, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'FinalAbstractPlugin'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'IServerPlugin'
      { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `class Company.Plugins.ServerPlugin
    inherits FinalAbstractPlugin
    implements AbstractServerPlugin :`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'class'
      { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 6, "endIndex": 34, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'Company.Plugins.ServerPlugin'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'inherits'
      { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 13, "endIndex": 32, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }  // 'FinalAbstractPlugin'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },  // 'implements'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 35, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },  // 'AbstractServerPlugin'
      { "startIndex": 35, "endIndex": 36, "scopes": ["source.abl", "meta.define.class.abl"] },  // ' '
      { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }  // ':'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})