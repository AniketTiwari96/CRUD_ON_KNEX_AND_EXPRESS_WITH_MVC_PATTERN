const knex=require('../dbconnection/connection')

const createUser=async(req,res)=>{
    try {
        let d =await knex('student').insert(req.body);
        console.log(d);
        res.send({message:"data inserted successfuly....",stauts:req.body})
    } catch (error) {
        console.log(error);
        res.send({err:error,message:'data not inserted....'})
    }
}
// read data from id in databases
const read_all_data=async(req,res)=>{
    try {
        const data=await knex('student')
        res.send({"message":'this is your data',stauts:data})
    } catch (error) {
        console.log(error.message);
        res.send('data not found.....')
    }
}
const read=async(req,res)=>{
    try {
        const data=await knex ('student').where({id:req.params.id})
        res.send({message:"this is your data....",stauts:data})

    } catch (error) {
        console.log(error.message);
        res.send({err:error,message:'no data found......'})
    }
}

const update=async(req,res)=>{
    try {
        const data=await knex('student').where({id:req.params.id}).update(req.body)
        res.send({message:'your data is updated...',stauts:data})
    } catch (error) {
        console.log(error.message);
        res.send({err:error,message:'data not found......'})
    }
}
const deletedata=async(req,res)=>{
    try {
       const data=await knex('student').where({id:req.params.id}).del(req.body)
       res.send({info:'data delete successfuly....','this is your data':data}) 
    } catch (error) {
        console.log(error.message);
        res.send({err:error,message:'sorry data not found.....'})
    }
}
const delete_all_data=async(req,res)=>{
    try {
        const data=await knex('student').truncate()
        res.send('all data deleted seccessfuly......')
    } catch (error) {
        console.log(error.message);
        res.send({err:error,message:'there is no data'})
    }
}
module.exports={createUser,read_all_data,read,update,deletedata,delete_all_data}