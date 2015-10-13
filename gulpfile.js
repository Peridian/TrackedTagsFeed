var
	gulp = require('gulp')
	, browserify = require('gulp-browserify')
	, del = require('del')
	, paths = {
		scripts: 'src/**/*.js'
	}
	;


gulp.task('clean', function () {
  return del(['bundle.js']);
});

gulp.task("build", ['clean'], function () {
    return gulp.src('index.js')
        .pipe(browserify())
        .pipe(gulp.dest('build'));
});

gulp.task("watch", function () {
    gulp.watch( paths.scripts, ['build']);
});


gulp.task('default',
	[
		'clean',
		'build',
		'watch'
	]);