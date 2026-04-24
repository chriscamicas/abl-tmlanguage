1.3.29
======

- ✨ Improve scoping for ABL functions that do not always require parentheses (vscode-abl/vscode-abl#520)
- 🐛 Add scoping for query GET statements (vscode-abl/vscode-abl#522)
- 🐛 Scope temp-table fields used as CREATE BUFFER targets correctly (vscode-abl/vscode-abl#529)
- 🐛 Add scoping for include files to function arguments (vscode-abl/vscode-abl#530)
- 🐛 Add support for double-colon notation (vscode-abl/vscode-abl#532)

1.3.27
======

- 🐛 Fix scoping of parameter definition with 'class' in the type name (PR #75)

1.3.26
======

- 🐛 Fix scoping for DELETE PROCEDURE statements (PR #74, issue vscode-abl/vscode-abl#507)

1.3.25
======

- 🐛 Fix scope for VAR CLASS <primitive> to not capture VAR ClassSomething (PR #73, issue vscode-abl/vscode-abl#488)

1.3.24
======

- ✨ Improve scoping for RUN statements (PR #72, issue vscode-abl/vscode-abl#479)

1.3.23
======

- ✨ Improve scoping for RUN statements (PR #71, issue vscode-abl/vscode-abl#479)

1.3.22
======

- ✨ Annotations with dotted names
- ✨ Include file names (UNC path, FQDN, multiple dots, ...)

1.3.21
======
- ✨ Safe navigation operator

1.3.20
======

- 🐛 Fix lookbehinds
- ✨ Add operator scopes to function arguments

1.3.19
======

- ✨ Support comments in USING statements; improve class definition
- ✨ Improve scoping for CREATE BUFFER statement

1.3.18
======

- ✨ Refactoring of preprocessor and string scopes (#65)

1.3.17
======

- ✨ Scientific notation (#64)

1.3.16
======

- 🐛 Addresses syntax highlighting - DO..WHILE loops with long conditions (vscode-abl/vscode-abl#401)
- ✨ Improve closing scope on DEFINE QUERY statement
- ✨ Improve termination of UNDO statement
- ✨ Dataset scoping improvements

1.3.15
======

- 🐛 Fix include paths with more than one \. (vscode-abl/vscode-abl#362)

1.3.14
======

- ✨ Improve DEFINE FRAME scoping
- ✨ Do not end DEFINE statements on decimal point
- ✨ Support comments in index definition
- ✨ Scope of RUN procedure names
- 🐛 Improve scopes for NEW record statement (vscode-abl/vscode-abl#361)
- 🐛 Fix TRIGGER PROCEDURE highlighting (vscode-abl/vscode-abl#361)

1.3.13
======

- ✨ Fix capture for first table in DEFINE BUFFER and CREATE statements
- ⚡️ Use oniguruma-parser/optimizer to optimise the keyword regexes
- 🐛 Abbreviated version of INITIAL (#57)
- 🐛 Procedures names with `.` or `using` (vscode-abl/vscode-abl#325)

1.3.12
======

- Ensure GET and SET in property definitions are case-insensitive. Fix for Syntax highlighting (vscode-abl/vscode-abl#307)
- Support comments in a FOR EACH statement
- Scope functions named GET-VALUE and SET-VALUE correctly
- Support WHILE in FOR EACH
- Allow keywords in parameter arguments
- Limit scope of SET-SIZE function arguments appropriately

1.3.11
======

- Fix CREATE ALIAS highlight (#53)
- Fix IF in variable name (#52)
- Fix scope of ROWID function args
- Allow word breaks (eg commas) before constants

1.3.10
======
- Too many changes to be listed here...

1.2.0
=====
- Added support for classes

1.1.2
=====
- 12.2 keywords
- Include parameters

1.0.1
=====

## Bug fixes
- full primitive type (ex: character) matches only abbrev (ex: char)

1.0.0
=====

## What's new
- Better syntax highlighting (parameter vs variable)
