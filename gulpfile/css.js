'use strict'

import gulp from 'gulp'

import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'

// CSS
gulp.task('css', () => {
  const cssPath = './dist/styles'

  return gulp.src('src/styles/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssPath))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }))
})
