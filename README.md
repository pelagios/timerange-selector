# Peripleo Timerange Selector

The timerange selection widget from Peripleo. To see it in action, clone this repository and open
the file `index.html` in your browser.

## Usage

HTML
```html
<html>
  <head></head>
  <body>
    <div id="my-selector"></div>
  </body>
</html>
```

```javascript
// The histogram data: an array of key/values, where the key is the year (integer) the
// bin starts, and the value is the count in the bin
var data = [
  { "1900" : 1  },  
  { "1910" : 2  },  
  { "1920" : 3  },  
  { "1930" : 7  },  
  { "1940" : 4  },  
  { "1950" : 1  },  
  { "1960" : 3  },  
  { "1970" : 2  },  
  { "1980" : 8  },  
  { "1990" : 6  },  
  { "2000" : 5  },
  { "2010" : 1  }
];

var t = new TimerangeSelector(document.getElementById('my-selector')));
t.update(data);
```

## TODO

At the moment: too much to list. Some major burning issues I can think of now are:

- Find a good way to organize the codebase and build minified JS (and CSS). Perhaps using
  [Gulp](https://gulpjs.com/)? (In Peripleo, namespacing and module loading was handled
  via Require.js. Alternatives?)
- Re-enable events
- Should we remove jQuery dependency? The only major issue will be to re-implement touch-compatible
  drag behavior... remaining jQuery use should be easy to eliminate if desired
- Fix various quirks in the UI (overlapping handle labels etc.)
- Proper instantiation with a config object to control appearance etc.
- Support dates, not just integer years
- Implement properly working resampling in case the number of bins in the input data is larger
  than what can be displayed
- ...
