import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Reveal from "./components/ui/Reveal";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import LevelsPage from "./pages/levels/LevelsPage";
import LoginPage from "./pages/login/LoginPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import QuotePage from "./pages/quote/QuotePage";
import RegisterPage from "./pages/register/RegisterPage";
import ServicesPage from "./pages/services/ServicesPage";
import TestimonialsPage from "./pages/testimonials/TestimonialsPage";

const RootLayout = () => (
  <div className="flex min-h-screen flex-col bg-base-100 font-sans text-base-content">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Reveal direction="up" delay={200}>
      {" "}
      <Footer />
    </Reveal>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // Câblage du composant d'erreur sécurisé
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "services", element: <ServicesPage /> },
      { path: "niveaux", element: <LevelsPage /> },
      { path: "a-propos", element: <AboutPage /> },
      { path: "temoignages", element: <TestimonialsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "devis", element: <QuotePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
