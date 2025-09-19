const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addPassthroughCopy("src/**/*.webp");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
