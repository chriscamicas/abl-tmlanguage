const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
    let statement =
`procedure procName:

end procedure.`;

    let expectedTokens = [
        [
            { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.procedure.abl", "keyword.other.abl"] },
            { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.procedure.abl"] },
            { "startIndex": 10, "endIndex": 18, "scopes": ["source.abl", "meta.procedure.abl", "entity.name.function.abl"] },
            { "startIndex": 18, "endIndex": 19, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 1, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl"] }
        ],
        [
            { "startIndex": 0, "endIndex": 13, "scopes": ["source.abl", "meta.procedure.abl", "meta.procedure.body.abl", "keyword.other.abl"] },
            { "startIndex": 13, "endIndex": 14, "scopes": ["source.abl", "punctuation.terminator.abl"] }
        ]
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
