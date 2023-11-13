import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from 'axios';
const AddPost = (props) => {
  const [form,setForm]=useState({
    title:'',
    description:'',
    date_update:Date.now(),
    image:''
  });
  const [upform,setUpForm]=useState({
    title:props.data.title,
    description:props.data.description,
    date_update:Date.now(),
    image:props.data.image,
  });
  function submitform(){
   
      axios.post('http://localhost:4000/blogs/add',form).then((res)=>{
        alert(res.data);
      })
   
  }
  if(props.method==="put"){
    axios.put("http://localhost:4000/blogs/edit/"+props.data._id,upform)
    .then((response)=>{
      // alert(response.data.message)
      if (response.data.message==="Updated successfully") {
       alert(response.data.message)
        window.location.reload(false);
  
        
      } else {
        alert("not updated")
      }
    })}
    
  return (
    <div style={{ margin: "7% 20% 0 20%" }}>
      <TextField fullWidth variant="outlined" label="post title" 
       onChange={(e)=>{
        setForm({...form,title:e.target.value})
      }}/>
      <br />
      <br />
      <TextField
        variant="outlined"
        multiline
        rows={10}
        fullWidth
        label="Type a post"
        onChange={(e)=>{
          setForm({...form,description:e.target.value})
        }}
      />
      <br /><br />
      <TextField fullWidth variant="outlined" label="Image URL"
       onChange={(e)=>{
        setForm({...form,image:e.target.value})
      }} />
      <br /><br />
      <Button variant="contained" color="secondary" onClick={submitform} >
            Submit
          </Button>
    </div>
  );
};

export default AddPost;
