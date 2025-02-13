import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Standart/Layout/Layout';
import NewsPage from './Components/Pages/NewsPage/NewsPage';
import OneNewsPage from './Components/Pages/OneNewsPage/OneNewsPage';
import HomePage from './Components/Pages/HomePage/HomePage';
import Non_Found_Page from './Components/Pages/Non_Found_Page';
import SupportPage from './Components/Pages/SupportPage/SupportPage';
import ServicePage from './Components/Pages/ServicePage/ServicePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="news/:title" element={<OneNewsPage />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="*" element={<Non_Found_Page />} />
      </Route>
      <Route path="supports" element={<SupportPage />} />
    </Routes>
  );
}

export default App;
