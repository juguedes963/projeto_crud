const ModelUser=require('../database/connection')
module.exports = {

    async createUser(request,response) {

    },
    async getUser(request,response){
        const id=request.params.id
        response.send(id)
    },
    async updateUser(request,response){
        const id=request.params.id
    },
    async deleteUser(request,response){
        const id=request.params.id
    },
    async getAllUser(request,response){
        
    }

}