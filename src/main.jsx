import './index.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import { RootLayout } from './Layouts/RootLayout.jsx';
import { HomePage } from './Pages/HomePage.jsx';
import { ContactPage } from './Pages/ContactPage.jsx';
import { AboutPage } from './Pages/AboutPage.jsx';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />} >
        <Route path='/' element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

    </Routes>
  </BrowserRouter>
);