import { isValidEmail, isNumeric, isValidLength, isValidUrl, isSafe } from './validationUtils';

export const validateForm = (form, errors, validationRules) => {
    Object.keys(errors.value).forEach((field) => {
        errors.value[field] = validateField(form, errors, field, validationRules);
    });

    return !Object.values(errors.value).some((error) => error !== '');
};

export const validateField = (form, errors, field, validationRules) => {
    const fieldRules = validationRules[field];

    for (const rule in fieldRules) {
        const error = executeRule(form, field, rule, validationRules);
        if (error) {
            return error;
        }
    }
    return '';
};

export const executeRule = (form, field, rule, validationRules) => {
    switch (rule) {
        case 'required':
            return form.value[field] ? '' : validationRules[field][rule];
        case 'email':
            return isValidEmail(form.value[field]) ? '' : validationRules[field][rule];
        case 'numeric':
            return isNumeric(form.value[field]) ? '' : validationRules[field][rule];
        case 'length':
            return isValidLength(form.value[field]) ? '' : validationRules[field][rule];
        case 'arrLength':
            return isValidArrayLength(form.value[field]) ? '' : validationRules[field][rule];
        case 'url':
            return isValidUrl(form.value[field]) ? '' : validationRules[field][rule];
        case 'safe':
            return isSafe(form.value[field]) ? '' : validationRules[field][rule];
        case 'human':
            return isHumanText(form.value[field]) ? '' : validationRules[field][rule];
        default:
            return '';
    }
};
