// module.exports = function(eleventyConfig) {
// 	return {
	//   markdownTemplateEngine: "hbs",
	//   htmlTemplateEngine: "hbs",
	//   dataTemplateEngine: "hbs"
// 	}
//   };

module.exports = function(eleventyConfig) {
	let handlebars = require("handlebars");
	eleventyConfig.setLibrary("hbs", handlebars);

	return {
		dir: {
			input: "./",
			includes: "includes"
		},
		markdownTemplateEngine: "hbs",
		htmlTemplateEngine: "hbs",
		dataTemplateEngine: "hbs"
	}
};