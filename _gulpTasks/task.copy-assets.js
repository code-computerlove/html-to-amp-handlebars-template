module.exports = function(gulp, config) {
    'use strict';


    gulp.task('copy-assets', function() {
    return gulp.src(config.src + '/**/*')
    .pipe(gulp.dest(config.dest.root + '/' + config.dest.client));
    });

}