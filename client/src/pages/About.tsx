import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Crown,
  Gem,
  MapPin,
  Phone,
  MessageCircle,
  Check,
  Star,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  lang: "ar" | "fr";
}

export default function About({ lang }: AboutProps) {
  const isAr = lang === "ar";

  const content = {
    ar: {
      headerTitle: "من نحن",
      headerSub: "قصة شغف بالثقافة المغربية… وتنفيذ احترافي يليق بلحظاتكم",
      storyEyebrow: "Afrah Wahid",
      storyTitle: "أفراح وحيد: الأصالة… والتميّز",
      storyP1:
        "تأسسنا حبّاً في التقاليد المغربية الراقية: النكافة، العمارية، الزينة، الدقة… لكن بعينٍ عصرية تحترم الذوق وتُتقن التفاصيل.",
      storyP2:
        "هدفنا بسيط: نخليو مناسبتكم كتدوز بلا توتر، وبشكل فاخر يخلّي الضيوف كيهضرو عليها. من التخطيط حتى التنفيذ، كنرافقوكم خطوة بخطوة.",
      highlightsTitle: "شنو كيخلّينا مختلفين؟",
      highlights: [
        {
          icon: Crown,
          title: "فخامة مغربية",
          desc: "زليج • أقواس • ألوان راقية • لمسة تقليدية بستايل فاخر.",
        },
        {
          icon: ShieldCheck,
          title: "تنظيم محكم",
          desc: "جدولة واضحة، مسؤولية كاملة، ومراقبة التفاصيل حتى آخر لحظة.",
        },
        {
          icon: Sparkles,
          title: "تفاصيل كتصنع WOW",
          desc: "إضاءة، موسيقى، ضيافة، ديكور… كلشي منسّق على مستوى واحد.",
        },
      ],
      whyTitle: "علاش تختار أفراح وحيد؟",
      whyItems: [
        "تجربة مغربية أصيلة بلمسة فاخرة",
        "مرونة حسب الميزانية والرغبات",
        "فريق متكامل وتواصل سريع",
        "اقتراحات ديكور وبرامج جاهزة",
      ],
      statsTitle: "أرقام كتزيد الثقة",
      stats: [
        { label: "الرد السريع", value: "≤ 10 دقائق" },
        { label: "تنظيم شامل", value: "من الحناء حتى الليلة الكبيرة" },
        { label: "حضور مغربي", value: "زليج • عمارية • دقة" },
      ],
      ctaTitle: "بغيتي عرض ثمن على المقاس؟",
      ctaDesc:
        "صيفط لينا التاريخ + المدينة + نوع المناسبة… وغادي نوجدو ليك عرض واضح وسريع.",
      ctaPrimary: "طلب عرض ثمن",
      ctaWhats: "واتساب الآن",
      ctaCall: "اتصل الآن",
      cityLine: "مراكش، المغرب",
    },
    fr: {
      headerTitle: "À propos",
      headerSub:
        "Une passion pour l’art marocain… et une exécution professionnelle",
      storyEyebrow: "Afrah Wahid",
      storyTitle: "Afrah Wahid : Authenticité & Excellence",
      storyP1:
        "Nous sommes nés d’un amour pour les traditions marocaines : negafa, amaria, ziana, dakka… avec une touche moderne et élégante.",
      storyP2:
        "Notre mission : vous offrir un événement luxueux, sans stress. De la planification à l’exécution, nous vous accompagnons étape par étape.",
      highlightsTitle: "Ce qui nous rend uniques",
      highlights: [
        {
          icon: Crown,
          title: "Luxe marocain",
          desc: "Zellige • Arches • Couleurs raffinées • Tradition + élégance.",
        },
        {
          icon: ShieldCheck,
          title: "Organisation carrée",
          desc: "Planning clair, responsabilité totale, contrôle des détails jusqu’au bout.",
        },
        {
          icon: Sparkles,
          title: "Effet WOW",
          desc: "Lumière, musique, traiteur, décor… tout est harmonisé au même niveau.",
        },
      ],
      whyTitle: "Pourquoi choisir Afrah Wahid ?",
      whyItems: [
        "Tradition marocaine authentique + finition luxe",
        "Flexibilité selon le budget",
        "Équipe complète & réponse rapide",
        "Propositions déco & programmes clé-en-main",
      ],
      statsTitle: "Des repères de confiance",
      stats: [
        { label: "Réponse rapide", value: "≤ 10 min" },
        { label: "Organisation complète", value: "Du henné au grand jour" },
        { label: "Signature marocaine", value: "Zellige • Amaria • Dakka" },
      ],
      ctaTitle: "Un devis sur-mesure ?",
      ctaDesc:
        "Envoyez la date + la ville + le type d’événement… et nous préparons une offre claire et rapide.",
      ctaPrimary: "Demander un devis",
      ctaWhats: "WhatsApp الآن",
      ctaCall: "Appeler",
      cityLine: "Marrakech, Maroc",
    },
  };

  const t = isAr ? content.ar : content.fr;

  return (
    <Layout lang={lang}>
      <PageHeader
        title={t.headerTitle}
        subtitle={t.headerSub}
        bgImage="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Body */}
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-20">
          {/* Story + side card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
                <Gem className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary font-semibold">
                  {t.storyEyebrow}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                {t.storyTitle}
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>{t.storyP1}</p>
                <p>{t.storyP2}</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link href={`/${lang}/contact`}>
                  <Button className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-full px-7 py-6 text-base font-extrabold">
                    {t.ctaPrimary}
                  </Button>
                </Link>

                <a
                  href="https://wa.me/212716594562"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    className="rounded-full px-7 py-6 text-base font-bold"
                  >
                    <MessageCircle className="w-4 h-4 me-2" />
                    {t.ctaWhats}
                  </Button>
                </a>

                <a href="tel:+212664111266">
                  <Button
                    variant="outline"
                    className="rounded-full px-7 py-6 text-base font-bold"
                  >
                    <Phone className="w-4 h-4 me-2" />
                    {t.ctaCall}
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              <Card className="border-none shadow-xl overflow-hidden">
                <div className="relative h-44">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70" />
                  <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                    <svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="zlg"
                          x="0"
                          y="0"
                          width="56"
                          height="56"
                          patternUnits="userSpaceOnUse"
                        >
                          <path d="M28 0L56 28L28 56L0 28Z" fill="white" />
                          <path
                            d="M28 14L42 28L28 42L14 28Z"
                            fill="transparent"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#zlg)" />
                    </svg>
                  </div>
                  <div className="relative z-10 p-6 text-primary-foreground">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent fill-current" />
                      <span className="font-extrabold">Afrah Wahid</span>
                    </div>
                    <div className="mt-3 text-sm opacity-90">
                      {isAr
                        ? "تنظيم مغربي فاخر • تواصل سريع • نتائج محسوبة"
                        : "Luxe marocain • Réponse rapide • Détails maîtrisés"}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-sm">{t.cityLine}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="text-primary font-extrabold text-lg">
                    {t.highlightsTitle}
                  </div>
                  <div className="space-y-4">
                    {t.highlights.map((h, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                          <h.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-primary">
                            {h.title}
                          </div>
                          <div className="text-sm text-muted-foreground leading-relaxed">
                            {h.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stats strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {t.stats.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-primary/10 bg-primary/5 px-5 py-4"
                  >
                    <div className="text-accent font-extrabold">{s.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Why choose */}
          <div className="mt-16 md:mt-20">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-primary">
                {t.whyTitle}
              </h3>
              <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {t.whyItems.map((item, idx) => (
                <Card key={idx} className="border-none shadow-lg">
                  <CardContent className="p-6 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-gray-800 leading-relaxed">
                      {item}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 md:mt-20">
            <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="zcta"
                      x="0"
                      y="0"
                      width="56"
                      height="56"
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M28 0L56 28L28 56L0 28Z" fill="white" />
                      <path
                        d="M28 14L42 28L28 42L14 28Z"
                        fill="transparent"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#zcta)" />
                </svg>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-sm opacity-90">
                      {isAr
                        ? "عرض ثمن واضح • تواصل سريع"
                        : "Offre claire • Réponse rapide"}
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-extrabold">
                    {t.ctaTitle}
                  </h4>
                  <p className="opacity-90 leading-relaxed">{t.ctaDesc}</p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link href={`/${lang}/contact`}>
                    <Button className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-full px-7 py-6 text-base font-extrabold w-full">
                      {t.ctaPrimary}
                    </Button>
                  </Link>

                  <a
                    href="https://wa.me/212716594562"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="rounded-full px-7 py-6 text-base font-bold w-full border-white/30"
                    >
                      <MessageCircle className="w-4 h-4 me-2" />
                      {t.ctaWhats}
                    </Button>
                  </a>

                  <a href="tel:+212664111266" className="w-full">
                    <Button
                      variant="outline"
                      className="rounded-full px-7 py-6 text-base font-bold w-full border-white/30"
                    >
                      <Phone className="w-4 h-4 me-2" />
                      {t.ctaCall}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
