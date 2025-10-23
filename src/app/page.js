'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@/components/AppBar';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Intro from '@/components/Intro';

export default function Home() {
  return (
    <Box>
      <AppBar />
      <main>
        <Box sx={{ width: '100%', height: '100%' }}>
          <Divider />
          <Header />
          <Intro />
          <Divider />
          <Contact />
        </Box>
      </main>
    </Box>
  );
}
