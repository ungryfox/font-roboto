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
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/styles',
          src: ['*.css'],
          dest: 'dist/styles',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('dist', [
    'sass:dist',
    'cssmin:dist'
  ]);

  grunt.registerTask('default', 'dist');
};
