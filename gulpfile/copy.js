'use strict'

import gulp from 'gulp'
import changed from 'gulp-changed'
import plumber from 'gulp-plumber'
import prune from 'gulp-prune'

// Copy CSS files
gulp.task('copy:css', () => {
  const cssPath = './dist/styles'

  return gulp.src(['./src/styles/_vendor/*', './node_modules/modern-normalize/modern-normalize.css'])
    .pipe(plumber())
    .pipe(prune(cssPath))
    .pipe(changed(cssPath))
    .pipe(gulp.dest(cssPath))
})

// Copy font files
gulp.task('copy:fonts', () => {
  const fontsPath = './dist/fonts'

  return gulp.src('./src/fonts/*')
    .pipe(plumber())
    .pipe(prune(fontsPath))
    .pipe(changed(fontsPath))
    .pipe(gulp.dest(fontsPath))
})

// Copy JS plugins files
gulp.task('copy:jsplugins', () => {
  const jsPluginsPath = './dist/js/plugins/'

  return gulp.src([
    './src/js/plugins/*.js',
    './node_modules/vanilla-lazyload/dist/lazyload.min.js',
  ])
    .pipe(plumber())
    .pipe(prune({ dest: jsPluginsPath, ext: ['.js'] }))
    .pipe(changed(jsPluginsPath))
    .pipe(gulp.dest(jsPluginsPath))
})

// Copy other files
gulp.task('copy:other', () => {
  const otherPath = './dist/'

  return gulp.src([
    './src/.htaccess',
    './src/contact.php',
    './src/crossdomain.xml',
    './src/humans.txt',
    './src/robots.txt'
  ])
    .pipe(plumber())
    .pipe(prune({ dest: otherPath, ext: ['.htaccess', '.php', '.txt', '.xml'] }))
    .pipe(changed(otherPath))
    .pipe(gulp.dest(otherPath))
})
