import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./assets/App.css";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import AddCartForm from "./pages/AddCartForm";
import useCartList from "./hooks/useCartList";
import axios from "axios";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/shop-dashboard/add-cart" element={<AddCartForm />} />
            <Route path="/shop-dashboard/details/:id" element={<Details />} />
            <Route path="/shop-dashboard/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
