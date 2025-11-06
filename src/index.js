import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import './index.css';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// Configure Amplify only when aws-exports has content (avoid Amplify UI configuration errors)
if (awsExports && Object.keys(awsExports).length > 0) {
  Amplify.configure(awsExports);
} else {
  // Friendly developer message — replace src/aws-exports.js with your real Amplify config
  // to enable authentication features. For now we skip Amplify configuration so the app runs.
  // Example required keys: aws_project_region, aws_cognito_region, aws_user_pools_id, aws_user_pools_web_client_id
  // See: https://docs.amplify.aws/lib/auth/getting-started/
  // eslint-disable-next-line no-console
  console.warn('Amplify not configured: src/aws-exports.js is empty or missing required keys. Authentication UI is disabled.');
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
