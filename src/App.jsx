import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

import Home from "./pages/Home";

function App() {
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