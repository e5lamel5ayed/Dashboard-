import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

const PersonalPage = () => {
  const [userData, setUserData] = useState({
    photo: null,
    address: '',
    phoneNumber: '',
    email: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]: name === 'photo' ? files[0] : value,
    }));
  };

  const handleSave = () => {
    // Add logic to save user data
    console.log('User data saved:', userData);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" align="center" gutterBottom>
              Profile Page
            </Typography>
            <Avatar
              alt="Personal Photo"
              src={userData.photo ? URL.createObjectURL(userData.photo) : ''}
              sx={{ width: 100, height: 100, margin: 'auto' }}
            />
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              style={{ margin: '14px 34px' ,}}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="address"
              label="Address"
              name="address"
              value={userData.address}
              onChange={handleChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="details"
              label="Details"
              name="details"
              multiline
              rows={4}
              value={userData.details}
              onChange={handleChange}
            />

            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSave}
              style={{ marginTop: '20px',backgroundColor:" #937a34" }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PersonalPage;
