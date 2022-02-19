const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('flux/**/*.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(dest('css'))
}

function watchTask() {
    watch(['flux/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)