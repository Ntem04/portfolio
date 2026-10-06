import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Icon from "../../assets/icon.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[15px] font-semibold py-1 border-b-2 transition-all duration-200 ${
      isActive
        ? "text-[#1d6f4c] border-[#1d6f4c]"
        : "text-slate-600 border-transparent hover:text-[#1d6f4c] hover:border-[#1d6f4c]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Barre principale */}
      <div className="relative z-20 border-b border-slate-100 bg-white shadow-sm">
        <div className="mx-auto flex h-20 w-full max-w-[1720px] items-center justify-between px-6 lg:px-10 xl:px-12">
          <div className="flex shrink-0 items-center gap-3 lg:gap-0">
            {/* Bouton Menu Mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-md p-2 text-slate-600 hover:text-[#1d6f4c] hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d6f4c]"
                aria-label={
                  isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
                }
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 stroke-2" />
                ) : (
                  <Menu className="h-6 w-6 stroke-2" />
                )}
              </button>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#1d6f4c] rounded-md"
            >
              <img
                src={Icon}
                alt="Logo CleanPro Services"
                className="h-9 w-auto object-contain sm:h-10"
                loading="eager"
              />
              <div className="flex flex-col justify-center leading-none">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  CleanPro
                </span>
                <span className="mt-0.5 text-[13px] font-medium tracking-wide text-slate-500">
                  Services
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            <NavLink to="/" className={getNavLinkClass}>
              Accueil
            </NavLink>
            <NavLink to="/services" className={getNavLinkClass}>
              Nos services
            </NavLink>

            <NavLink to="/a-propos" className={getNavLinkClass}>
              À propos
            </NavLink>
            <NavLink to="/temoignages" className={getNavLinkClass}>
              Témoignages
            </NavLink>
            <NavLink to="/contact" className={getNavLinkClass}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Menu Mobile Déroulant */}
      <div
        className={`lg:hidden absolute top-20 left-0 z-10 w-full bg-white border-b border-slate-100 shadow-md transition-all duration-300 ease-out origin-top ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[15px] font-bold text-slate-800"
          >
            Accueil
          </Link>
          <Link
            to="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[15px] font-bold text-slate-800"
          >
            Nos services
          </Link>
          <Link
            to="/niveaux"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[15px] font-bold text-slate-800"
          >
            Nos niveaux
          </Link>
          <Link
            to="/a-propos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[15px] font-bold text-slate-800"
          >
            À propos
          </Link>
          <Link
            to="/temoignages"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[15px] font-bold text-slate-800"
          >
            Témoignages
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[15px] font-bold text-slate-800"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
