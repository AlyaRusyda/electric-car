import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages";
import Detail from "./pages/id";
import { TranslationProvider } from "./components/TranslationContext";
import Footer from "./components/Footer";

const App = () => {
  return (
    <TranslationProvider>
      <div className="overflow-hidden font-primary font-medium">
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/:id" element={<Detail />} />
          </Routes>
        </Router>
        <Footer/>
      </div>
    </TranslationProvider>
  );
};

export default App;
