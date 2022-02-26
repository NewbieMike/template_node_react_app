import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import MainPage from "./components/layout/MainPage/MainPage";
import UA from "./UA";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/UA" element={<UA />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
