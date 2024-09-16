const userModel = require("../models/userModel")

const uploadProductPermission = async(userId) => {
    const user = await userModel.findByPk(userId)
    console.log(user)

    if(user && user.role === 'ADMIN'){
        return true
    }

    return false
}


module.exports = uploadProductPermission