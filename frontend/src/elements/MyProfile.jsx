import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const MyProfile = () => {
  return (
    <div>
        <div style={{ margin: "7%" }}>
        <Grid container spacing={2}>
      
            <Grid item xs={12} sm={12} md={12}>
              <Card sx={{ maxWidth: 345 }}>
               
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                Name:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                 Email:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
               Username
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
      
        </Grid>
      </div>
    </div>
  )
}

export default MyProfile