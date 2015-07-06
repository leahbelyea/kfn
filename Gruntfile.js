module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'css/kfn.css': 'sass/kfn.scss',
        }
      }
    },

    bower_concat: {
      all: {
        dest: 'js/bower.js',
        cssDest: 'css/bower.css',
        bowerOptions: {
          relative: true
        }
      }
    },
    
    uglify: {
      main: {
        src: [
        'js/bower.js',
        'js/kfn.js'
        ],
        dest: 'js/scripts.js'
      },
    },

    concat: {
      css: {
        src: [
        'css/bower.css',
        'css/kfn.css'
        ],
        dest: 'css/styles.css'
      }
    },

    cssmin: {
      target: {
        files: {
          'css/styles.css': ['css/styles.css']
        }
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-bower-concat');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'bower_concat', 'uglify', 'concat', 'cssmin']);

};
