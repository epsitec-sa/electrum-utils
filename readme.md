# Electrum utilities

React components which work with Electrum might need some of the functionality
provided by these utility functions.

* `getTextSelection (element)` &rarr; gets the selection as an object containing
  a `from` and a `to` position. Example selection: `{from: 3, to: 8}`. Cursor
  position without selection: `from: 3, to: 3}`.

* `startsWithLowerCase (string)` &rarr; returns `true` if the text starts with a
  lower case character (**a-z**, no accented characters).

* `startsWithUpperCase (string)` &rarr; returns `true` if the text starts with an
  upper case character (**A-Z**, no accented characters).

