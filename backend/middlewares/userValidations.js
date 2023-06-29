const { body } = require('express-validator')

const userCreateValidation = () => {
    return [
    body("name")
        .isString()
        .withMessage('O nome é obrigatório')
        .isLength({min: 3})
        .withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("email")
        .isString()
        .withMessage("O email é obrigatório")
        .isEmail()
        .withMessage("Insira um e-mail válido."),
    body("password")
        .isString()
]
};

module.exports = {
    userCreateValidation,
}