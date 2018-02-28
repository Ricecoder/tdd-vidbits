const {assert} = require('chai');


describe('landing page', () => {
    describe('on first visit', () => {
        it('should not have any videos', () => {
            // setup
            browser.url('/videos');
            // verify
            assert.include(browser.getText('#videos-container'), '');
        });
    });

    describe('a user can navigate to create', () => {
        it('should be able to add a video', () => {
            browser.url('/videos');
            browser.click('#addVideo');

            browser.url('/videos/create');

            assert.include(browser.getText('body'), 'Save a video');
        })
    });
    
    // FIXME: Navigate to create and create a video then test if it is there
    describe('user navigates to page with video', () => {
        it('should display the video in a list', () => {
            browser.url('/videos/create');
            const title = 'Best Video Ever';
            const description = 'Adorable puppies playing';

            browser.setValue('#titleInput', title);
            browser.setValue('#descriptionInput', description);

            browser.click('#submit');
            browser.url('/videos');

            assert.include(browser.getText('#videos-container'), title);
        });
    });
})