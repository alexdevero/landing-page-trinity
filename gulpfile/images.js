'use strict'

import gulp from 'gulp'

// Compress images
gulp.task('images', (done) => {
  const changed = require('gulp-changed')
  const imagemin = require('gulp-imagemin')
  const plumber = require('gulp-plumber')
  const pngquant = require('imagemin-pngquant')
  const prune = require('gulp-prune')

  gulp.src(['src/images/**/*', '!src/images/**/*.rar'])
    .pipe(plumber())
    .pipe(prune('./dist/images'))
    .pipe(changed('dist/images'))
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 3 // https://github.com/imagemin/imagemin-optipng
      }),
      imagemin.svgo({
        plugins: [{
          removeViewBox: false
        }]
      }),
      pngquant({quality: '70'})
    ]))
    .pipe(gulp.dest('dist/images'))

  done()
})
