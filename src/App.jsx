import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";

import "./App.css";
import Home from "./Pages/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
