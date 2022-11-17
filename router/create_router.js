
const express=require('express')
const router=express.Router()

const usercontroller=require('../controller/control')

router.post('/createData',usercontroller.createUser)
router.get('/readData/:id',usercontroller.read)
router.get('/readAllData',usercontroller.read_all_data )
router.put('/updatedata/:id',usercontroller.update)
router.delete('/deleteData/:id',usercontroller.deletedata)
router.delete('/deleteAllData',usercontroller.delete_all_data)
module.exports=router
