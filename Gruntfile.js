'use strict';

var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON("pusher-api.json"),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        clean: {
            files: ['dist', 'doc']
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['js/src/<%= pkg.name %>.js'],
                dest: ['dist/<%= pkg.name %>.js']
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        jsdoc : {
            dist : {
                src: ['js/src/**/*.js'],
                options: {
                    destination: 'doc',
                    template: 'node_modules/ink-docstrap/template',
                    config: 'node_modules/ink-docstrap/template/jsdoc.conf.json',
                    options: '--lenient --verbose --recurse --private'
                }
            }
        },
        qunit: {
            files: ['js/test/**/*.html']
        },
        jshint: {
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            src: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: ['js/src/**/*.js']
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['js/test/**/*.js']
            }
        },
        connect: {
            livereload: {
                options: {
                    base: "./", // Gruntfile.js 기준 경로
                    port: 9001,
                    middleware: function (connect, options) {
                        return [lrSnippet, mountFolder(connect, options.base)];
                    }
                }
            }
        },
        // Change port for livereload
        livereload: {
            port: 35729 // default: 35729
        },

        // Configuration to be run (and then tested)
        regarde: {
            style: {
                files: '**/*.css',
                tasks: ['livereload']
            },
            script: {
                files: ['js/*.js', 'js/src/**/*.js'],
                tasks: ['livereload']
            },
            tests : {
                files: ['js/test/**/*.js'],
                tasks: ['mochaTest'],
                spawn: true
            },
            markup: {
                files: ['**/*.html'],
                tasks: ['livereload']
            }
        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    require: 'blanket'
                },
                src: ['js/test/**/*.js']
            },
            coverage: {
                options: {
                    reporter: 'html-cov',
                    // use the quiet flag to suppress the mocha console output
                    quiet: true,
                    // specify a destination file to capture the mocha
                    // output (the quiet option does not suppress this)
                    captureFile: 'js/test/coverage.html'
                },
                src: ['js/test/**/*.js']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-mocha-test');

    // livereload
    grunt.loadNpmTasks('grunt-regarde');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-livereload');

    // jsdoc
    grunt.loadNpmTasks('grunt-jsdoc');

    // livereload for dev
    grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);

    // deploy task.
    grunt.registerTask('deploy', ['jshint', 'qunit', 'clean', 'concat', 'uglify', 'jsdoc']);

};