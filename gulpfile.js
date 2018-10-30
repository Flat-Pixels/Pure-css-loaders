var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');

sass.compiler = require( 'node-sass' );

/*
* Task that compiles the node-sass
*/
gulp.task( 'sass', function() {
  return gulp.src( './sass/**/*.scss' )
    .pipe( sass.sync( { outputStyle: 'expanded' } ).on( 'error', sass.logError ) )
    .pipe( gulp.dest( './css' ) );
});

/*
* Task watching the files
*/
gulp.task( 'sass:watch', [ 'sass' ], function() {
  gulp.watch( './sass/**/*.scss', [ 'sass' ])
});

/*
* Task for auto-prefix the css
*/
gulp.task( 'autoprefixer', function() {
  return gulp.src( './css/**/*.css' )
    .pipe( autoprefixer( { flexbox: true, cascade: false, browsers: [ 'last 2 versions' ] } ) )
    .pipe( gulp.dest( './css' ) );
});

/*
* Task build the old build production version
*/
gulp.task( 'clean-build', function() {
  return gulp.src( './build', {read: false})
        .pipe(clean());
});

/*
* Task build the production version
*/
gulp.task( 'build', [ 'clean-build', 'autoprefixer' ], function() {
  return gulp.src( [ './css/**/*.css', './index.html' ], { base: './' } )
        .pipe( gulp.dest( './build' ) );
});


gulp.task( 'default', [ 'sass:watch' ], function() {
  //Do nothing here
});