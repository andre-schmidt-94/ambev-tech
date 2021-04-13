const yup = require('yup');
const regexLocation = '[ABCDEF]';
const regexType = '[ABCDE]';

module.exports = yup.object().shape({
    model: yup.string().required(),
    location: yup.string().required().min(1).max(1).matches(regexLocation),
    type: yup.string().required().min(1).max(1).matches(regexType),
});