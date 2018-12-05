const mongoose  =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/cruddb',(err)=>{
    if(!err)
        console.log('Mongo Db Connected');
    else
        console.log('Error'+ JSON.stringify(err, undefined,2));
});
module.exports = mongoose;