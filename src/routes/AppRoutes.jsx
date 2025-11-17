import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beranda, TentangKami, ArticleList, PortfolioList, Kontak, PanduanOrganisasi } from "../pages";
import { Background, Layout } from "../components";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/himikom.unan">
      <Background />
      <Layout>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/artikel" element={<ArticleList />} />
          {/* <Route path="/artikel/:id" element={<ArtikelDetail />} /> */}
          <Route path="/portfolio" element={<PortfolioList />} />
          {/* <Route path="/modul" element={<ModulList />} /> */}
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/panduan-organisasi" element={<PanduanOrganisasi />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
