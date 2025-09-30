import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1976d2', color: 'white', p: 2, mt: 5, textAlign: 'center' }}>
      <Typography variant="body1">
        &copy; 2025 Bangladesh KickFighter Karate Schoole. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
