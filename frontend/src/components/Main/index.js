import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" marginTop={10}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our App!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Your journey begins here.
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={handleGetStartedClick}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default WelcomePage;
