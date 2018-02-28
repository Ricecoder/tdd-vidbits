// const {assert} = require('chai');
// const request = require('supertest');
// const app = require('../../app');
// const Video = require('../../models/video');
// const {connectDatabaseAndDropData, disconnectDatabase} = require('../database-utilities');
// const {parseTextFromHTML, seedVideoToDatabase} = require('../test-utils');

// describe('SERVER: Index', () => {
//     beforeEach(connectDatabaseAndDropData);

//     afterEach(disconnectDatabase);

//     describe('GET', () => {
//         it('renders videos', async () => {
//             const video = await seedVideoToDatabase();
//             const response = await request(app)
//                 .get('/videos');

//             assert.include(parseTextFromHTML(response.text, '.video-title'), video.title);
//         });
//     });
// })