'use strict'

import gulp from 'gulp'
import changed from 'gulp-changed'
import plumber from 'gulp-plumber'
import prune from 'gulp-prune'

// Copy CSS files
gulp.task('copy:css', (done) => {
  const cssPath = './dist/styles'

  gulp.src([
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/bootstrap/dist/css/bootstrap.min.css.map',
    './node_modules/modern-normalize/modern-normalize.css',
    './src/styles/_vendor/*'
  ])
    .pipe(plumber())
    .pipe(prune(cssPath))
    .pipe(changed(cssPath))
    .pipe(gulp.dest(cssPath))

  done()
})

// Copy font files
gulp.task('copy:fonts', (done) => {
  const fontsPath = './dist/fonts'

  gulp.src('./src/fonts/*')
    .pipe(plumber())
    .pipe(prune(fontsPath))
    .pipe(changed(fontsPath))
    .pipe(gulp.dest(fontsPath))

  done()
})
