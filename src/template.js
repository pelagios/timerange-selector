window.Timegraph.Template = function(w, h) {
  return jQuery(
    '<div class="timehistogram-pane">' +
      '<div class="timehistogram">' +
       '<canvas width="' + w + '" height="' + h + '"></canvas>' +
       '<span class="th-axislabel from"></span>' +
       '<span class="th-axislabel zero">1 AD</span>' +
       '<span class="th-axislabel to"></span>' +

       '<div class="th-selection"></div>' +

       '<div class="th-handle from">' +
         '<div class="label"></div>' +
       '</div>' +

       '<div class="th-handle to">' +
         '<div class="label"></div>' +
       '</div>' +
      '</div>' +
    '</div>');
};
