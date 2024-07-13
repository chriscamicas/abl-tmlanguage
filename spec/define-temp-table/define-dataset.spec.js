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
    { "startIndex": 24, "endIndex": 33, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '{&suffix}'
    { "startIndex": 33, "endIndex": 34, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 34, "endIndex": 37, "scopes": ["source.abl", "meta.define.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 37, "endIndex": 38, "scopes": ["source.abl", "meta.define.abl"] },  // ' '
    { "startIndex": 38, "endIndex": 48, "scopes": ["source.abl", "meta.define.abl", "storage.data.table.abl"] },  // 'eTempTable'
    { "startIndex": 48, "endIndex": 57, "scopes": ["source.abl", "meta.define.abl", "storage.type.function.abl"] },  // '{&suffix}'
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
