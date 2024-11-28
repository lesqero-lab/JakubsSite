export default async function(eleventyConfig) {
	eleventyConfig.setInputDirectory("_src");
    eleventyConfig.setIncludesDirectory("_includes");
    eleventyConfig.setOutputDirectory("src");

    eleventyConfig.addPassthroughCopy("_src/scss");
    eleventyConfig.addPassthroughCopy("_src/js");
};