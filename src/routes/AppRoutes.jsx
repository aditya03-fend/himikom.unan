import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beranda, TentangKami, ArticleList, PortfolioList, KerjaSama } from "../pages";
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
          <Route path="/kerja-sama" element={<KerjaSama />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
