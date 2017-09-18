window.TimerangeSelector = function(container) {

  var  BAR_STROKE = '#3182bd',

       BAR_FILL = '#6baed6',

       MIN_UPDATE_DELAY = 800,

       MAX_BUCKETS = 46;

      /** Canvas element **/
  var element = TimerangeSelector.Template(container.width(), container.height()).appendTo(container),

      canvas = container.find('canvas'),

      canvasWidth, canvasOffset,

      /** Drawing context - initialize after appending canvas to DOM **/
      ctx,

      /** Selected interval bounds indicator **/
      selectionBounds = container.find('.th-selection'),

      /** Interval handle elements **/
      fromHandle = container.find('.th-handle.from'),
      fromHandleLabel = fromHandle.find('.label'),

      toHandle = container.find('.th-handle.to'),
      toHandleLabel = toHandle.find('.label'),

      /** It's safe to assume that both handles are identical **/
      handleWidth,

      getVal = function(obj) {
        var keys = Object.keys(obj);
        return obj[keys[0]];
      },

      getKey = function(obj) {
        return Object.keys(obj)[0];
      },

      toDate = function(str) {
        var date = new Date(str);

        // Cf. http://scholarslab.org/research-and-development/parsing-bc-dates-with-javascript/
        if (str.indexOf('-') === 0) {
          var year = (str.indexOf('-', 1) < 0) ?
            parseInt(str.substring(1)) : // -YYYY
            parseInt(str.substring(1, str.indexOf('-', 1))); // -YYYY-MM...

          date.setFullYear(-year);
        }

        return date;
      },

      update = function(buckets) {
        if (buckets.length === 0) return;

        var maxValue = Math.max.apply(Math, buckets.map(getVal)),
            minYear = toDate(getKey(buckets[0])),
            maxYear = toDate(getKey(buckets[buckets.length - 1])),
            height = ctx.canvas.height - 1,
            xOffset = 4,
            drawingAreaWidth = ctx.canvas.width - 2 * xOffset,
            barSpacing = Math.round(drawingAreaWidth / buckets.length),
            barWidth = barSpacing - 3;

        ctx.clearRect(0, 0, canvasWidth, ctx.canvas.height);
        buckets.forEach(function(obj) {
          var val = getVal(obj),
              barHeight = Math.round(Math.sqrt(val / maxValue) * height);

          ctx.strokeStyle = BAR_STROKE;
          ctx.fillStyle = BAR_FILL;
          ctx.beginPath();
          ctx.rect(xOffset + 0.5, height - barHeight + 0.5, barWidth, barHeight);
          ctx.fill();
          ctx.stroke();
          xOffset += barSpacing;
        });
      };

    ctx = canvas[0].getContext('2d');
    canvasWidth = canvas.outerWidth(false);
    canvasOffset = (canvas.outerWidth(true) - canvasWidth) / 2;


  this.update = update;

};
