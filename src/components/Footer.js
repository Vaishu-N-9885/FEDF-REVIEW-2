import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 4, textAlign: 'center', mt: 6 }}>
      <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} Student Project Management</Typography>
      <Typography variant="caption" display="block">Built for demo — replace content as needed.</Typography>
      <Typography variant="caption" display="block" sx={{ mt:1 }}>
        <Link href="#" underline="hover">Privacy</Link> · <Link href="#" underline="hover">Terms</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
