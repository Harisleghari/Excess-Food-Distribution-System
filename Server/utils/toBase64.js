const toBase64 = (buffer, contentType)=> {
    const base64String = buffer.toString('base64');
    return `data:${contentType};base64,${base64String}`;
};
module.exports = toBase64;