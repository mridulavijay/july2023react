import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
import axios from "axios";
  import React, { useEffect, useState } from "react";
  import AddPost from "./AddPost";
  const ViewAll = () => {
    var[update,setUpdate] = useState(false);
  var[singleValue,setSingleValue]=useState([])
  const [cardData,setData]=useState([]);

  useEffect(()=>{
   axios.get('http://localhost:4000/blogs').then((res)=>{
  
    setData(...cardData,res.data);
    console.log(cardData)
   })

  },[])
  const updateBlog = (val)=>{
    console.log("update clicked",val);
    setUpdate(true);
    setSingleValue(val)
  }
  useEffect(() => {
    axios.get('http://localhost:4000/blogs').then((res)=>{
  
    setData(...cardData,res.data);
  })}, []);
  function removeBlog(id){
    axios.delete('http://localhost:4000/blogs/remove/'+id).then((res)=>{
      alert(res.data)
    })
  }

   
   let finalJSX=(
    <div>
    return (
      
       <div style={{ margin: "7%" }}>
     
        <Grid container spacing={2}>
          {cardData.map((val, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={val.image}  // Specify the image source
                  title={val.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {val.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Last updated:
                  </Typography>
                  <Button variant="outlined" onClick={()=>{removeBlog(val._id)}}>Remove</Button>
                 
                  <Button  variant="outlined" className="btn btn-danger" onClick={()=>updateBlog(val)}>Update</Button>
                          
                       
                </CardContent>
                
              </Card>
            </Grid>
          ))}
        </Grid>
        
       </div>
    )
    </div>
    )
  if(update) finalJSX=<AddPost method="put" data={singleValue}/>
 return (
  
    
     finalJSX
     
   
    )
      
  };
  
  export default ViewAll;
  