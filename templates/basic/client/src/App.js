// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitialPage from '@/pages/InitialPage/InitialPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
      </Routes>
    </BrowserRouter>
  );
}
