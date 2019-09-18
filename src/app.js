const app = {
    isOverlapped: (x1 = 0, x2 = 0, x3 = 0, x4 = 0) => {
        const length1 = Math.abs(x1 - x2);
        const length2 = Math.abs(x3 - x4);
        const start1 = Math.min(x1, x2);
        const start2 = Math.min(x3, x4);
        // A dot cannot overlap another dot or another line... so we have to check that
        if ((!length1) || (!length2)) return false;
        return (start1 < start2) ? ((start1 + length1) > start2) : ((start2 + length2) > start1);
    },

    compareStrings: (string1 = '', string2 = '') => {
        if ((!string1) || (!string2) || isNaN(string1) || isNaN(string2)) {
            return {
                error: true,
                message: 'ERROR: One or more strings could not be converted to a number'
            };
        };

        const parsedNumber1 = Number(string1);
        const parsedNumber2 = Number(string2);

        const message = (parsedNumber1 > parsedNumber2) ? 'First string is greater than Second string' :
            (parsedNumber1 < parsedNumber2) ? 'First string is less than Second string' :
                'First string is equal to Second string';

        return {
            error: false,
            message
        };
    }
};

module.exports = app;
