import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../container/Home";

export default function RouterComponent() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/product/add" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
