import React from 'react';
import Sidenav from '../components/Sidenav';
import NAvbar from '../components/Navbar';
import Accordion from '../components/Accordion';
import { BarChart } from '../charts/Barchart';
import { GeoChart } from '../charts/Geochart';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import { Stack } from '@mui/material';
import "../dash.css";
import ApartmentIcon from '@mui/icons-material/Apartment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

export default function Home() {
  return (
    <div>
      <NAvbar />

      <div className="bgcolor">
        <Box height={70} />
        <Box sx={{ display: "flex"}}>
          <Sidenav />

          <Box className="bgcolor" component="main" sx={{ flexGrow: 1, pt: 3, pl:3}}>
            <Grid container spacing={2}>
              <Grid item md={8} xs={10}>
                <Stack spacing={2} direction={"row"}>
                  <Card
                    style={{ backgroundColor: "#b39952", color: "#fff" }}
                    className='grade1' sx={{ minWidth: 49 + "%" }} >
                    <CardContent>

                      <Typography gutterBottom variant="h5" component="div">
                        My Community
                        <ApartmentIcon style={{ marginLeft: "5%" }} />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Units
                      </Typography>
                    </CardContent>

                  </Card>

                  <Card
                    style={{ backgroundColor: "#00b0f3", color: "#fff" }}
                    sx={{ minWidth: 49 + "%" }} >

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Facility Management
                        <TrendingUpIcon style={{ marginLeft: "5%" }} />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        complaints

                      </Typography>

                    </CardContent>

                  </Card>
                </Stack>

                <Stack spacing={2} direction={{xs : "row"}} sx={{ flexGrow: 1, pt: 3 }}>
                  <Card
                    style={{ backgroundColor: "#ee5c00", color: "#fff" }}
                    className='grade3' sx={{ minWidth: 49 + "%" }} >

                    <CardContent >
                      <Typography gutterBottom variant="h5" component="div">
                        Timeline
                        <ScheduleSendIcon style={{ marginLeft: "5%" }} />

                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Posts
                      </Typography>
                    </CardContent>

                  </Card>

                  <Card
                    style={{ backgroundColor: "#e93160", color: "#fff" }}
                    className='grade4' sx={{ minWidth: 49 + "%" }}>

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Messaging
                        <LocalPostOfficeIcon style={{ marginLeft: "5%" }} />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Announcements

                      </Typography>
                    </CardContent>

                  </Card>

                </Stack>
                
                <Stack  sx={{  pt: 3 }}>
                <Card>
                <CardActions>
                  <BarChart/>
                </CardActions>
               </Card>
                </Stack>
                <Stack  sx={{  pt: 3 }}>
                <Card>
                <CardActions>
                  <GeoChart/>
                  
                </CardActions>
               </Card>
                </Stack>

              </Grid>



              <Grid item  md={4} xs={0} sx ={{width: 90+"%"}} >
              <Card sx={{ height: 80+ "hv" }}>
                  <CardContent >
                    <h5 className='head-text'>Facility and management</h5>
                    <Accordion />
                    <h5 className='head-text'>Residents</h5>
                    <Accordion />
                    <h5 className='head-text'>Units</h5>
                    <Accordion />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Box height={20} />
           

          </Box>
        </Box>
      </div>
    </div>
  )
}
