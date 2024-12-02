import { EleventyI18nPlugin } from "@11ty/eleventy";
export default async function(eleventyConfig) {
	eleventyConfig.setInputDirectory("_src");
    eleventyConfig.setIncludesDirectory("_includes");
    eleventyConfig.setOutputDirectory("src");

    eleventyConfig.addPlugin(EleventyI18nPlugin, {
		// any valid BCP 47-compatible language tag is supported
		defaultLanguage: "en", // Required, this site uses "en"
	});

    eleventyConfig.addPassthroughCopy("_src/scss");
    eleventyConfig.addPassthroughCopy("_src/js");
    eleventyConfig.addPassthroughCopy("_src/fonts");
    eleventyConfig.addPassthroughCopy("_src/img");

    
};