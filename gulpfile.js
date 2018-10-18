var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

sass.compiler = require( 'node-sass' );

//Task that compiles the node-sass
gulp.task( 'sass', function() {
  return gulp.src( './sass/**/*.scss' )
    .pipe( sass.sync( { outputStyle: 'expanded' } ).on( 'error', sass.logError ) )
    .pipe( gulp.dest( './css' ) );
});

//Task watching the default tasks
gulp.task( 'sass:watch', [ 'sass' ], function() {
  gulp.watch( './sass/**/*.scss', [ 'sass' ])
})


gulp.task( 'default', [ 'sass:watch' ], function() {
})