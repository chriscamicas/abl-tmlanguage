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
This project use the [vscode-textmate](https://www.npmjs.com/package/vscode-textmate) package to tokenize and test the grammar.

## Keywords
Part of this grammar is generated from a keyword list file.
See [index.js].

# License
MIT