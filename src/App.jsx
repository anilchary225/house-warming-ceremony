import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

import Home from "./pages/Home";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });

    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
    </>
  );
}

export default App;
