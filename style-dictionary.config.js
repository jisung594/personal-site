module.exports = {
  source: ['tokens-simple.json'],
  
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
  },
};
