'use strict'

const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const vfs = require('vinyl-fs')

module.exports = (files) => (done) =>
  vfs
    .src(files)
    .pipe(concat('sass.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(vfs.dest('src/css/vendor'))
