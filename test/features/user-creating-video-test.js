const {assert} = require('chai');


describe('videos/create', () => {
    describe('a user can add a new video', () => {
        it('should have a form with the appropriate actions', () => {
            browser.url('/videos/create');
            const method = 'post';
            const action = '/videos';

            assert.equal(browser.getAttribute('form', 'method'), method);
            assert.include(browser.getAttribute('form', 'action'), action);
        });
    });
});