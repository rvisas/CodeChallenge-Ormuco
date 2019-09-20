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
        if (!app.validStrings(string1, string2))
            return 'Error';

        const numbers1 = string1.split('.').map(x => Number(x));
        const numbers2 = string2.split('.').map(x => Number(x));

        let result = 0, index1 = 0, index2 = 0;
        while ((index1 < numbers1.length) && (index2 < numbers2.length)) {
            if (numbers1[index1] > numbers2[index2]) {
                result = 1;
                break;
            } else if (numbers1[index1] < numbers2[index2]) {
                result = -1;
                break;
            }
            index1++;
            index2++;
        };

        if (!result) {
            if (index1 < numbers1.length) {
                result = 1;
            } else if (index2 < numbers2.length) {
                result = -1;
            }
        }

        return result

    },
    validStrings: (s1, s2) => {
        const re = /^(\d{1,2})(\.\d{1,2})*$/;
        if (re.test(s1) && re.test(s2))
            return true;
        return false;
    }
};

module.exports = app;
