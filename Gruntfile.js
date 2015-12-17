module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/styles',
          src: ['{,*/}*.scss'],
          dest: 'dist/styles',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', 'sass');
};
