
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import Brands from "./pages/Brands";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
