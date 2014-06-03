/*!
 * symfony-dazorni-standard Gruntfile
 */
module.exports = function(grunt){

    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        less: {
            compileCore: {
                options: {
                    strictMath: true,
                    noColor: true,
                    outputSourceFiles: true
                },
                files: {
                    'web/public/css/<%= pkg.name %>.css': 'app/Resources/public/less/bootstrap.less'
                }
            },
            minify: {
                options: {
                    cleancss: true,
                    report: 'min'
                },
                files: {
                    'web/public/css/<%= pkg.name %>.min.css': 'web/public/css/<%= pkg.name %>.css'
                }
            }
        },

        watch: {
            less: {
                files: '**/*.less',
                tasks: ['less']
            }
        },
        
        uglify: {
            js: {
              files: {
                files: '**/*.js',
                tasks: ['uglify']
              }
            }
        }
    });

    grunt.registerTask('buildless',  ['less']);
    grunt.registerTask('default', ['buildless']);
    grunt.registerTask('minify', ['uglify']);
};
