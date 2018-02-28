const {jsdom} = require('jsdom');
const Video = require('../models/video');


// Create and return a sample Item object
const buildVideo = (options = {}) => {
    const title = options.title || 'My favorite item';
    const description = options.description || 'Just the best item';
    return {title, description};
  };
  
  // Add a sample Item object to mongodb
  const seedVideoToDatabase = async (options = {}) => {
    const video = await Video.create(buildVideo(options));
    return video;
  };

const parseTextFromHTML = (htmlAsString, selector) => {
    const selectedElement = jsdom(htmlAsString).querySelector(selector);
    if (selectedElement !== null) {
      return selectedElement.textContent;
    } else {
      throw new Error(`No element with selector ${selector} found in HTML string`);
    }
  };

module.exports = {
    parseTextFromHTML,
    buildVideo,
    seedVideoToDatabase
};