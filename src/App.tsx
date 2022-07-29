import React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchMovie from './pages/SearchMovie';
import { theme } from './theme/theme';

const App: React.FC<any> = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>App</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchMovie" element={<SearchMovie />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
