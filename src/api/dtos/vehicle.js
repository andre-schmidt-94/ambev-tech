const yup = require('yup');

module.exports = yup.object().shape({
    model: yup.string().required(),
    location: yup.string().required().min(1).max(1),
    type: yup.string().required().min(1).max(1),
});