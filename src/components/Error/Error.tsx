import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface ErrorProps {
  message: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <ErrorOutlineIcon sx={{ fontSize: 48, color: 'error.main', mb: 2 }} />
    <Typography variant="h5" color="error" align="center" gutterBottom>
      Oops! Something went wrong
    </Typography>
    <Typography variant="h6" color="textSecondary" align="center" gutterBottom sx={{ mb: 2 }}>
      {message}
    </Typography>
    <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
      Refresh Page
    </Button>
  </Box>
);
