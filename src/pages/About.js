import React from 'react';
import Sidenav from '../components/Sidenav';
import NAvbar from '../components/Navbar';
import Users from './users/Users';
import Box from "@mui/material/Box";

import "../dash.css";


export default function Home() {
  return (
    <div>
      <NAvbar />

      <div className="bgcolor">
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            
          <Users/>
            <Box height={20} />
           

          </Box>
        </Box>
      </div>
    </div>
  )
}
