import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import { Container, Box, Tabs, Tab, Typography } from '@mui/material'
import PrimePage from './PrimePage'
import FibonacciPage from './FibonacciPage'
import EvenPage from './EvenPage'
import RandomPage from './RandomPage'

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      {...props}
    />
  )
}

function App() {
  const location = useLocation()
  const pathToIndex = {
    '/prime': 0,
    '/fibonacci': 1,
    '/even': 2,
    '/random': 3,
  }
  const currentTab = pathToIndex[location.pathname] ?? 0

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Calculator Pages
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={currentTab} aria-label="calculator app tabs">
          <LinkTab label="Prime" to="/prime" />
          <LinkTab label="Fibonacci" to="/fibonacci" />
          <LinkTab label="Even" to="/even" />
          <LinkTab label="Random" to="/random" />
        </Tabs>
      </Box>

      <Routes>
        <Route path="/" element={<Navigate to="/prime" replace />} />
        <Route path="/prime" element={<PrimePage />} />
        <Route path="/fibonacci" element={<FibonacciPage />} />
        <Route path="/even" element={<EvenPage />} />
        <Route path="/random" element={<RandomPage />} />
        <Route path="*" element={<Typography>Page Not Found</Typography>} />
      </Routes>
    </Container>
  )
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}
