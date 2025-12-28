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
Part of this grammar is generated from a keyword list file. See [index.js] for information on how to generate that file, as well as the others required for the generation.

When `npm run build` is executed, a file called grammar.json is created, which contains properties for `keywords` (all the keywords), `abl-functions` and `handle-attributes` (attributes and method calls on ABL handles). The contents of this file should be copied into the `abl.tmLanguage.json` file, replacing the existing contents.



# Scopes

The ABL-specific scopes produced by the ABL grammar listed in the table below. The scope names are largely based on the naming conventions at https://macromates.com/manual/en/language_grammars#language_rules and https://www.sublimetext.com/docs/scope_naming.html .

| Scope Name | Used for/by |
| ------------- | ------------- |
|comment.block.source.abl                         | Everything between `/*` and `*/` |
|comment.line.double-slash.abl                    | Everything in a `//` comment, incl slashes |
|comment.preprocessor.analyze-suspend.abl         | `&analyze-suspend`, `&analyze-resume` |
|constant.character.escape.abl                    |  `~` and the next char, or `~` at the end of a line |
|constant.language.abl                            | `today`, `now`, `true`, `false`, `yes`, `no`, `?` (unknown value) |
|constant.language.source.abl                     | `99/99/9999` (or similar) when used as a format clause |
|constant.numeric.source.abl                      | 0x00-0xFF, 0-9, scientific notation |
|entity.name.function.abl                         | Method call, property call, method name, property name, handle attributes, handle methods, event names |
|entity.name.function.preprocessor.abl            | Preprocessor names |
|entity.name.include.abl                          | Include file names |
|entity.name.label.abl                            | Block label names |
|entity.name.package.abl                          | Package names for `using` |
|entity.name.procedure.abl                        | Internal and external procedure names |
|entity.name.tag.abl                              | Annotation names |
|entity.name.type.abl                             | Class/interface/enum names |
|entity.name.type.generic.abl                     | Generic type names |
|entity.other.attribute-name.abl                  | Annotation attribute names |
|keyword.control.directive.conditional.abl        | `&if` , `&else`, `&elsif` `&end` |
|keyword.control.directive.define.abl             | `&scoped-define`, `&global-define`, `&undefine` |
|keyword.operator.source.abl                      | `contains`, `begins`, `matches`, `eq`, `le`, `lt`, `ge`, `gt`, `ne`, `<=`, `<>`, `>=`, `=`, `+`, `-`, `/`, `<`, `>`, `*`, `+=`, `-=`, `/=`, `*=` |
|keyword.other.abl                                | Any ABL keyword (incl those covered by other scopes like `support.function.abl` and `entity.name.function.abl`) |
|punctuation.definition.bracket.square.begin.abl  |  `[` used for array arguments |
|punctuation.definition.bracket.square.end.abl    |  `]` used for array arguments |
|punctuation.definition.generic.begin.abl         |  `<` used for generic type arguments |
|punctuation.definition.generic.end.abl           |  `>` used for generic type arguments |
|punctuation.definition.preprocessor.abl          | Leading `&` of referenced preprocessor and directives |
|punctuation.definition.string.begin.abl          | Start of a quoted string |
|punctuation.definition.string.end.abl            | End of a quoted string |
|punctuation.section.abl                          | `{` and `}` |
|punctuation.separator.comma.abl                  | `,` |
|punctuation.separator.period.abl                 | `.` |
|punctuation.separator.colon.abl                  | `:` |
|punctuation.terminator.abl                       | `.` and `:` |
|storage.data.database.abl                        | Statically-defined database names, e.g.in the `create alias` statement |
|storage.data.dataset.abl                         | Statically-defined dataset names, data-relation names |
|storage.data.table.abl                           | (Temp-)Table names, field names, index names |
|storage.other.opsys-device.abl                   | Files and other operating system devices |
|storage.type.abl                                 | Primitive datatypes |
|storage.type.function.abl                        |  `defined` keyword and preprocessor directives like `&message` |
|string.double.complex.abl                        | String in `"` quotes |
|string.single.complex.abl                        | String in `'` quotes |
|support.function.abl                             | `opsys`, `proversion`, ABL functions (eg `base64-encode`) |
|support.other.abl                                | Translation attributes `:L`, `:R`, `:T`, `:C`, `:U` |
|support.other.argument.abl                       | `&<name\|number>` arguments in includes, preprocessor values |
|variable.language.abl                            | ABL system handles (eg `session` or `this-object`) |
|variable.other.abl                               | Variable names |
|variable.parameter.abl                           | Parameter names in method, function, procedure definition |

There are also a number of 'meta' scopes that usually cover multiple other scopes.
| Scope Name | Used for/by |
| ------------- | ------------- |
|meta.array.literal.abl           | Literal values in an array |
|meta.block.abl                   | A block statement like `do`, `repeat` and ` finally |
|meta.brace.round.js              | `(` and `)`  |
|meta.declaration.annotation.abl  | An annotation from the `@` to the `.`  |
|meta.define.abl                  | An entire `define` statement  |
|meta.define.class.abl            | A class definition, from the `class` keyword to its closing `:`  |
|meta.define.enum.abl             | An enum definition, from the `enum` keyword to its closing `:`  |
|meta.define.function.abl         | A user-defined function definition, from the `function` keyword to its closing `:`  |
|meta.define.interface.abl        | An interface definition, from the `interface` keyword to its closing `:`  |
|meta.define.method.abl           | A method, constructor or destructor definition, from the `method`keyword to the ending `:` or `.` Includes parameter definions, if any.  |
|meta.define.parameter.abl        | An individual parameter definition  |
|meta.define.stream.abl           | A stream definition  |
|meta.define-type.implements.abl  | The type names that a type implements and/or inherits  |
|meta.function.arguments.abl      | Captures what's between ( and ) when calling a function, excluding the braces  |
|meta.function-call.abl           | The name of an ABL function, including `get-class`, `type-of` and `cast`   |
|meta.function.parameters         | Parameter definitions  |
|meta.generic.abl                 | Generic type names  |
|meta.include.abl                 | Include file references, from `{` to `}`  |
|meta.include.argument.abl        | Include argument references like `&arg` and `&arg=` |
|meta.preprocessor.define.abl     | Preprocessor definitions for `&global-define` and `&scoped-define`  |
|meta.procedure.abl               | An internal procedure definition, from the `procedure` keyword to its closing `:` or `.`  |
|meta.statements.abl              | All ABL statmements |
|meta.using.abl                   | A `using` definition |

## Checking scopes
The standard VS Code install includes a command (available via F1 or SHIFT-CTRL-P) named `Developer: Inspect Editor Tokens and Scopes` . This will pop a tooltip showing the scopes at the cursor location. It contains a group called _textmate scopes_ , which shows the current scope. The topmost scope should be in the table above.

# License
MIT
