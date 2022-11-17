
const Knex = require('knex')({
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        database:'knex_crud_data',
        password:'Aniket@123'
    }
})
Knex.schema.createTable('student',(table)=>{
    table.increments('id').primary()
    table.string('name')
    table.integer('age')
    table.string('gmail-id').unique()
    table.string('password').unique()

}).then((result) => {
    console.log('table created successfuly.....');
}).catch((err) => {
    console.log('talble allready exist......');
});

module.exports=Knex