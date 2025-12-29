const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement =
    `procedure 'TpFrame.TaskPanel.ItemClick':U:

end procedure.`;

  let expectedTokens = [
    [
      { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "keyword.other.abl"] },  // 'procedure'
      { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.begin.abl"] },  // '''
      { "startIndex": 11, "endIndex": 38, "scopes": ["source.abl", "string.quoted.single.abl"] },  // 'TpFrame.TaskPanel.ItemClick'
      { "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "string.quoted.single.abl", "punctuation.definition.string.end.abl"] },  // '''
      { "startIndex": 39, "endIndex": 41, "scopes": ["source.abl", "string.quoted.single.abl", "support.other.abl"] },  // ':U'
      { "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // ':'
    ],
    [
      { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  // ''
    ],
    [
      { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'end'
      { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
      { "startIndex": 4, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'procedure'
      { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] }  // '.'
    ]
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
