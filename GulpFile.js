var gulp = require('gulp');
var config = require('./_config/config');

// Tasks 
var tasks = ['./_gulpTasks/task.compile-html', './_gulpTasks/task.copy-assets'];

tasks.forEach(function(taskPath) {
    require(taskPath)(gulp, config);
});

gulp.task('watch', function() {
    return gulp.watch([config.templates.root + '/**/*.hbs', config.src + '/**/*'], ['default']);
});

gulp.task('default', ['compile-html', 'copy-assets']);