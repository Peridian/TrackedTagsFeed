var
    gulp                = require('gulp')
    , browserify        = require('gulp-browserify')
    , del               = require('del')
    , sourcemaps        = require('gulp-sourcemaps')
    , paths             = {
        scripts : 'src/**/*.js'
        , build   : 'build'
    }
    ;

gulp.task('clean', function () {
    return del(['bundle.js']);
});

gulp.task("build", ['clean'], function () {
    return gulp.src('index.js')
        .pipe(sourcemaps.init())
        .pipe(browserify({ debug: true }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.build));
});

gulp.task("watch", function () {
    gulp.watch(paths.scripts, ['build']);
});

gulp.task('default',
    [
        'clean',
        'build',
        'watch'
    ]);