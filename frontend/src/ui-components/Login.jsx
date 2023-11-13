import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, Navigate ,useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const[user,setUser] = useState();
    const inputHandler = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const addHandler = ()=>{
        console.log(user)
        navigate("/viewall")
    }
  return (
    <div style={{ marginTop: "100px" }} className="App">
      <Typography variant="h3" style={{ color: "purple" }}>
        BlogApp Login
      </Typography>
      <br />
      <br />
      <TextField variant="outlined" label="username" name="username" onChange={inputHandler} />
      <br />
      <br />
      <TextField variant="outlined" label="password" name="password" type="password" onChange={inputHandler} />
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={addHandler}>
        LogIn
      </Button>
      <br />
      <br />
      <br />
      <Typography>
        <Link to={"/sign"}>New users click here</Link>
      </Typography>
    </div>
  );
};

export default Login;
