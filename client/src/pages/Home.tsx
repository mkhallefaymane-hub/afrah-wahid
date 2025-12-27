import React from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Music, Camera, UtensilsCrossed } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface HomeProps {
  lang: "ar" | "fr";
}

export default function Home({ lang }: HomeProps) {
  const isAr = lang === "ar";
  
  const content = {
    ar: {
      hero: {
        title: "أفراح وحيد — زواق مغربي وتنظيم ديال الأحلام",
        subtitle: "كنهتمّو بالتفاصيل من الحناء حتى لليلة الكبيرة",
        cta: "طلب عرض ثمن",
        whatsapp: "واتساب دابا"
      },
      services: {
        title: "خدماتنا",
        items: [
          { title: "العرس المغربي", desc: "تنظيم كامل للزفاف التقليدي والعصري", icon: Heart },
          { title: "الخطوبة والحناء", desc: "طقوس الحناء ودفوع العروس بأدق التفاصيل", icon: Star },
          { title: "المناسبات الخاصة", desc: "حفلات عائلية ومناسبات الشركات", icon: UtensilsCrossed },
        ]
      },
      steps: {
        title: "كيفاش كنخدمو",
        items: [
          { step: "01", title: "تواصل", desc: "اتصل بنا وناقش فكرتك" },
          { step: "02", title: "لقاء", desc: "اجتماع لتحديد التفاصيل والميزانية" },
          { step: "03", title: "تصميم", desc: "نصممو ليك الديكور والبرنامج" },
          { step: "04", title: "تنفيذ", desc: "استمتع بليلتك وحنا نتكلفو بالباقي" },
        ]
      },
      testimonials: {
        title: "آراء الزبائن",
        reviews: [
          { name: "سارة و أحمد", text: "شكراً بزاف على التنظيم الرائع، كلشي داز كيف ما تمنينا!" },
          { name: "ليلى م.", text: "خدمة احترافية وديكور كيحمق. تبارك الله عليكم." },
        ]
      }
    },
    fr: {
      hero: {
        title: "Afrah Wahid — Mariages & événements au style marocain",
        subtitle: "Nous prenons soin de chaque détail, du henné jusqu'au grand jour.",
        cta: "Demander un devis",
        whatsapp: "WhatsApp Direct"
      },
      services: {
        title: "Nos Services",
        items: [
          { title: "Mariage Marocain", desc: "Organisation complète, traditionnelle et moderne", icon: Heart },
          { title: "Fiançailles & Henné", desc: "Rituels du henné et cadeaux avec soin", icon: Star },
          { title: "Événements Spéciaux", desc: "Fêtes de famille et événements d'entreprise", icon: UtensilsCrossed },
        ]
      },
      steps: {
        title: "Notre Processus",
        items: [
          { step: "01", title: "Contact", desc: "Contactez-nous pour discuter de votre idée" },
          { step: "02", title: "Rencontre", desc: "Réunion pour définir les détails et le budget" },
          { step: "03", title: "Design", desc: "Nous concevons le décor et le programme" },
          { step: "04", title: "Réalisation", desc: "Profitez de votre soirée, on gère le reste" },
        ]
      },
      testimonials: {
        title: "Témoignages",
        reviews: [
          { name: "Sara & Ahmed", text: "Merci pour l'organisation incroyable, tout était parfait !" },
          { name: "Leila M.", text: "Service professionnel et décoration magnifique. Bravo." },
        ]
      }
    }
  };

  const t = isAr ? content.ar : content.fr;

  return (
    <Layout lang={lang}>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-primary text-primary-foreground">
        {/* Zellige Pattern (very subtle) */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="zellige" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
                <path d="M28 0L56 28L28 56L0 28Z" fill="currentColor" />
                <path d="M28 14L42 28L28 42L14 28Z" fill="transparent" stroke="currentColor" strokeWidth="2" />
              </pattern>
              <radialGradient id="vignette" cx="50%" cy="40%" r="70%">
                <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#zellige)" />
            <rect width="100%" height="100%" fill="url(#vignette)" />
          </svg>
        </div>

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://pixabay.com/get/gbb427055a928ddaea53c8686c03b8ce71ce4d86254851670cb6ededeef7af1fb781ecd3b684e1e4cf8ab6ab65d978f31a3cd4c3675dae423fcef05ee89b51a03_1280.jpg"
            alt={isAr ? "قاعة عرس مغربي" : "Salle de mariage marocain"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Luxury overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-primary/65 to-black/80" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/80 via-transparent to-primary/35" />

        <div className="container mx-auto px-4 relative z-20 pt-24 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-7"
          >
            {/* Small brand line */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className={`text-sm tracking-wide opacity-90 ${isAr ? "font-ar" : "font-body-fr"}`}>
                {isAr ? "لمسة مغربية • جودة سينمائية • تنفيذ احترافي" : "Touche marocaine • Qualité cinématique • Exécution pro"}
              </span>
            </div>

            {/* Title */}
            <h1 className={`text-5xl md:text-7xl font-extrabold leading-tight ${isAr ? "font-ar" : "font-fr"}`}>
              {isAr ? (
                <>
                  أفراح وحيد
                  <br />
                  فن مغربي راقٍ لتوثيق أجمل لحظاتكم
                </>
              ) : (
                <>
                  Afrah Wahid
                  <br />
                  L’art marocain au service de vos plus beaux moments
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl opacity-90 ${isAr ? "font-ar" : "font-body-fr"}`}>
              {isAr
                ? "كنحوّلو العرس والمناسبات لتجربة فاخرة: الحناء، الدقة، الزينة… وكل تفصيل محسوب."
                : "Nous transformons vos événements en expérience élégante : henné, dakka, ziana… chaque détail compte."}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href={`/${lang}/contact`}>
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full font-extrabold shadow-2xl shadow-black/30 transition-all hover:-translate-y-1"
                >
                  {isAr ? "اطلب عرض ثمن" : "Demander un devis"}
                </Button>
              </Link>

              <a href="tel:+212664111266">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full font-bold backdrop-blur-md"
                >
                  {isAr ? "اتصل بنا الآن" : "Appeler maintenant"}
                </Button>
              </a>

              <a href="https://wa.me/212716594562" target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full font-bold backdrop-blur-md"
                >
                  {isAr ? "واتساب دابا" : "WhatsApp Direct"}
                </Button>
              </a>
            </div>

            {/* Trust strip */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4">
                <div className="text-accent font-extrabold">{isAr ? "تنظيم كامل" : "Organisation complète"}</div>
                <div className="text-sm opacity-85">{isAr ? "من الحناء حتى الليلة الكبيرة" : "Du henné au grand jour"}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4">
                <div className="text-accent font-extrabold">{isAr ? "لمسة مغربية" : "Touche marocaine"}</div>
                <div className="text-sm opacity-85">{isAr ? "زليج • أقواس • فخامة" : "Zellige • Arches • Luxe"}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4">
                <div className="text-accent font-extrabold">{isAr ? "سهولة التواصل" : "Contact facile"}</div>
                <div className="text-sm opacity-85">{isAr ? "واتساب / اتصال سريع" : "WhatsApp / Appel rapide"}</div>
              </div>
            </div>

            {/* Moroccan divider */}
            <div className="pt-10 flex items-center gap-4 opacity-80">
              <div className="h-px flex-1 bg-white/15"></div>
              <div className="text-accent tracking-[0.5em]">✦ ✦ ✦</div>
              <div className="h-px flex-1 bg-white/15"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Afrah Wahid</span>
             <h2 className="text-4xl font-bold text-primary">{t.services.title}</h2>
             <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.services.items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-white">
                  <CardContent className="p-8 text-center flex flex-col items-center h-full">
                    <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                      <item.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                    <Link href={`/${lang}/services`}>
                      <span className="text-secondary font-bold flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                        {isAr ? "اكتشف المزيد" : "En savoir plus"} 
                        {isAr ? <ArrowRight className="rotate-180" size={16}/> : <ArrowRight size={16}/>}
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-zellige opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary">{t.steps.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.steps.items.map((step, idx) => (
              <div key={idx} className="relative text-center group">
                <div className="w-20 h-20 mx-auto bg-white rounded-2xl rotate-45 shadow-lg flex items-center justify-center mb-8 border-2 border-accent group-hover:bg-accent group-hover:border-white transition-colors duration-300">
                  <span className="-rotate-45 text-2xl font-bold text-primary group-hover:text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm px-4">{step.desc}</p>
                
                {/* Connector Line (Desktop only) */}
                {idx < 3 && (
                  <div className={`hidden md:block absolute top-10 h-0.5 bg-accent/30 w-full ${isAr ? "right-[50%] mr-10" : "left-[50%] ml-10"}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <Star className="w-8 h-8 text-accent mx-auto mb-6 fill-current" />
          <h2 className="text-4xl font-bold mb-12">{t.testimonials.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.testimonials.reviews.map((review, idx) => (
              <Card key={idx} className="bg-white/10 border-none backdrop-blur-md text-primary-foreground p-6">
                <p className="text-lg italic mb-6 font-light">"{review.text}"</p>
                <div className="font-bold text-accent">— {review.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
