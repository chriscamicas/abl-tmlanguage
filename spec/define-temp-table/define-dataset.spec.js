const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `define dataset dsDataset{&suffix} for eTempTable{&suffix}.`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
    { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'dataset'
    { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 15, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "storage.data.dataset.abl"] },  // 'dsDataset'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 26, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'suffix'
    { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'eTempTable'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '{'
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl", "meta.define.abl", "meta.preprocessor.abl", "punctuation.definition.preprocessor.abl"] },  // '&'
    { "startIndex": 50, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl", "meta.preprocessor.abl", "entity.name.function.preprocessor.abl"] },  // 'suffix'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "meta.preprocessor.abl", "punctuation.section.abl"] },  // '}'
    { "startIndex": 57, "endIndex": 58, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define dataset dsAgentSession for ttAgent, ttAgentSession
    data-relation AgentID for ttAgent, ttAgentSession relation-fields(agentID,agentID) nested.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'dataset'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "storage.data.dataset.abl"] },  // 'dsAgentSession'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 41, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttAgent'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.define.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 42, "endIndex": 43, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 43, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'ttAgentSession'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'data-relation'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "storage.data.dataset.abl"] },  // 'AgentID'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 26, "endIndex": 29, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 30, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttAgent'
      { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 53, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttAgentSession'
      { "startIndex": 53, "endIndex": 54, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 54, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "support.function.abl"] },  // 'relation-fields'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 70, "endIndex": 77, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'agentID'
      { "startIndex": 77, "endIndex": 78, "scopes": ["source.abl", "meta.define.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 78, "endIndex": 85, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'agentID'
      { "startIndex": 85, "endIndex": 86, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 86, "endIndex": 87, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 87, "endIndex": 93, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'nested'
      { "startIndex": 93, "endIndex": 94, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `define dataset dsFoo
    namespace-uri "ns-uri"
    namespace-prefix "ns-prefix"
    xml-node-name "foo"
    // scope (xml-node-type): storage.data.table.abl meta.define.abl source.abl
    // scope (serialize-hidden): 	storage.data.table.abl meta.define.abl source.abl
    serialize-name "foo" xml-node-type "ELEMENT" serialize-hidden
    for ttFoo, ttBar
    // scope (foreign-key-hidden): 	storage.data.table.abl meta.define.abl source.abl
    data-relation dr01 for ttFoo, ttBar relation-fields (FooId, FooId) reposition nested foreign-key-hidden not-active
    // scope (recursive):storage.data.table.abl meta.define.abl source.abl
    data-relation dr02 for ttFoo, ttFoo relation-fields (FooId, FooId) recursive.`;
  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 6, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'define'
      { "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 7, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'dataset'
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "storage.data.dataset.abl"] }  // 'dsFoo'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'namespace-uri'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 19, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'ns-uri'
      { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'namespace-prefix'
      { "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 22, "endIndex": 31, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'ns-prefix'
      { "startIndex": 31, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'xml-node-name'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 19, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'foo'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] }  // '"'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 79, "scopes": ["source.abl", "meta.define.abl", "comment.line.double-slash.abl"] }  // '// scope (xml-node-type): storage.data.table.abl meta.define.abl source.abl'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 83, "scopes": ["source.abl", "meta.define.abl", "comment.line.double-slash.abl"] }  // '// scope (serialize-hidden): 	storage.data.table.abl meta.define.abl source.abl'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'serialize-name'
      { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 19, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 20, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'foo'
      { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 25, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'xml-node-type'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.begin.abl"] },  // '"'
      { "startIndex": 40, "endIndex": 47, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl"] },  // 'ELEMENT'
      { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "string.double.complex.abl", "punctuation.definition.string.end.abl"] },  // '"'
      { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 49, "endIndex": 65, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'serialize-hidden'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 7, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttFoo'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "meta.define.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 15, "endIndex": 20, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] }  // 'ttBar'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 85, "scopes": ["source.abl", "meta.define.abl", "comment.line.double-slash.abl"] }  // '// scope (foreign-key-hidden): 	storage.data.table.abl meta.define.abl source.abl'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'data-relation'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "storage.data.dataset.abl"] },  // 'dr01'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttFoo'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttBar'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "support.function.abl"] },  // 'relation-fields'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 57, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'FooId'
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 64, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'FooId'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 71, "endIndex": 81, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'reposition'
      { "startIndex": 81, "endIndex": 82, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 82, "endIndex": 88, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'nested'
      { "startIndex": 88, "endIndex": 89, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 89, "endIndex": 107, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'foreign-key-hidden'
      { "startIndex": 107, "endIndex": 108, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 108, "endIndex": 118, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] }  // 'not-active'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 74, "scopes": ["source.abl", "meta.define.abl", "comment.line.double-slash.abl"] }  // '// scope (recursive):storage.data.table.abl meta.define.abl source.abl'
    ],
    [
      { "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "meta.define.abl"] },  // '    '
      { "startIndex": 4, "endIndex": 17, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'data-relation'
      { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 18, "endIndex": 22, "scopes": ["source.abl", "meta.define.abl", "storage.data.dataset.abl"] },  // 'dr02'
      { "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 23, "endIndex": 26, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
      { "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 27, "endIndex": 32, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttFoo'
      { "startIndex": 32, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 34, "endIndex": 39, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'ttFoo'
      { "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 40, "endIndex": 55, "scopes": ["source.abl", "meta.define.abl", "support.function.abl"] },  // 'relation-fields'
      { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.js"] },  // '('
      { "startIndex": 57, "endIndex": 62, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'FooId'
      { "startIndex": 62, "endIndex": 63, "scopes": ["source.abl", "meta.define.abl", "punctuation.separator.comma.abl"] },  // ','
      { "startIndex": 63, "endIndex": 64, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 64, "endIndex": 69, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'FooId'
      { "startIndex": 69, "endIndex": 70, "scopes": ["source.abl", "meta.define.abl", "meta.brace.round.js"] },  // ')'
      { "startIndex": 70, "endIndex": 71, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
      { "startIndex": 71, "endIndex": 80, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'recursive'
      { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.define.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
