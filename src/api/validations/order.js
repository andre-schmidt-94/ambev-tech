const yup = require('yup');
const regexLocation = '[ABCDEF]';

module.exports = yup.object().shape({
    store: yup.string().required(),
    location: yup.string().required().min(1).max(1).matches(regexLocation),
    quantity: yup.number().min(0).max(50)
});