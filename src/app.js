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
    // Returns -1 if string1 < string2;
    // Returns 0 if string1 = string2;
    // Returns 1 if string1 > string2;
    compareStrings: (string1 = '', string2 = '') => {
        if (!app.validStrings(string1, string2)) {
            return {
                error: true,
                message: 'ERROR: One or more strings could not be converted to a version number',
                value: NaN
            };
        };

        const listOFVersionNumbers1 = string1.split('.');
        const listOFVersionNumbers2 = string2.split('.');
        
        return {
            error: false,
            message: '',
            value: 1
        }
    },
    validStrings: (s1, s2) => {
        if ((typeof s1 !== 'string') || (typeof s2 !== 'string'))
            return false;

        const pattern = /^(\d{1,2})(\.\d{1,2})*$/;
        if (pattern.test(s1) && pattern.test(s2))
            return true;

        return false;
    }
};

module.exports = app;
