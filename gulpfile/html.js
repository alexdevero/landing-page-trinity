'use strict'

import gulp from 'gulp'
import plumber from 'gulp-plumber'

// Minify HTML files
gulp.task('html', (done) => {
  const browserSync = require('browser-sync')
  const changed = require('gulp-changed')
  const htmlmin = require('gulp-htmlmin')
  const prune = require('gulp-prune')

  const htmlPath = './dist'

  gulp.src('src/*.html')
    .pipe(plumber())
    .pipe(prune(htmlPath))
    .pipe(changed(htmlPath))
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true
    }))
    .pipe(gulp.dest(htmlPath))
    .pipe(browserSync.stream({
      match: '**/*.html'
    }))

  done()
})

// Hint HTML files
gulp.task('html:test', (done) => {
  const htmlHint = require('gulp-htmlhint')

  console.log('Running HTML lint test')

  gulp.src('src/*.html')
    .pipe(plumber())
    .pipe(htmlHint())
    .pipe(htmlHint.reporter())
    .pipe(htmlHint.failReporter({
      suppress: false
    }))

  done()
})
