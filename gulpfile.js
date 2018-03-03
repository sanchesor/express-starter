var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');

gulp.task('js', function() {
	return gulp.src('src/**/*.js')
		.pipe(gulp.dest('build'));
});


gulp.task('ts', function() {
	return gulp.src('src/**/*.ts')
		.pipe(ts({
			noImplicitAny: true}))
		.pipe(gulp.dest('build'));
});

gulp.task('dev', ['ts', 'js'], function() {
	return nodemon({
		script: "build/app.js",
		watch: "src/*",
		ext: "js ts",
		tasks: ['ts', 'js']
	})
})