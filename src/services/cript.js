const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = {
    async convertCript(password) {

        const hash = await bcrypt.hash(password, saltRounds).then(hash => {
            return hash
        })
        return hash

    },
    async checkPassword(password, hash) {
       
        const state =await  bcrypt.compare(password, hash)
      
        return state
    }
}