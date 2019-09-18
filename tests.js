const isOverlapped = require('./question1');
const expect = require('chai').expect;

describe('Overlapping function:', () => {
    it('should return FALSE for two dots: (3,3) and (6,6)', () => {
        expect(isOverlapped(3, 3, 6, 8)).to.equal(false);
    });

    it('should return FALSE for a dot (3,3) and a line (6,8)', () => {
        expect(isOverlapped(3, 3, 6, 8)).to.equal(false);
    });

    it('should return TRUE for the pairs: (1,5) and (2,6)', () => {
        expect(isOverlapped(1, 5, 2, 6)).to.equal(true);
    });

    it('should return TRUE for the inversed pairs: (2,6) and (1,5)', () => {
        expect(isOverlapped(2, 6, 1, 5)).to.equal(true);
    });

    it('should return FALSE for the pairs: (1,5) and (6,8)', () => {
        expect(isOverlapped(1, 5, 6, 8)).to.equal(false);
    });

    it('should return FALSE for the inversed pairs: (6,8) and (1,5)', () => {
        expect(isOverlapped(6, 8, 1, 5)).to.equal(false);
    });

});
