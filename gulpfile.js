var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();

/*********************** LESS ***********************/
gulp.task('less-clean', function() {
    return gulp.src('css/*.css', { read: false })
        .pipe($.rimraf());
});

gulp.task('less', ['less-clean'], function () {
    return gulp.src('less/ovrly.less')
        .pipe($.less())
        .pipe($.minifyCss({ keepSpecialComments : false }))
        .pipe($.cssbeautify({ autosemicolon : true }))
        .pipe(gulp.dest('css'))
        .pipe($.minifyCss())
        .pipe($.rename({ suffix : '.min' }))
        .pipe(gulp.dest('css'));
});

/*********************** WATCH ***********************/
gulp.task('watch', function () {
    gulp.watch('less/*.less', ['less']);
});

/************** DEFAULT **************/
gulp.task('default', [
    'less',
    'watch'
]);