module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'lib/*.js', 'test/*.js', 'index.js'],
      },

    eslint: {
        options: {
            configFile: '.eslintrc',
        },
        target: ['Gruntfile.js', 'lib/*.js', 'test/*.js', 'index.js']
    },

    mochaTest: {
      test: {
        options: { 
          noFail: true
        },
        src: ['test/*.js']
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'eslint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('test', ['jshint','eslint','mochaTest']);
};