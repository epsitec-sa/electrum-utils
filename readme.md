# Electrum utilities

React components which work with Electrum might need some of the functionality
provided by these utility functions.

* `getTextSelection (element)` &rarr; gets the selection as an object containing
  a `from` and a `to` position. Example selection: `{from: 3, to: 8}`. Cursor
  position without selection: `from: 3, to: 3}`.
