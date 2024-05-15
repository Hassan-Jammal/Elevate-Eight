export const isValidEmail = (email) => {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
};

export const isNumeric = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
};

export const isValidLength = (url) => {
    return /^[0-9]{1,12}$/.test(url);
};

export const isValidArrayLength = (arr) => {
    return arr.length >= 1
};

export const isValidUrl = (url) => {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
};

export const isSafe = (url) => {
    return !/<(\/|\s)?(_ENV|_SERVER|_HOST|PATH|php|main|br|header|h[1-9]|body|style|script|html|head|p|b|strong|a|i|span|div)?(\/|\s)*>/.test(url);
};