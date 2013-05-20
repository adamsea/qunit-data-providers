/*jshint node:true */
module.exports = function( grunt ) {

	grunt.loadNpmTasks( "grunt-contrib-jshint" );
	grunt.loadNpmTasks( "grunt-contrib-qunit" );

	grunt.initConfig({
		qunit: {
			all: ["index.html"]
		},
		jshint: {
			options: {
					jshintrc: ".jshintrc"
			},
			all: ["qunit-data-providers.js", "data-providers-test.js"]
		}
	});

	grunt.registerTask("default", ["jshint", "qunit"]);

};
