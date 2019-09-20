const app = require('../src/app');
const expect = require('chai').expect;

describe('Overlapping function:', () => {
    it('should return FALSE for two dots: (3,3) and (6,6)', () => {
        expect(app.isOverlapped(3, 3, 6, 8)).to.equal(false);
    });

    it('should return FALSE for a dot (3,3) and a line (6,8)', () => {
        expect(app.isOverlapped(3, 3, 6, 8)).to.equal(false);
    });

    it('should return TRUE for the pairs: (1,5) and (2,6)', () => {
        expect(app.isOverlapped(1, 5, 2, 6)).to.equal(true);
    });

    it('should return TRUE for the inversed pairs: (2,6) and (1,5)', () => {
        expect(app.isOverlapped(2, 6, 1, 5)).to.equal(true);
    });

    it('should return FALSE for the pairs: (1,5) and (6,8)', () => {
        expect(app.isOverlapped(1, 5, 6, 8)).to.equal(false);
    });

    it('should return FALSE for the inversed pairs: (6,8) and (1,5)', () => {
        expect(app.isOverlapped(6, 8, 1, 5)).to.equal(false);
    });

});

describe('Comparing strings:', () => {
    it('should return Error if first and second strings are empty', () => {
        expect(app.compareStrings("", "")).to.equal('Error');
    });

    it('should return Error if first string is empty', () => {
        expect(app.compareStrings("", "9.75")).to.equal('Error');
    });

    it('should return Error if second string is empty', () => {
        expect(app.compareStrings("9.75", "")).to.equal('Error');
    });

    it('should return Error if first string is not a valid number', () => {
        expect(app.compareStrings("34.(45{%&", "9.75")).to.equal('Error');
    });

    it('should return Error if second string is not a valid number', () => {
        expect(app.compareStrings("9.75", "34.(45{%&")).to.equal('Error');
    });

    it('should return Error if neither of the strings are valid numbers', () => {
        expect(app.compareStrings("__45.123", "34.(45{%&")).to.equal('Error');
    });

    it('should return 1 (Greater) for "10.1" and "9.75"', () => {
        expect(app.compareStrings("10.1", "9.75")).to.equal(1);
    });

    it('should return -1 (Less) for "9.75" and "10.1"', () => {
        expect(app.compareStrings("9.75", "10.1")).to.equal(-1);
    });

    it('should return 0 (Equal) for "11.23" and "11.23"', () => {
        expect(app.compareStrings("11.23", "11.23")).to.equal(0);
    });
});
