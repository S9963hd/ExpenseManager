let express=require('express');
let mongoose=require('mongoose');
let app=express();
let {authModel,expenseModel}=require('./Schemas.js');
app.use(express.json());
mongoose.connect('mongodb+srv://717821f146:717821f146@sample.6xezwuk.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Sample').then(()=>{
    console.log("server Connected");
    app.listen(3000,()=>{
        console.log("Server Instanciated");
    })
})
app.post('/post',async(req,res)=>{
    let data=req.query;
    await authModel.create(data).then(()=>res.sendStatus(200).send(req.data)).catch(err=>res.sendStatus(401));
    res.end();
})
app.get('/get',async(req,res)=>{
    let query=req.query;
    let result=""
    await authModel.find({"name":query.name}).then(res=>result=res).catch(err=>console.log(err));
    console.log(result+"<><><?");
    res.send(JSON.stringify(result));
    res.end();
})
app.put('/put',async (req,res)=>{
    let data=req.query;
    console.log("Instanciated");
   await authModel.updateOne({"name":data.name},{email:data.email}).then((data)=>res.sendStatus(200)).catch(err=>res.sendStatus(401));
    res.end();
})
