const joi = require('@hapi/joi')
const pt_BR = require('../language/pt-BR')

const bodyValidation = data => {
    const schema = {
        hash: joi.string().min(0).max(10).required()
    }

    return joi.validate({
        hash: data.hash,
    }, 
        schema, {language: pt_BR.errors}
    )
}

module.exports.bodyValidation = bodyValidation