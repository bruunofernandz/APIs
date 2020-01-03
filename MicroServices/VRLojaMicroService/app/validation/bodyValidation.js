const Joi = require('@hapi/joi');
const pt_BR = require('../language/pt-BR');

const bodyValidation = data => {
    const schema = {
        hash: Joi.string().min(1).max(10).required()
    };
    

    return Joi.validate({
        hash: data.hash,
    },
        schema,
        { language: pt_BR.errors });
};

module.exports.bodyValidation = bodyValidation;