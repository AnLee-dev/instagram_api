/** This function is used for general handling of response */
const createResponse = (status, code, message, data = undefined) => {
    const response = {
        status: status,
        code: code,
        message: message,
    };
    return response;
};