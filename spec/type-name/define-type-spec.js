const { assert, expect } = require('chai');
const shared = require('../shared.js');


describe('', () => {
    let statement = `CLASS foo.bar.baz :`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },
        { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `CLASS foo.bar.baz ABSTRACT:`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },
        { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },
        { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `CLASS foo.bar.baz:`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})



describe('', () => {
    let statement = `ENUM package.type :`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },
        { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 5, "endIndex": 17, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `ENUM package.type   flags :`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },
        { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 5, "endIndex": 17, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 20, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 20, "endIndex": 25, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },
        { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `ENUM package.flagsenum flags:`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },
        { "startIndex": 4, "endIndex": 5, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 5, "endIndex": 22, "scopes": ["source.abl", "meta.define.enum.abl", "entity.name.type.abl"] },
        { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.enum.abl"] },
        { "startIndex": 23, "endIndex": 28, "scopes": ["source.abl", "meta.define.enum.abl", "keyword.other.abl"] },
        { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.enum.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
    let statement = `interface foo.IBar inherits bar.IFoo:`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits.abl", "keyword.other.abl"] },
        { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits.abl"] },
        { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits.abl", "entity.name.type.abl"] },
        { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define-type.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `interface foo.IBar inherits bar.IFoo,baz,IBaz:`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl", "keyword.other.abl"] },
        { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl"] },
        { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl", "entity.name.type.abl"] },
        { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl", "punctuation.separator.comma.abl"] },
        { "startIndex": 37, "endIndex": 40, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl", "entity.name.type.abl"] },
        { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl", "punctuation.separator.comma.abl"] },
        { "startIndex": 41, "endIndex": 45, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl", "entity.name.type.abl"] },
        { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `INTERFACE foo.IBar INHERITS bar.IFoo,baz,IBaz:`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 19, "endIndex": 27, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl", "keyword.other.abl"] },
        { "startIndex": 27, "endIndex": 28, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl"] },
        { "startIndex": 28, "endIndex": 36, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl", "entity.name.type.abl"] },
        { "startIndex": 36, "endIndex": 37, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl", "punctuation.separator.comma.abl"] },
        { "startIndex": 37, "endIndex": 40, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl", "entity.name.type.abl"] },
        { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl", "punctuation.separator.comma.abl"] },
        { "startIndex": 41, "endIndex": 45, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl", "entity.name.type.abl"] },
        { "startIndex": 45, "endIndex": 46, "scopes": ["source.abl", "meta.define-type.abl", "meta.define-type.inherits-implements.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `interface foo.IBar 
    inherits bar.IFoo,
             baz,
             IBaz`;

    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.using.abl"] },
            { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },
            { "startIndex": 18, "endIndex": 20, "scopes": ["source.abl", "meta.using.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.using.abl"] },
            { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },
            { "startIndex": 12, "endIndex": 13, "scopes": ["source.abl", "meta.using.abl"] },
            { "startIndex": 13, "endIndex": 21, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },
            { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "punctuation.terminator.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.using.abl"] },
            { "startIndex": 13, "endIndex": 16, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },
            { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.terminator.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.using.abl"] },
            { "startIndex": 13, "endIndex": 16, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },
            { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.terminator.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.using.abl"] },
            { "startIndex": 13, "endIndex": 17, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] }
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})


describe('', () => {
    let statement = `interface foo.IBar 
    inherits bar.IFoo,
             baz,another.ISpa,thing
             IBaz,
             IYes, Inow 
             :`

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.using.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.using.abl"] },
        { "startIndex": 6, "endIndex": 13, "scopes": ["source.abl", "meta.using.abl", "entity.name.type.abl"] },
        { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] },
        { "startIndex": 14, "endIndex": 16, "scopes": ["source.abl"] },
        { "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.terminator.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "punctuation.terminator.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `CLASS foo.bar.baz ABSTRACT
    
    inherits parent.class 
    implements one.interface,
    anotehr.iface
    
    :`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },
        { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `CLASS foo.bar.baz inherits parent.class 
    implements one.interface,
    anotehr.iface
    abstract 
    use-widget-pool:
      def var x as int.
      `;

    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },
            { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define.class.abl"] },
            { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },
            { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.class.abl"] },
            { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },
            { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.class.abl"] },
            { "startIndex": 27, "endIndex": 39, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },
            { "startIndex": 39, "endIndex": 41, "scopes": ["source.abl", "meta.define.class.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },
            { "startIndex": 4, "endIndex": 14, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },
            { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.class.abl"] },
            { "startIndex": 15, "endIndex": 28, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] },
            { "startIndex": 28, "endIndex": 29, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.separator.comma.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },
            { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.class.abl", "entity.name.type.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },
            { "startIndex": 4, "endIndex": 12, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },
            { "startIndex": 12, "endIndex": 14, "scopes": ["source.abl", "meta.define.class.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.class.abl"] },
            { "startIndex": 4, "endIndex": 19, "scopes": ["source.abl", "meta.define.class.abl", "keyword.other.abl"] },
            { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.class.abl", "punctuation.terminator.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },
            { "startIndex": 6, "endIndex": 9, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.define.abl"] },
            { "startIndex": 10, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "variable.others.abl"] },
            { "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 16, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "keyword.other.abl"] },
            { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl"] },
            { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "meta.define.variable.abl", "storage.type.abl"] },
            { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "punctuation.terminator.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 7, "scopes": ["source.abl"] }
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `CLASS foo.bar.baz serializable inherits parent.class implements one.interface,anotehr.iface abstract use-widget-pool:`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },
        { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `CLASS foo.bar.baz inherits parent.class 
    implements one.interface,
    anotehr.iface
    abstract 
    use-widget-pool serializable
    :`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },
        { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `CLASS foo.bar.baz  use-widget-pool:`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },
        { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `CLASS foo.bar.baz 
     use-widget-pool:`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },
        { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `CLASS foo.bar.baz inherits boo.scoo
     use-widget-pool:`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },
        { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `CLASS foo.bar.baz 
            INheriTS boo.scoo
     use-widget-POOL 
     :`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },
        { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `CLASS foo.bar.baz 
        INheriTS 
            boo.scoo

     :`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },
        { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl"] }
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
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },
        { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `CLASS foo.bar.baz  INheriTS  boo.scoo implements a.b, c.def, ijk :`;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 5, "scopes": ["source.abl", "meta.define-type.abl", "keyword.other.abl"] },
        { "startIndex": 5, "endIndex": 6, "scopes": ["source.abl", "meta.define-type.abl"] },
        { "startIndex": 6, "endIndex": 17, "scopes": ["source.abl", "meta.define-type.abl", "entity.name.type.abl"] },
        { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },
        { "startIndex": 18, "endIndex": 26, "scopes": ["source.abl", "keyword.other.abl"] },
        { "startIndex": 26, "endIndex": 28, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})








