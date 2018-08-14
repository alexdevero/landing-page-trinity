'use strict'

import gulp from 'gulp'
import plumber from 'gulp-plumber'
import prune from 'gulp-prune'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'

// Minify JavaScript files
gulp.task('js', (done) => {
  const browserSync = require('browser-sync')
  const changed = require('gulp-changed')
  const rename = require('gulp-rename')
  const uglify = require('gulp-uglify')

  const jsPath = './dist/js'

  const moduleConfig = {
    entry: './src/js/scripts.js',
    output: {
      filename: 'scripts.js'
    },
    module: {
        loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    }
  }

  const uglifyDropConsole = (process.env.NODE_ENV.trim() !== 'development')

  gulp.src('src/js/scripts.js')
    .pipe(plumber())
    .pipe(prune(jsPath, {
      ext: '.js'
    }))
    .pipe(changed(jsPath))
    .pipe(webpackStream(moduleConfig, webpack))
    .pipe(uglify({
      compress: {
        drop_console: uglifyDropConsole
      }
    }).on('error', (e) => {
      console.log(e + '\r\n There\'s something wrong with the JavaScript file(s).')
    }))
    .pipe(rename({
      basename: 'scripts',
      suffix: '.min'
    }))
    .pipe(gulp.dest(jsPath))
    .pipe(browserSync.stream({
      match: '**/*.js'
    }))

  done()
})

gulp.task('js:test', (done) => {
  const eslint = require('gulp-eslint')

  console.log('Running JavaScript lint test')

  gulp.src('./src/js/scripts.js')
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())

  done()
})
