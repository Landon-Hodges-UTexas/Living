module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("breaths/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};