module.exports = config => {
      // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/img/');
  //config.addPassthroughCopy('./src/js/');
  config.addPassthroughCopy('./src/styles/assets');
  // Returns work items, sorted by display order
  config.addCollection('designers', collection => {
    return collection
      .getFilteredByGlob('./src/*.md')
      .sort((a, b) => {
        if (a.data.studentFirstName > b.data.studentFirstName) return 1;
        else if (a.data.studentFirstName < b.data.studentFirstName) return -1;
        else return 0;
      });
  });
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);
    return{
        markdownTemplateEngine:'njk',
        dataTemplateEngine:'njk',
        htmlTemplateEngine:'njk',
        dir:{
            input:'src',
            output:'dist'
        }
    };
};