import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { GlobalStateContext, GlobalStateProvider } from './context/GlobalStateContext';
import HomePage from './pages/HomePage'
import PetPage from './pages/PetPage';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
  <GlobalStateProvider>
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/pet/:id" element={<PetPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </GlobalStateProvider>
);
export default App;
