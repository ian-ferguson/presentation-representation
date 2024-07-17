module.exports = config => {
      // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/img/');
  //config.addPassthroughCopy('./src/js/');
  config.addPassthroughCopy('./src/styles/assets');
  // Returns work items, sorted by display order
  config.addCollection('designers', collection => {
    return collection
      .getFilteredByGlob('./src/designers/*.md')
      .sort((a, b) => (Number(a.data.studentLastName) > Number(b.data.studentLastName) ? 1 : -1));
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