import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Produtos from "./pages/Produtos";
import Finish from "./pages/cart";
import UserInfo from "./pages/UserInfo"
import Confirmation from "./pages/Confirmation";
import Login from "./pages/Login";
import Register from "./pages/register";
import Cart from "./pages/cart";
const queryClient = new QueryClient();
// import Home from './pages/Home'; 
import Admin from './pages/Admin';


const App = () => {
  useEffect(() => {
    document.title = "Empório Minas Casa";
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/userInfo" element={<UserInfo />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
{/* <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/produtos" element={<Produtos />} />
  <Route path="*" element={<NotFound />} />
</Routes> */}

export default App;
