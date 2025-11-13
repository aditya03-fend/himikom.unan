import { Navbar, Footer } from "../";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
