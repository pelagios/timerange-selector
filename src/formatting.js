window.TimerangeSelector.Formatting = {

  formatYear : function(dateOrYear) {
    var year = (dateOrYear instanceof Date) ? dateOrYear.getFullYear() : parseInt(dateOrYear);
    if (year < 0) return -year + ' BC'; else return year + ' AD';
  }

};
