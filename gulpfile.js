var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    es = require('event-stream');

var src = 'src/**/*.js',
    dest = 'dist';

gulp.task('scripts', function() {
  var js = gulp.src(src)
    .pipe(concat('timerange-selector.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('timerange-selector.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));

  var font = gulp.src('src/griphandle.ttf')
    .pipe(gulp.dest('dist'));

  var css = gulp.src('src/timerange-selector.css')
    .pipe(cleanCSS())
    .pipe(rename('timerange-selector.min.css'))
    .pipe(gulp.dest('dist'));

  return es.concat(js, font, css);
});

gulp.task('default', ['scripts'], function() {});
