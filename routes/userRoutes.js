var router=require("express").Router()
var userController=require("../controller/userController")

router.post('/login', userController.loginAdmin)



module.exports=router