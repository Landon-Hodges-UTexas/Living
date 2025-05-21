module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("breaths/*.md");
  });

  eleventyConfig.addFilter("readSupplementalFile", function(filePath) {
    if (!filePath) return "";
    
    // Resolve the path - you may need to adjust this depending on your project structure
    const fullPath = path.join(__dirname, filePath);
    
    try {
      if (fs.existsSync(fullPath)) {
        return fs.readFileSync(fullPath, 'utf8');
      }
      console.warn(`Supplemental file not found: ${fullPath}`);
      return "";
    } catch (err) {
      console.error(`Error reading supplemental file ${fullPath}:`, err);
      return "";
    }
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};