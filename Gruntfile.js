module.exports = function(grunt) {

 	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			scripts: {
				options: {
					sourceMap: 'js/scripts.js.map',
					sourceMappingURL: 'scripts.js.map',
					sourceMapRoot: '../',
					beautify: {
						max_line_len: 500,
						ie_proof: false
					}
				},
				files: {
					'js/scripts.js': [
						'assets/js/zepto/zepto.js',
						'assets/js/zepto/event.js',
						'assets/js/*.js'
					]
				}
			}
		},
		connect: {
			server: {
				options: {
					keepalive: true,
					hostname: null
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadTasks('tasks');

};