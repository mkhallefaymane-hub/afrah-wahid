import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import Packages from "@/pages/Packages";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";

function Router() {
  return (
    <Switch>
      {/* Root redirect to Arabic Home */}
      <Route path="/">
        <Redirect to="/ar" />
      </Route>

      {/* Admin Route */}
      <Route path="/admin" component={Admin} />

      {/* Arabic Routes */}
      <Route path="/ar" component={() => <Home lang="ar" />} />
      <Route path="/ar/services" component={() => <Services lang="ar" />} />
      <Route path="/ar/gallery" component={() => <Gallery lang="ar" />} />
      <Route path="/ar/packages" component={() => <Packages lang="ar" />} />
      <Route path="/ar/about" component={() => <About lang="ar" />} />
      <Route path="/ar/contact" component={() => <Contact lang="ar" />} />

      {/* French Routes */}
      <Route path="/fr" component={() => <Home lang="fr" />} />
      <Route path="/fr/services" component={() => <Services lang="fr" />} />
      <Route path="/fr/gallery" component={() => <Gallery lang="fr" />} />
      <Route path="/fr/packages" component={() => <Packages lang="fr" />} />
      <Route path="/fr/about" component={() => <About lang="fr" />} />
      <Route path="/fr/contact" component={() => <Contact lang="fr" />} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
