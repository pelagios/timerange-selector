# Peripleo Timerange Selector

The timerange selection widget from Peripleo. To see it in action, clone this repository and open
the file `index.html` in your browser.

## TODO

At the moment: too much to list. Some major burning issues I can think of now are:

- Find a good way to organize the codebase and build minified JS (and CSS). Perhaps using
  [Gulp](https://gulpjs.com/)? (In Peripleo, namespacing and module loading was handled
  via Require.js. Alternatives?)
- Support dates, not just integer years
- Fix various quirks in the UI (overlapping handle labels etc.)
- Implement properly working resampling in case the number of bins in the input data is larger
  than what can be displayed
- ...
