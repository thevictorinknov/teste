import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import Documentation from "./src/pages/Documentation";
import React from "react";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs" element={<Documentation />} />
    </Routes>
  );
}
