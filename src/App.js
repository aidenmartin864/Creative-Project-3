import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Riddle1 from "./pages/Riddle1";
import Riddle2 from "./pages/Riddle2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="riddle1" element={<Riddle1 />} />
          <Route path="riddle2" element={<Riddle2 />} />
          <Route path="*" element={<Navigate to="/" />}  />3
        </Route>
      </Routes>
    </BrowserRouter>
  );
}