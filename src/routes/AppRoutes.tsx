import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import GlobalLoader from "../components/loaders/GlobalLoader";
import NotFound from "../pages/NotFound";
import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";
import DownloadPage from "../pages/downloadPage";
import ScrollToTop from "../components/ScrollToTop";


const LandingPage = lazy(() => import("../pages/landingPage"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<GlobalLoader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/download" element={<DownloadPage />} />

          <Route path="/*" element={<NotFound />} />
          {/* Protected admin route */}
          {/* <Route element={<ProtectedRoute />}>
                  <Route path="/admin" element={<Dashboard />} />
                </Route> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
