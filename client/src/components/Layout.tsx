import React, { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Menu, X, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface LayoutProps {
  children: React.ReactNode;
  lang: "ar" | "fr";
}

const translations = {
  ar: {
    home: "الرئيسية",
    services: "خدماتنا",
    gallery: "معرض الصور",
    packages: "الباقات",
    about: "من نحن",
    contact: "اتصل بنا",
    bookNow: "احجز الآن",
    rights: "جميع الحقوق محفوظة © 2024 أفراح وحيد",
  },
  fr: {
    home: "Accueil",
    services: "Services",
    gallery: "Galerie",
    packages: "Packs",
    about: "À propos",
    contact: "Contact",
    bookNow: "Réserver",
    rights: "Tous droits réservés © 2024 Afrah Wahid",
  },
};

export function Layout({ children, lang }: LayoutProps) {
  const [location, setLocation] = useLocation();
  const t = translations[lang];
  const isRTL = lang === "ar";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLang = () => {
    const newLang = lang === "ar" ? "fr" : "ar";
    const path = location.split("/").slice(2).join("/"); // Remove current lang
    setLocation(`/${newLang}${path ? "/" + path : ""}`);
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={`/${lang}${href}`} className={`text-lg font-medium transition-colors hover:text-secondary ${location === `/${lang}${href}` ? 'text-secondary' : 'text-foreground'}`}>
      {children}
    </Link>
  );

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={`min-h-screen flex flex-col ${isRTL ? "font-ar" : "font-fr"}`}>
      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href={`/${lang}`} className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="text-3xl">⚜️</span>
            <span>{lang === "ar" ? "أفراح وحيد" : "Afrah Wahid"}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="">{t.home}</NavLink>
            <NavLink href="/services">{t.services}</NavLink>
            <NavLink href="/gallery">{t.gallery}</NavLink>
            <NavLink href="/packages">{t.packages}</NavLink>
            <NavLink href="/about">{t.about}</NavLink>
            
            <div className="flex items-center gap-4 border-s ps-4 border-border">
              <Button onClick={switchLang} variant="ghost" className="font-bold">
                {lang === "ar" ? "FR" : "AR"}
              </Button>
              <Link href={`/${lang}/contact`}>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                  {t.contact}
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-2">
             <Button onClick={switchLang} variant="ghost" size="sm" className="font-bold">
                {lang === "ar" ? "FR" : "AR"}
              </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon"><Menu /></Button>
              </SheetTrigger>
              <SheetContent side={isRTL ? "right" : "left"} className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-10">
                  <NavLink href="">{t.home}</NavLink>
                  <NavLink href="/services">{t.services}</NavLink>
                  <NavLink href="/gallery">{t.gallery}</NavLink>
                  <NavLink href="/packages">{t.packages}</NavLink>
                  <NavLink href="/about">{t.about}</NavLink>
                  <NavLink href="/contact">{t.contact}</NavLink>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/212600000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-200 flex items-center gap-2"
        aria-label="WhatsApp"
      >
        <Phone className="w-6 h-6 fill-current" />
        <span className="hidden md:inline font-bold">WhatsApp</span>
      </a>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-zellige pointer-events-none"></div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-center md:text-start">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Afrah Wahid</h3>
            <p className="opacity-80 leading-relaxed max-w-xs mx-auto md:mx-0">
              {lang === "ar" 
                ? "نحول أحلامكم إلى حقيقة بلمسة مغربية أصيلة. تنظيم حفلات، أعراس، ومناسبات خاصة."
                : "Nous transformons vos rêves en réalité avec une touche marocaine authentique."}
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg mb-2 text-accent">{t.contact}</h4>
            <a href="tel:+212600000000" className="hover:text-accent transition-colors">+212 600 000 000</a>
            <a href="mailto:contact@afrahwahid.com" className="hover:text-accent transition-colors">contact@afrahwahid.com</a>
            <span className="opacity-80">Marrakech, Maroc</span>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
             <h4 className="font-bold text-lg text-accent">Social</h4>
             <div className="flex gap-4">
               <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"><Instagram size={20} /></a>
               <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"><Facebook size={20} /></a>
             </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/10 text-center opacity-60 text-sm">
          {t.rights}
        </div>
      </footer>
    </div>
  );
}
