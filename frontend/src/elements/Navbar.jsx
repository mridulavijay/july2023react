import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          <Button color="inherit">
            <Link to={"/addpost"} style={{ textDecoration: "none", color:"white" }}>
              Add Post
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={"/viewall"} style={{ textDecoration: "none", color:"white" }}>
              Viewall Post
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={"/myprofile"} style={{ textDecoration: "none" , color:"white" }}>
              My Profile
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={"/"} style={{ textDecoration: "none" , color:"white" }}>
              Log Out
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
