import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports';
import { Button, Container, Typography, Box, TextField, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../utils/auth';

const Signin = () => {
  const navigate = useNavigate();
  const hasConfig = awsExports && Object.keys(awsExports).length > 0;
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (hasConfig) {
    return <Authenticator />;
  }

  const handleSignin = async () => {
    setError('');
    try {
      await authenticateUser({ usernameOrEmail, password });
      navigate('/dashboard');
    } catch (e) {
      setError(e.message || 'Sign in failed');
    }
  };

  return (
    <Container maxWidth="xs" style={{ textAlign: 'center', paddingTop: 48 }}>
      <Box sx={{ background: 'var(--form-bg)', p:4, borderRadius:2 }}>
        <Typography variant="h5" gutterBottom>Sign In (Demo)</Typography>
        {error && <Alert severity="error" sx={{ mb:2 }}>{error}</Alert>}
        <TextField fullWidth label="Username or Email" value={usernameOrEmail} onChange={(e)=>setUsernameOrEmail(e.target.value)} sx={{ mb:2 }} />
        <TextField fullWidth type="password" label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} sx={{ mb:2 }} />
        <Button variant="contained" color="primary" onClick={handleSignin} sx={{ mt: 1 }}>Sign In</Button>
        <Typography variant="body2" sx={{ mt:2 }}>
          Don't have an account? <Button onClick={()=>navigate('/signup')} size="small">Create Account</Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signin;
