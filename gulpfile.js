var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename =  require('gulp-rename');

var js_src = "public/js/src/**/*.js";
var js_dist = "public/js/dist";
var js_dist_name = "scripts.js";

gulp.task('concatScripts', function(){
    return gulp.src(js_src)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat(js_dist_name))
    .pipe(gulp.dest(js_dist));
})


gulp.task('watch', function(){
    gulp.watch(js_src, gulp.parallel(['concatScripts']));
})
