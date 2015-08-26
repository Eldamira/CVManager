'use strict';

module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		eslint: {
			options: {
				config: './config/eslint.json',
				reset: true
			},
			target: [
				'./public/**/*.js',
				'./api/**/*.js'
			]
		}
	});	

	grunt.registerTask('default', ['eslint']);
};