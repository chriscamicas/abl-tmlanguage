const { assert, expect } = require('chai');
const shared = require('../shared.js');

describe('', () => {
  let statement = `for each customer fields (name customer.custnum), first order of customer except(comments) no-lock where order.orderdate < today:`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 24, "scopes": ["source.abl", "keyword.other.abl"] },  // 'fields'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 26, "endIndex": 30, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'name'
    { "startIndex": 30, "endIndex": 31, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 31, "endIndex": 47, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer.custnum'
    { "startIndex": 47, "endIndex": 48, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 48, "endIndex": 49, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // ','
    { "startIndex": 49, "endIndex": 50, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 50, "endIndex": 55, "scopes": ["source.abl", "keyword.other.abl"] },  // 'first'
    { "startIndex": 55, "endIndex": 56, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 56, "endIndex": 61, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'order'
    { "startIndex": 61, "endIndex": 62, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 62, "endIndex": 64, "scopes": ["source.abl", "keyword.other.abl"] },  // 'of'
    { "startIndex": 64, "endIndex": 65, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 65, "endIndex": 73, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'customer'
    { "startIndex": 73, "endIndex": 74, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 74, "endIndex": 80, "scopes": ["source.abl", "keyword.other.abl"] },  // 'except'
    { "startIndex": 80, "endIndex": 81, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 81, "endIndex": 89, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'comments'
    { "startIndex": 89, "endIndex": 90, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 90, "endIndex": 91, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 91, "endIndex": 98, "scopes": ["source.abl", "keyword.other.abl"] },  // 'no-lock'
    { "startIndex": 98, "endIndex": 99, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 99, "endIndex": 104, "scopes": ["source.abl", "keyword.other.abl"] },  // 'where'
    { "startIndex": 104, "endIndex": 105, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 105, "endIndex": 120, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'order.orderdate'
    { "startIndex": 120, "endIndex": 121, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 121, "endIndex": 122, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '<'
    { "startIndex": 122, "endIndex": 123, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 123, "endIndex": 128, "scopes": ["source.abl", "constant.language.abl"] },  // 'today'
    { "startIndex": 128, "endIndex": 130, "scopes": ["source.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

describe('', () => {
  let statement = `for each salesrep fields (month_quota[1] month_quota[12]):`;
  let expectedTokens = [
    { "startIndex": 0, "endIndex": 3, "scopes": ["source.abl", "keyword.other.abl"] },  // 'for'
    { "startIndex": 3, "endIndex": 4, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 4, "endIndex": 8, "scopes": ["source.abl", "keyword.other.abl"] },  // 'each'
    { "startIndex": 8, "endIndex": 9, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 9, "endIndex": 17, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'salesrep'
    { "startIndex": 17, "endIndex": 18, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 18, "endIndex": 24, "scopes": ["source.abl", "keyword.other.abl"] },  // 'fields'
    { "startIndex": 24, "endIndex": 25, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.brace.round.js"] },  // '('
    { "startIndex": 26, "endIndex": 40, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'month_quota[1]'
    { "startIndex": 40, "endIndex": 41, "scopes": ["source.abl"] },  // ' '
    { "startIndex": 41, "endIndex": 56, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'month_quota[12]'
    { "startIndex": 56, "endIndex": 57, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
    { "startIndex": 57, "endIndex": 59, "scopes": ["source.abl"] }  // ':'
  ];
  shared.itShouldMatchExpectedScopes(statement, expectedTokens);
})

