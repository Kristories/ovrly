var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();

/*********************** LESS ***********************/
gulp.task('less-clean', function() {
    return gulp.src('build/less/*.css', { read: false })
        .pipe($.rimraf());
});

gulp.task('less', ['less-clean'], function () {
    return gulp.src('less/ovrly.less')
        .pipe($.less())
        .pipe($.minifyCss({ keepSpecialComments : false }))
        .pipe($.cssbeautify({ autosemicolon : true }))
        .pipe(gulp.dest('build/less'))
        .pipe($.minifyCss())
        .pipe($.rename({ suffix : '.min' }))
        .pipe(gulp.dest('build/less'));
});

/*********************** SASS ***********************/
gulp.task('sass-clean', function() {
    return gulp.src('build/sass/*.css', { read: false })
        .pipe($.rimraf());
});

gulp.task('sass', ['sass-clean'], function () {
    return gulp.src('sass/ovrly.scss')
        .pipe($.sass())
        .pipe($.minifyCss({ keepSpecialComments : false }))
        .pipe($.cssbeautify({ autosemicolon : true }))
        .pipe(gulp.dest('build/sass'))
        .pipe($.minifyCss())
        .pipe($.rename({ suffix : '.min' }))
        .pipe(gulp.dest('build/sass'));
});

/*********************** WATCH ***********************/
gulp.task('watch', function () {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('sass/*.scss', ['sass']);
});

/************** DEFAULT **************/
gulp.task('default', [
    'less',
    'sass',
    'watch'
]);
