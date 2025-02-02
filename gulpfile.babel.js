import gulp from 'gulp';
// import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

const sass = require('gulp-sass')(require('sass'));

function buildCSS() {
    return (
        gulp.src('./src/scss/index.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCSS())
            .pipe(rename('index.css'))
            .pipe(gulp.dest('./src/css'))
    );
}

const dist = gulp.series(buildCSS);

export {
    dist
}

export default dist;
