'use strict'

import gulp from 'gulp'

import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import prune from 'gulp-prune'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'

// CSS
gulp.task('css', (done) => {
  const cssPath = './dist/styles'

  gulp.src('src/styles/styles.css')
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

  done()
})
