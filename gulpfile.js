const gulp = require('gulp');
const less = require('gulp-less');

/* Tasks */

// Task to compile less
gulp.task('compile-less', () => {
  gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./css/'));
});

// Default Task
gulp.task('default', () => {
  gulp.watch('./less/*.less', ['compile-less']);
});
