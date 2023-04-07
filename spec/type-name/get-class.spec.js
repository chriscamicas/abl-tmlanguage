const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
    let statement = `GET-CLASS(foo.bar.baz) `;
    
    let expectedTokens = [
        { "startIndex": 0, "endIndex": 9,   "scopes": ["source.abl", "meta.function-call.get-class.abl", "entity.name.function.abl"] },
        { "startIndex": 9, "endIndex": 10,  "scopes": ["source.abl", "meta.function-call.get-class.abl", "meta.brace.round.js"] },
        { "startIndex": 10, "endIndex": 21, "scopes": ["source.abl", "meta.function-call.get-class.abl", "entity.name.type.abl"] },
        { "startIndex": 21, "endIndex": 22, "scopes": ["source.abl", "meta.function-call.get-class.abl", "meta.brace.round.js"] },        
        { "startIndex": 22, "endIndex": 24, "scopes": ["source.abl"] }        
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
    let statement = `GET-CLASS ( foo.bar.baz ) `;

    let expectedTokens = [
        { "startIndex": 0, "endIndex": 9, "scopes": ["source.abl", "meta.function-call.get-class.abl", "entity.name.function.abl"] },
        { "startIndex": 9, "endIndex": 10, "scopes": ["source.abl", "meta.function-call.get-class.abl"] },
        { "startIndex": 10, "endIndex": 11, "scopes": ["source.abl", "meta.function-call.get-class.abl", "meta.brace.round.js"] },
        { "startIndex": 11, "endIndex": 12, "scopes": ["source.abl", "meta.function-call.get-class.abl"] },
        { "startIndex": 12, "endIndex": 23, "scopes": ["source.abl", "meta.function-call.get-class.abl", "entity.name.type.abl"] },
        { "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function-call.get-class.abl"] },
        { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function-call.get-class.abl", "meta.brace.round.js"] },
        { "startIndex": 25, "endIndex": 27, "scopes": ["source.abl"] }
    ];
    shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})
