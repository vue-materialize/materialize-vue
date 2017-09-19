/**
 * 生成 Materialize 样式文件
 */
var gulp = require('gulp')
var sass = require('gulp-sass')
var cssmin = require('gulp-cssmin')

gulp.task('compile', function () {
  return gulp.src('../../packages/theme-default/src/**/!(_)*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest('../../packages/theme-default/lib'))
})

gulp.task('copyfont', function () {
  return gulp.src('../../packages/theme-default/src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('../../packages/theme-default/lib/fonts'))
})
gulp.task('build', ['compile', 'copyfont'])
