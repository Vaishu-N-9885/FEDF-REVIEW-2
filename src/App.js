import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import awsExports from './aws-exports';

import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const hasAmplifyConfig = awsExports && (
    awsExports.aws_user_pools_id ||
    awsExports.aws_user_pools_web_client_id ||
    awsExports.aws_cognito_identity_pool_id ||
    awsExports.aws_project_region
  );

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
