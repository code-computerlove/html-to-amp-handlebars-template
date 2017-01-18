module.exports = function() {
    return {
        src: '_source',
        dest: {
            root: 'build',
            client: '_client'    
        },
        templates: {
            root: 'views',
            pages: '_pages',
            layouts: '_layouts',
            partials: '_partials',
            data: '_data'
        }
    }
}();