const app = {
    isOverlapped: (x1 = 0, x2 = 0, x3 = 0, x4 = 0) => {
        const length1 = Math.abs(x1 - x2);
        const length2 = Math.abs(x3 - x4);
        const start1 = Math.min(x1, x2);
        const start2 = Math.min(x3, x4);
        
        // A dot cannot overlap another dot or another line... so we have to check that
        if ((!length1) || (!length2))
            return false;

        return (start1 < start2) ? ((start1 + length1) > start2) : ((start2 + length2) > start1);
    },

    // Returns -1 if string1 < string2;
    // Returns 0 if string1 = string2;
    // Returns 1 if string1 > string2;
    compareStrings: (string1 = '', string2 = '') => {
        if (!app.validStrings(string1, string2))
            return 'Error';

        const numbers1 = string1.split('.').map(x => Number(x));
        const numbers2 = string2.split('.').map(x => Number(x));

        let result = 0;
        while (numbers1.length && numbers2.length) {
            if (numbers1[0] > numbers2[0]) result = 1;
            if (numbers1[0] < numbers2[0]) result = -1;
            if (result) break;
            numbers1.shift();
            numbers2.shift();
        };

        if (!result) {
            result = numbers1.length ? 1 : numbers2.length ? -1 : 0;            
        }

        return result;
    },

    validStrings: (s1, s2) => {
        const re = /^(\d{1,2})(\.\d{1,2})*$/;
        if (re.test(s1) && re.test(s2))
            return true;
        return false;
    }
};

module.exports = app;
