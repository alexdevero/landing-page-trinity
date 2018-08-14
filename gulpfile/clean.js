'use strict'

import gulp from 'gulp'

// Clean dist
gulp.task('clean', (done) => {
  const rimraf = require('gulp-rimraf')

  console.log('Clean \'dist\' folder')

  gulp.src('./dist/**/*', {
    read: false
  })
    .pipe(rimraf())

  done()
})
