const router = require('express').Router();
const Video = require('../models/video');


router.get('/videos', async (req, res, next) => {
    const videos = await Video.find({});
    res.render('videos/index', {videos});
});

router.get('/videos/create', async (req, res, next) => {
    res.render('videos/create')
});

router.post('/videos', async (req, res) => {
    
    try {
        const title = req.body.title;
        const description = req.body.description;
        const createdVideo = await Video.create({title, description});
        res.status(201)
        .render('videos/show', {createdVideo: createdVideo})
        
    } catch (error) {
        console.log(error);
    }
  });

module.exports = router;