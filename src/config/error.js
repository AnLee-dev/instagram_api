export const ERROR_MESSAGE = {
    code1: ' required ',
    code2: ' invalid ',
};

export const ERROR_CODE = Object.keys(ERROR_MESSAGE).reduce((pre, cur) => {
    return {
        ...pre,
        [cur]: cur,
    };
}, {});