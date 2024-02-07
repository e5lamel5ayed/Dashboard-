import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from "@mui/material/Box";
import NAvbar from '../components/Navbar'
import List  from '../Settengs/List';

// import Typography from "@mui/material/Typography";

export default function Settings() {
  return (
    <div>
      <div className="bgcolor">

      <NAvbar/>
      <Box height={70}/>
      <Box sx={{ display: "flex" }}>

      <Sidenav/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <List/>
        
      </Box>
      </Box>
      </div>
    </div>
  )
}
