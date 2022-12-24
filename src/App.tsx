import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { States } from "./components/States";
import { PageNotFound } from "./components/PageNotFound";
import { Dictionary } from "./components/Dictionary";
function App() {
  return (
    <div className="flex flex-col min-w-screen min-h-screen">
      <Header />
      <main className="flex items-center justify-center p-4 h-full">
        <Routes>
          <Route path="/" element={<States />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
