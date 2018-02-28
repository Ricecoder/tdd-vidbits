const {assert} = require('chai');
const request = require('supertest');
const app = require('../../app');
const Video = require('../../models/video');
const {connectDatabaseAndDropData, disconnectDatabase} = require('../database-utilities');
const {parseTextFromHTML, seedVideoToDatabase} = require('../test-utils');


describe('Server path: /videos', () => {
    beforeEach(connectDatabaseAndDropData);

    afterEach(disconnectDatabase);
    

    describe('POST: create video', () => {
        beforeEach(connectDatabaseAndDropData);

        afterEach(disconnectDatabase);

        it('should return a 201', async () => {
            const title = 'Puppies';
            const description = 'Cute puppies!';
            const videoToCreate = {title: title, description: description};
            
            const response = await request(app)
                .post('/videos')
                .type('form')
                .send(videoToCreate);
                
            // console.log(response.body);
            assert.equal(response.status, 201);
        });

        it('should create a video with a title and description', async () => {

            const videoToCreate = {title: 'puppies', description: 'Lots of puppies'};

            const response = await request(app)
                .post('/videos')
                .type('form')
                .send(videoToCreate);
            
            const createdVideo = await Video.findOne(videoToCreate);

            assert.equal(createdVideo.title, videoToCreate.title);
            assert.equal(createdVideo.description, videoToCreate.description);
        });

        it('should respond with the video details', async () => {
            const title = 'More puppies';
            const description = 'Lots and lots of puppies';
            const videoToCreate = {title: title, description: description};
            // const createdHTML = `<h1>${title}</h1>
            //                      <p>${description}</p>`;

            const response = await request(app)
                .post('/videos')
                .type('form')
                .send(videoToCreate);


            assert.include(response.text, videoToCreate.title);
            assert.include(response.text, videoToCreate.description);
        });
    });

    describe('GET: videos', () => {
        beforeEach(connectDatabaseAndDropData);

        afterEach(disconnectDatabase);
        
        it('renders videos', async () => {
            const video = await seedVideoToDatabase();

            const response = await request(app)
                .get('/videos');

            console.log(response.text);
            assert.include(parseTextFromHTML(response.text, '.video-title'), video.title);
        });
    });

})