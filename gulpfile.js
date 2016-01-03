var gulp    = require('gulp');
var gutil   = require('gulp-util');
var uglify  = require('gulp-uglify');
var sass    = require('gulp-sass');
var watch   = require('gulp-watch');

gulp.task('scripts', function() {
  return gulp.src(['src/js/**/*.js'])
             .pipe(uglify())
             .pipe(gulp.dest('js'));
});

gulp.task('sass', function() {
  return gulp.src(['src/sass/**/*.scss'])
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch(['src/js/**/*.js', 'src/sass/**/*.scss'], ['scripts', 'sass']);
});
