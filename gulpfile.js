var gulp = require('gulp');
var browserify = require('browserify');
var stringify = require('stringify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
    var brows = browserify({
        entries: './src/Koboot.ko.js',
        debug: true,
        transform: [stringify(['.html'])]
    });

    return brows.bundle()
        .pipe(source('Koboot.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.*', ['default']);
});