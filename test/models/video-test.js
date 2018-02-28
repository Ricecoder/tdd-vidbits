// models/video.js
const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');
const Video = require('../../models/video');

async function connectDatabase() {
  await mongoose.connect(databaseUrl, options);
  await mongoose.connection.db.dropDatabase();
}

async function disconnectDatabase() {
  await mongoose.disconnect();
}



describe('Model: Video', () => {
  
  it('has a string title', () => {
    const titleAsAnInteger = 1;
    const video = new Video({title: titleAsAnInteger});
    
    assert.strictEqual(video.title, titleAsAnInteger.toString());
  });
});


module.exports = {
  connectDatabase,
  disconnectDatabase,
}