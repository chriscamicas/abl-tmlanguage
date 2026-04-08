let statement = `FIND tt WHERE tt.f1 = "a"
          AND (tt.f2 = "b" OR tt.f2 = "c")
          AND tt.f3 = "d"
        NO-LOCK NO-ERROR.


objREf?:method().
`
let expectedTokens = [
[
{ "startIndex": 0, "endIndex": 4, "scopes": ["source.abl", "keyword.other.abl"] },  // 'FIND'
{ "startIndex": 4, "endIndex": 5, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 5, "endIndex": 7, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tt'
{ "startIndex": 7, "endIndex": 8, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 8, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'WHERE'
{ "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tt.f1'
{ "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
{ "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
{ "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'a'
{ "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
{ "startIndex": 25, "endIndex": 27, "scopes": ["source.abl"] }  //

],
[
{ "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
{ "startIndex": 10, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
{ "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
{ "startIndex": 15, "endIndex": 20, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'tt.f2'
{ "startIndex": 20, "endIndex": 23, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' = '
{ "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
{ "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'b'
{ "startIndex": 25, "endIndex": 26, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
{ "startIndex": 26, "endIndex": 27, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
{ "startIndex": 27, "endIndex": 29, "scopes": ["source.abl", "meta.function.arguments.abl", "keyword.other.abl"] },  // 'OR'
{ "startIndex": 29, "endIndex": 30, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' '
{ "startIndex": 30, "endIndex": 35, "scopes": ["source.abl", "meta.function.arguments.abl", "storage.data.table.abl"] },  // 'tt.f2'
{ "startIndex": 35, "endIndex": 38, "scopes": ["source.abl", "meta.function.arguments.abl"] },  // ' = '
{ "startIndex": 38, "endIndex": 39, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
{ "startIndex": 39, "endIndex": 40, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl"] },  // 'c'
{ "startIndex": 40, "endIndex": 41, "scopes": ["source.abl", "meta.function.arguments.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
{ "startIndex": 41, "endIndex": 42, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
{ "startIndex": 42, "endIndex": 44, "scopes": ["source.abl"] }  //

],
[
{ "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] },  // '          '
{ "startIndex": 10, "endIndex": 13, "scopes": ["source.abl", "keyword.other.abl"] },  // 'AND'
{ "startIndex": 13, "endIndex": 14, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 14, "endIndex": 19, "scopes": ["source.abl", "storage.data.table.abl"] },  // 'tt.f3'
{ "startIndex": 19, "endIndex": 20, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 20, "endIndex": 21, "scopes": ["source.abl", "keyword.operator.source.abl"] },  // '='
{ "startIndex": 21, "endIndex": 22, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 22, "endIndex": 23, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.begin.abl"] },  // '"'
{ "startIndex": 23, "endIndex": 24, "scopes": ["source.abl", "string.quoted.double.abl"] },  // 'd'
{ "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "string.quoted.double.abl", "punctuation.definition.string.end.abl"] },  // '"'
{ "startIndex": 25, "endIndex": 30, "scopes": ["source.abl"] }  //

],
[
{ "startIndex": 0, "endIndex": 8, "scopes": ["source.abl"] },  // '        '
{ "startIndex": 8, "endIndex": 15, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-LOCK'
{ "startIndex": 15, "endIndex": 16, "scopes": ["source.abl"] },  // ' '
{ "startIndex": 16, "endIndex": 24, "scopes": ["source.abl", "keyword.other.abl"] },  // 'NO-ERROR'
{ "startIndex": 24, "endIndex": 25, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
{ "startIndex": 25, "endIndex": 30, "scopes": ["source.abl"] }  //

],
[
{ "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] }  //

],
[
{ "startIndex": 0, "endIndex": 10, "scopes": ["source.abl"] }  //

],
[
{ "startIndex": 0, "endIndex": 6, "scopes": ["source.abl"] },  // 'objREf'
{ "startIndex": 6, "endIndex": 7, "scopes": ["source.abl", "constant.language.abl"] },  // '?'
{ "startIndex": 7, "endIndex": 8, "scopes": ["source.abl", "punctuation.separator.colon.abl"] },  // ':'
{ "startIndex": 8, "endIndex": 14, "scopes": ["source.abl", "entity.name.function.abl"] },  // 'method'
{ "startIndex": 14, "endIndex": 15, "scopes": ["source.abl", "meta.function.arguments.abl", "meta.brace.round.js"] },  // '('
{ "startIndex": 15, "endIndex": 16, "scopes": ["source.abl", "meta.brace.round.js"] },  // ')'
{ "startIndex": 16, "endIndex": 17, "scopes": ["source.abl", "punctuation.terminator.abl"] },  // '.'
{ "startIndex": 17, "endIndex": 27, "scopes": ["source.abl"] }  //

],
[
{ "startIndex": 0, "endIndex": 1, "scopes": ["source.abl"] }  //
],
];
