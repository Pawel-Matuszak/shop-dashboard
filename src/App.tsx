import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./assets/App.css";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import AddCartForm from "./pages/AddCartForm";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-cart" element={<AddCartForm />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
