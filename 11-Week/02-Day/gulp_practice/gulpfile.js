var 
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  uglifycss = require('gulp-uglifycss'),
  nodemon = require('gulp-nodemon'),
  browserSync = require('browser-sync')

//gulp.task('test', function(){
//	console.log('Test task is running...')
//})
//gulp.task('default', ['test'], function() {
//	console.log('Default task running..')
//})

gulp.task('minify-css', function() { //concats and minifies
	gulp.src('public-dev/css/*.css')
	  .pipe(concat('application.min.css'))
	  .pipe(uglifycss())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream())
})

gulp.task('minify-js', function() { //concats and minifies
	gulp.src('public-dev/js/*.js')
	  .pipe(concat('application.min.js'))
	  .pipe(uglify())
    .pipe(gulp.dest('public/js'))
})

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: 'http://localhost:3000',
		files: ['public-dev/**/*.*'],   //** means any dir
		browser: 'google chrome',
		port: 7000         //the version on 7000 uses browser sync
	})
})

gulp.task('nodemon', function() { //to also run nodemon in the bg w/gulp
	nodemon({
		ext: 'js html css',         //restart nodemon when these files are changed
		env: {'NODE_ENV': 'development'}  //only do this in development
	})
})

gulp.watch('public-dev/css/*.css', ['minify-css'])
gulp.watch('public-dev/js/*.js', ['minify-js'])

//gulp.task('default', ['nodemon'], function() {
gulp.task('default', ['browser-sync'], function() {
	console.log('Default task running..')
})

