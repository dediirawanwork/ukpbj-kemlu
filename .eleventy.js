module.exports = function (eleventyConfig) {
    // Return your Object options:
  
    eleventyConfig.addPassthroughCopy("./src/assets/css/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/admin");
  
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };
  