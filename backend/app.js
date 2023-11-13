const express=require('express');
const morgan=require ('morgan');
const cors=require('cors');
const blogroute=require('./routes/blogRoutes');
//const blogmodel=require('./model/BlogData');

const app=new express();
require('dotenv').config();
const PORT=process.env.PORT;
app.use(cors());
app.use(morgan('dev'));

app.use('/blogs',blogroute);

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
})