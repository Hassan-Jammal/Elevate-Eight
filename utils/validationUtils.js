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

export const isHumanText = (value) => {
    if (!value) return false;

    // 1. Reject if text has too many consonants in a row (6+)
    if (/[bcdfghjklmnpqrstvwxyz]{6,}/i.test(value)) {
        return false;
    }

    // 2. Reject if text is only letters with no spaces and longer than 12 chars
    if (/^[A-Za-z]{12,}$/.test(value)) {
        return false;
    }

    // 3. Reject if text has no vowels (common in bot spam)
    if (!/[aeiou]/i.test(value)) {
        return false;
    }

    // 4. Reject if message length is too short (bots often send 1–3 words)
    if (field === "contact_message" && value.split(" ").length < 3) {
        return false;
    }

    return true;
};