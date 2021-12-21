const standard = require('@neutrinojs/standardjs');
const library = require('@neutrinojs/library');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    standard(),
    library({
      name: 'dicebox'
    }),
    jest(),
  ],
};
