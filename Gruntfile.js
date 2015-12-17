module.exports = function(grunt) {
  grunt.initConfig({
    'local-googlefont': {
      roboto: {
        options: {
          family: 'Roboto',
          sizes: [
            400,
            300,
            500,
            700,
            '400italic'
          ],
          cssDestination: 'src/styles',
          fontDestination: 'dist/fonts'
        }
      }
    },
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
  grunt.loadNpmTasks('grunt-local-googlefont');

  grunt.registerTask('dist', [
    'sass:dist',
    'cssmin:dist'
  ]);

  grunt.registerTask('default', 'dist');
};
