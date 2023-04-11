const bcrypt = require('bcryptjs');
const saltRounds = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_ROUNDS) || 10);

const hashPassword = (text) => {
    return bcrypt.hashSync(text, salt)
}

const checkPassword = (password,hashedPassword) => {
    console.log(`Checking password\n${bcrypt.hashSync(password, saltRounds)}\n${hashedPassword}`)

    return bcrypt.compareSync(password, hashedPassword)
}

module.exports = { bcrypt, hashPassword, checkPassword };