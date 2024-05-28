const response = (success=true,message='',response={}) => {
    return { success, message, response }
}

module.exports = { response };