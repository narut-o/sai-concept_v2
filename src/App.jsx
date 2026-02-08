import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
