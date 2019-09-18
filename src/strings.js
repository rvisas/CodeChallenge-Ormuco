const compareStrings = (string1 = '', string2 = '') => {
    const output = {};

    if (!string1 || !string2 || isNaN(string1) || isNaN(string2)) {
        output.message = 'ERROR: One or more strings could not be converted to number';
        output.error = true;
        return output;             
    }
    
    const parsedNumber1 = Number(string1);
    const parsedNumber2 = Number(string2);
    
    output.error = false;

    if (parsedNumber1 > parsedNumber2) {
        output.message = 'First string is greater than Second string';
    } else if (parsedNumber1 < parsedNumber2) {
        output.message = 'First string is less than Second string';        
    } else {
        output.message = 'First string is equal to Second string';
    }

    return output;
};

module.exports = compareStrings;