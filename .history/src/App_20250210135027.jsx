import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Standart/Layout/Layout';
import NewsPage from './Components/Pages/NewsPage/NewsPage';
import OneNewsPage from './Components/Pages/OneNewsPage/OneNewsPage';
import HomePage from './Components/Pages/HomePage/HomePage';
import Non_Found_Page from './Components/Pages/Non_Found_Page';
import SupportPage from './Components/Pages/SupportPage/SupportPage';
import ServicePage from './Components/Pages/ServicePage/ServicePage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import ContactPage from './Components/Pages/ContactPage/ContactPage';
import BasePage from './Components/Pages/BasePage/BasePage';
import ShowCasesPage from './Components/Pages/ShowCasesPage/ShowCasesPage';
import CentrPredPage from './Components/Pages/CentrPredPage/CentrPredPage';
import CentrEkspPage from './Components/Pages/CentrEkspPage/CentrEkspPage';
import CentrHozPage from './Components/Pages/CentrHozPage/CentrHozPage';
import CentrInnovPage from './Components/Pages/CentrInnovPage/CentrInnovPage';
import CentrTehPage from './Components/Pages/CentrTehPage/CentrTehPage';
import SamozanPage from './Components/Pages/SamozanPage/SamozanPage';
import PlanBusPage from './Components/Pages/PlanBusPage/PlanBusPage';
import PredprinPage from './Components/Pages/PredprinPage/PredprinPage';
import SocPredPage from './Components/Pages/SocPredPage/SocPredPage';
import AdminPage from './Components/Pages/AdminPage/AdminPage';
import OneServicePage from './Components/Pages/OneServicePage/OneServicePage';
import MspPage from './Components/Pages/MspPage/MspPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="news/:title" element={<OneNewsPage />} />
        <Route path="service/:title" element={<OneServicePage />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactPage />} />
        <Route path="base_knowledge" element={<BasePage />} />
        <Route path="showcases" element={<ShowCasesPage />} />
        <Route
          path="centr_podderzhki_predprinimatelstva"
          element={<CentrPredPage />}
        />
        <Route path="centr_podderzhki_eksporta" element={<CentrEkspPage />} />
        <Route path="centr_competencyi" element={<CentrHozPage />} />
        <Route
          path="center_innovacionnoy_soc_sfery"
          element={<CentrInnovPage />}
        />
        <Route
          path="center_molod_innovac_texnologyi"
          element={<CentrTehPage />}
        />
            <Route path="samozanyatyi" element={<SamozanPage />} />
            <Route path="individualnyi_predprinimatel" element={<PlanBusPage />} />
            <Route path="predprinimatel" element={<PredprinPage />} />
            <Route path="lyogkaya_promyshlennost" element={<SocPredPage />} />
        <Route path="*" element={<Non_Found_Page />} />
      </Route>
      <Route path="supports" element={<SupportPage />} />
      <Route path="supports" element={<SupportPage />} />
      <Route path="msp" element={<MspPage />} />
      <Route path="/admin/*" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
