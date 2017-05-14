'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('sass', function () {
  return gulp.src('./source/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('./dist/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
 
gulp.task('watch', function () {
  gulp.watch('./source/**/*.scss', ['sass', 'minify-css']);
});



gulp.task('default',['watch']);