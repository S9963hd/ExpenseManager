let mongoose =require('mongoose');
let authSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
},{versionKey:false})
let expenseSchema=new mongoose.Schema({
    amount:{type:Number},
    catogery:{type:String},
    Date:{type:Date}
})
let authModel=mongoose.model("Authentication",authSchema);
let expenseModel=mongoose.model("Expenses",expenseSchema);
module.exports={authModel,expenseModel};