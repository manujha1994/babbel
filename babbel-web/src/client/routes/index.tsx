import { Route, Routes } from "react-router-dom";

import Home from "../modules/home";
import Layout from "../shared/layout";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
