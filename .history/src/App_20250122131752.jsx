import React from "react";
import { Route, Routes } from "react-router-dom";
import Non_Found_Page from "./Components/Pages/Non_Found_Page";
import Layout from "./Components/Standart/Layout/Layout";
import AdminPage from './Components/Pages/AdminPage/AdminPage';
import HomePage from "./Components/Pages/HomePage/HomePage";
import NewsPage from "./Components/Pages/NewsPage/NewsPage";
import OneNewsPage from "./Components/Pages/OneNewsPage/OneNewsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:title" element={<OneNewsPage />} />
          <Route path="*" element={<Non_Found_Page />} />
        </Route>
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </>
  )
}

export default App
