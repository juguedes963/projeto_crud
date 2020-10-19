const multer = require('multer');
const path = require("path");
const { dirname } = require("path");
const storage = multer.diskStorage({
    destination: "public/produtos/",
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
});
module.exports = {
    async createStorage(req,res){
        return multer.diskStorage({
            destination:"public/produtos/"+req.body.nome,
            filename: function (req, file, cb) {
                cb(null,new Date().toLocaleDateString()+file.originalname);
            }
        })
    },
    async createMapUpload(){
        return multer({
            storage:this.createStorage,
            limits:{ fileSize: 1000000 },
        })
    },
    async SaveImg(req, res, err) {
        let pat = req.file.path
        let dados = []
        for (let index = 0; index < pat.length; index++) {
            const element = pat[index];
            dados = dados + element.replace(`\\`, '/')
        }
    
        res.json(dados.toString())
        if (!err)
            return res.send(200).end();
    }, upload
}