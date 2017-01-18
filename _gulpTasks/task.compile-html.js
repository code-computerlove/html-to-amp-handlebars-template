var rename = require('gulp-rename');
var panini = require('panini');


module.exports = function(gulp, config) {
    'use strict';

    gulp.task('compile-html', function() {

        var options = {
            root: config.templates.root + '/' + config.templates.pages + '/',
            layouts: config.templates.root + '/' + config.templates.layouts + '/',
            partials: config.templates.root + '/' + config.templates.partials + '/',
            data: config.templates.root + '/' + config.templates.data + '/'
        };

        return gulp.src(config.templates.root + '/' + config.templates.pages + '/**/*.hbs')
        .pipe(panini(options))
        .pipe(rename(function(path) {
            path.extname = '.html'
        }))
        .pipe(gulp.dest(config.dest.root));
    })

}