import * as React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Hidden from '@mui/material/Hidden';
import Header from './components/header/Header';

import './app.scss';

import Home from './components/home/Home';
import SidebarHome from './components/sidebars/SidebarHome';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';

// const Parallax = () => {
//   return <Box component="section">Parallax</Box>;
// };

const App = () => {
  return (
    <React.Fragment>
      <div className="background-mountains">
        <img src="/mountains.png" alt="Background" />
      </div>

      <Container maxWidth="xl" disableGutters className="mainContainer">
        <Box component="section" id="home">
          <Header />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
              <Grid container>
                <Grid item xs={12} sm={4} className="sectionContent-left intro">
                  <SidebarHome />
                </Grid>
                <Grid item sm={8} className="sectionContent-right home">
                  <Home />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
        <Box component="section" id="about">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
              <Grid container>
                <Grid item xs={12} sm={4} className="sectionContent-left intro"></Grid>
                <Grid item sm={8} className="sectionContent-right home">
                  <About />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
        <Box component="section" id="resume">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
              <Grid container>
                <Grid item xs={12} sm={4} className="sectionContent-left intro"></Grid>
                <Grid item sm={8} className="sectionContent-right home">
                  <Resume />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
        <Box component="section" id="projects">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
              <Grid container>
                <Grid item xs={12} sm={4} className="sectionContent-left intro"></Grid>
                <Grid item sm={8} className="sectionContent-right home">
                  <Projects />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
        <Box component="section" id="contact">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
              <Grid container>
                <Grid item xs={12} sm={4} className="sectionContent-left intro"></Grid>
                <Grid item sm={8} className="sectionContent-right home">
                  <Contact />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
