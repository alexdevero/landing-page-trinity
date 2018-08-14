'use strict'

import gulp from 'gulp'

import requireDir from 'require-dir'

requireDir('./gulpfile/')

const environment = process.env.NODE_ENV
if (environment !== undefined) {
  console.log(`Environment: ${environment}`)
}

// Automate copying
gulp.task('copy:all', gulp.series('copy:css', 'copy:fonts'))

// Builds the website
gulp.task('build:dev', gulp.series('copy:all', 'html', 'images', 'css', 'js'))

// Test task for testing HTML, Sass and JavaScript
gulp.task('test', gulp.series('html:test', 'css:test', 'js:test'))

// Watch HTML, CSS and JavaScript files for changes
gulp.task('watch', () => {
  gulp.watch('./src/*.html', gulp.parallel('html'))
  gulp.watch('./src/styles/**/*.css', gulp.parallel('css'))
  gulp.watch('./src/js/**/*.js', gulp.parallel('js'))
  gulp.watch(['./src/images/**/*', '!./src/images/**/*.rar'], gulp.parallel('images'))
})

// Default task - build website, watch HTML, CSS and JavaScript files for changes and start server
gulp.task('default', gulp.series('build:dev', gulp.parallel('watch', 'browser-sync')))
