
const path = require('path');

module.exports = {
  title: 'Default Style Guide',
  exampleMode: 'expand',
  copyCodeButton: true,
  require: [
    path.join(__dirname, './src/styles/style.scss'),
  ],
};
