import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

interface PackagesProps {
  lang: "ar" | "fr";
}

export default function Packages({ lang }: PackagesProps) {
  const isAr = lang === "ar";
  
  const content = {
    ar: {
      title: "باقات الأفراح",
      subtitle: "اختر الباقة المناسبة لميزانيتك واحتياجاتك",
      custom: {
        title: "بغيت عرض خاص؟",
        text: "عندك فكرة محددة؟ تواصل معنا باش نقادو ليك عرض مفصل على قد جيبك.",
        btn: "تواصل معنا"
      },
      packages: [
        {
          name: "باقة أساس",
          price: "ابتداءً من 15,000 درهم",
          features: ["تزيين القاعة (طاولات وكراسي)", "إضاءة أساسية", "DJ محترف", "شاي وحلويات الاستقبال", "تصوير فوتوغرافي"],
          highlight: false
        },
        {
          name: "باقة ذهبية",
          price: "ابتداءً من 35,000 درهم",
          features: ["كل ما في باقة أساس", "تزيين فاخر بالورود الطبيعية", "فرقة موسيقية (أوركسترا)", "عمارية + نكافة", "تصوير فيديو 4K", "بوفيه عشاء فاخر"],
          highlight: true
        },
        {
          name: "باقة ملكية",
          price: "حسب الطلب",
          features: ["تصميم ديكور حصري", "أشهر الفنانين", "خدمة ليموزين", "إقامة في فندق للعروسين", "تنسيق كامل للحفل", "هدايا للمدعوين"],
          highlight: false
        }
      ]
    },
    fr: {
      title: "Nos Packs",
      subtitle: "Choisissez le pack adapté à votre budget et vos besoins",
      custom: {
        title: "Besoin d'une offre sur mesure ?",
        text: "Vous avez une idée précise ? Contactez-nous pour un devis personnalisé.",
        btn: "Contactez-nous"
      },
      packages: [
        {
          name: "Pack Basique",
          price: "À partir de 15,000 DH",
          features: ["Décoration salle (tables & chaises)", "Éclairage basique", "DJ Professionnel", "Thé & gâteaux d'accueil", "Photographie"],
          highlight: false
        },
        {
          name: "Pack Gold",
          price: "À partir de 35,000 DH",
          features: ["Tout du pack basique", "Décoration florale fraîche", "Orchestre live", "Amaria + Negafa", "Vidéo 4K", "Dîner Buffet Royal"],
          highlight: true
        },
        {
          name: "Pack Royal",
          price: "Sur Devis",
          features: ["Design décor exclusif", "Artistes renommés", "Service Limousine", "Nuit d'hôtel mariés", "Coordination complète", "Cadeaux invités"],
          highlight: false
        }
      ]
    }
  };

  const t = isAr ? content.ar : content.fr;

  return (
    <Layout lang={lang}>
      <PageHeader 
        title={t.title} 
        subtitle={t.subtitle} 
        bgImage="https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=2000&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-20 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.packages.map((pack, idx) => (
            <Card key={idx} className={`relative flex flex-col border-none shadow-xl transition-all hover:scale-105 ${pack.highlight ? "bg-primary text-primary-foreground scale-105 z-10" : "bg-white text-foreground"}`}>
              {pack.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold shadow-md">
                   {isAr ? "الأكثر طلباً" : "Le plus populaire"}
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-10">
                <CardTitle className="text-2xl font-bold mb-2">{pack.name}</CardTitle>
                <div className={`text-xl font-medium opacity-90 ${pack.highlight ? "text-accent" : "text-primary"}`}>
                  {pack.price}
                </div>
              </CardHeader>
              <CardContent className="flex-grow px-8">
                <ul className="space-y-4">
                  {pack.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className={`mt-1 min-w-[20px] ${pack.highlight ? "text-accent" : "text-primary"}`}>
                        <Check size={18} />
                      </div>
                      <span className="text-sm md:text-base leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Link href={`/${lang}/contact`}>
                  <Button className={`w-full py-6 text-lg font-bold rounded-xl ${pack.highlight ? "bg-white text-primary hover:bg-gray-100" : "bg-primary text-white hover:bg-primary/90"}`}>
                    {isAr ? "احجز الآن" : "Réserver"}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-secondary/10 border-2 border-secondary/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             {/* Decor */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
             
             <h3 className="text-3xl font-bold text-primary mb-4 relative z-10">{t.custom.title}</h3>
             <p className="text-lg text-muted-foreground mb-8 relative z-10 max-w-2xl mx-auto">{t.custom.text}</p>
             <Link href={`/${lang}/contact`}>
               <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 relative z-10">
                 {t.custom.btn}
               </Button>
             </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
