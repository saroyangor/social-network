import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';

export const Loading: FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <svg width={0} height={0}>
      <defs>
        <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f2f2fe" />
          <stop offset="100%" stopColor="#615dfa" />
        </linearGradient>
      </defs>
    </svg>
    <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
  </Box>
);
