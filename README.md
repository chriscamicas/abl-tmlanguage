# OpenEdge ABL language definition
This is a TextMate grammar for the Progress OpenEdge ABL Language (formerly known as 4GL).

It's used in the [OpenEdge ABL for Visual Studio Code](https://github.com/chriscamicas/vscode-abl) extension.

# Contributing
The main file is abl.tmLanguage.json so contributors should hand-modify this file.

## Tests
Tests are run from the root folder
```
npm install
npm test
```

If you noticed a syntax highlight issue in the VSCode extension, please try to create a failing test case first, and then modify the grammar accordingly.

## Debugging
Clone the https://github.com/microsoft/vscode-textmate repo locally (represented by /path/to/vscode-textmate).

Debug ABL statement(s) using the command below.

```
cd path/to/vscode-textmate
node out/tests/inspect.js /path/to/abl-tmlanguage/abl.tmLanguage.json /path/to/abl-tmlanguage/debug-in.txt > /path/to/abl-tmlanguage/debug-out.txt
```

The `/path/to/abl-tmlanguage/debug-out.txt` file contains the line-by-line resolution of the code using rules defined in the abl-tmlanguage.json file.

# Notes
## VSCode extension
You can test this grammar locally with the associated VSCode extension:
```
git clone git@github.com:chriscamicas/abl-tmlanguage.git
cd abl-tmlanguage
npm link
cd ..
git clone git@github.com:chriscamicas/vscode-abl.git
cd vscode-abl
npm link abl-tmlanguage
```
You can now run and debug the extension from the vscode-abl directory (with the `Launch Extension` task).
Every modification to the abl-tmlanguage project should be reflected in the vscode-abl directory immediately.

See [npm link](https://docs.npmjs.com/cli/link).

## JSON vs plist
This project uses the JSON format over the plist one, mainly because I find it much more readable.

If you prefer the plist format, or the YAML one, there is an extension for VSCode that can convert them:
[TextMate Languages](https://marketplace.visualstudio.com/items?itemName=Togusa09.tmlanguage).

Note: I plan on using the YAML syntax (even more compact and readable) but it needs a build step as VSCode does not handle YAML natively.

## Tokenize
This project uses the [vscode-textmate](https://www.npmjs.com/package/vscode-textmate) package to tokenize and test the grammar.

## Keywords
Part of this grammar is generated from a keyword list file.
See [index.js].

# Scopes

The ABL-specific scopes produced by the ABL grammer listed in the table below. The scope names are largely based on the naming conventions at https://macromates.com/manual/en/language_grammars#language_rules .

| Scope Name | Used for/by |
| ------------- | ------------- |
|comment.block.source.abl                   | Everything between `/*` and `*/` |
|comment.line.double-slash.abl              | Everything in a `//` comment, incl slashes |
|comment.preprocessor.analyze-suspend.abl   | `&analyze-suspend`, `&analyze-resume` |
|constant.character.escape.abl              |  `~` and the next char |
|constant.language.abl                      | `today`, `now`, `true`, `false`, `yes`, `no`, `?` (unknown value) |
|constant.language.source.abl               | `99/99/9999` (or similar) when used as a format clause |
|constant.numeric.source.abl                | 0x00-0xFF, 0-9 |
|entity.name.function.abl                   | Method call, property call, procedure name, method name, property name, handle attributes, handle  methods |
|entity.name.function.preprocessor.abl      | `&scoped-define`, `&global-define` |
|entity.name.package.abl                    | Package names for `USING` |
|entity.name.tag.abl                        | Annotation names |
|entity.name.type.abl                       | Class/interface/enum names |
|entity.name.type.generic.abl               | Generic type names |
|entity.other.attribute-name.abl            | Annotation attribute names |
|keyword.operator.source.abl                | `contains`, `begins`, `matches`, `eq`, `le`, `lt`, `ge`, `gt`, `ne`, `<=`, `<>`, `>=`, `=`, `+`, `-`, `/`, `<`, `>`, `*` |
|keyword.other.abl                          | Any ABL keyword (incl those covered by other scopes) |
|punctuation.definition.string.begin.abl    | Start of a quoted string |
|punctuation.definition.string.end.abl      | End of a quoted string |
|punctuation.section.abl                    | `{` and `}` |
|punctuation.separator.comma.abl            | `,` |
|punctuation.separator.period.abl           | `.` |
|punctuation.separator.colon.abl            | `:` |
|punctuation.terminator.abl                 | `.` and `:` |
|storage.data.table.abl                     | (Temp-)Table names, field names, index names |
|storage.type.abl                           | Primitive datatypes |
|storage.type.function.abl                  | ABL preprocessors, `defined` keyword |
|string.double.complex.abl                  | String in `"` quotes |
|string.single.complex.abl                  | String in `'` quotes |
|support.function.abl                       | `opsys`, `proversion`, ABL functions (eg `BASE64-ENCODE`) |
|support.other.abl                          | `:L`, `:R`, `:T`, `:C`, `:U` |
|support.other.argument.abl                 | `&<name\|number>` arguments in includes, preprocessor values |
|variable.language.abl                      | ABL system handles (eg `session` or `this-object`) |
|variable.other.abl                         | Variable names |
|variable.parameter.abl                     | Parameter names in method, function, procedure definition |

# License
MIT