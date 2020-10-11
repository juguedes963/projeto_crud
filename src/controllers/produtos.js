
module.exports = {

    async createProducts(request,response) {
        
    },
    async getProducts(request,response){
        const id=request.params.id
        response.send(id)
    },
    async updateProducts(request,response){
        const id=request.params.id
    },
    async deleteProducts(request,response){
        const id=request.params.id
    },
    async getAllProducts(request,response){
        
    }

}