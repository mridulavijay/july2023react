import { Button, Grid, ListItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addHandler = () => {
    console.log(user);
    navigate("/");
  };
  return (
    <div style={{ margin: "12%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <TextField variant="outlined" fullWidth label="Name" name="sname" onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField variant="outlined" fullWidth label="Email" name="email" onChange={inputHandler} />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
          name="address" onChange={inputHandler}
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            label="Address"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField variant="outlined" fullWidth label="Phone" name="phone" onChange={inputHandler} />
        </Grid>
        <Grid item xs={4}>
          <TextField variant="outlined" fullWidth label="Username" name="username" onChange={inputHandler}/>
        </Grid>
        <Grid item xs={4}>
          <TextField variant="outlined" fullWidth label="password" name="passsword" onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" onClick={addHandler}>
            Submit
          </Button>
        </Grid>
        <br />
        <br />
        <br />
        <Grid item xs={12}>
          <Typography>
            <Link to={"/"}>Back to Login</Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
