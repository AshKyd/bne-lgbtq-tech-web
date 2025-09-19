import { EleventyRenderPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
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
}
