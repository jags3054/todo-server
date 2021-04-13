const mongoose=require('mongoose');
const todoSchenma=new mongoose.Schema({
    title:String,
    date:{
       type:String,
       default:Date.now
    
    }
    

    

});

const Todo=mongoose.model('todo',todoSchenma);

module.exports=Todo;