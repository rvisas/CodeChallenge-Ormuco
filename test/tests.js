const isOverlapped = require('../src/overlapping');
const compareStrings = require('../src/strings');
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

describe('Comparing strings:', () => {
    it('should return ERROR if first and second strings are empty', () => {
        const output = compareStrings("", "");
        expect(output.error).to.equal(true);
        expect(output.message).contains('ERROR');
    });

    it('should return ERROR if first string is empty', () => {
        const output = compareStrings("", "9.75");
        expect(output.error).to.equal(true);
        expect(output.message).contains('ERROR');
    });

    it('should return ERROR if second string is empty', () => {
        const output = compareStrings("9.75", "");
        expect(output.error).to.equal(true);
        expect(output.message).contains('ERROR');
    });

    it('should return ERROR if first string is not a valid number', () => {
        const output = compareStrings("34.(45{%&", "9.75");
        expect(output.error).to.equal(true);
        expect(output.message).contains('ERROR');
    });

    it('should return ERROR if second string is not a valid number', () => {
        const output = compareStrings("9.75", "34.(45{%&");
        expect(output.error).to.equal(true);
        expect(output.message).contains('ERROR');
    });

    it('should return ERROR if neither of the strings are valid numbers', () => {
        const output = compareStrings("__45.123", "34.(45{%&");
        expect(output.error).to.equal(true);
        expect(output.message).contains('ERROR');
    });
    
    it('should return greater than for "10.1" and "9.75"', () => {
        const output = compareStrings("10.1", "9.75");
        expect(output.error).to.equal(false);
        expect(output.message).contains('greater');
    });

    it('should return less than for "9.75" and "10.1"', () => {
        const output = compareStrings("9.75", "10.1");
        expect(output.error).to.equal(false);
        expect(output.message).contains('less');
    });

    it('should return equal to for "11.23" and "11.23"', () => {
        const output = compareStrings("11.23", "11.23");
        expect(output.error).to.equal(false);
        expect(output.message).contains('equal');
    });
});