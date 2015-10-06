'use strict';

module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		eslint: {
			options: {
				config: './config/eslint.json',
				reset: true,
				quiet: true
			},
			target: [
				'./public/**/*.js',
				'./api/**/*.js'
			]
		},
		karma: {
			unit: {
				configFile: 'karma.config.js',
				background: true,
				autoWatch: true
			}, 
			continuous: {
				configFile: 'karma.config.js',
    			singleRun: true,
    			browsers: ['PhantomJS']
			}
		}
	});	

	grunt.loadNpmTasks('grunt-karma');
	grunt.registerTask('default', ['eslint', 'karma']);
};