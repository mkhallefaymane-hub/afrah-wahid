import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown, Sparkles, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface PackagesProps {
  lang: "ar" | "fr";
}

export default function Packages({ lang }: PackagesProps) {
  const isAr = lang === "ar";

  const content = {
    ar: {
      title: "باقات الأفراح",
      subtitle: "اختار الباقة اللي مناسبة لميزانيتك… وخلي علينا التفاصيل",
      note: "💡 الأسعار قابلة للتغيير حسب المدينة، القاعة، وعدد الضيوف. كنصيفطو ليك عرض مضبوط بعد تواصل سريع.",
      badges: {
        best: "الأكثر طلباً",
        value: "أفضل قيمة",
      },
      buttons: {
        book: "احجز الآن",
        whatsapp: "واتساب",
        call: "اتصل",
        custom: "بغيت عرض خاص",
      },
      faqTitle: "بغيتي عرض خاص؟",
      faqDesc:
        "عندك مناسبة مختلفة ولا بغيتي خدمات محددة؟ صيفط لينا التاريخ والمدينة ونوع الحفل… ونركبو ليك عرض على القياس.",
      packages: [
        {
          name: "باقة أساسية",
          price: "ابتداءً من 15,000 درهم",
          desc: "مثالية للحفلات الصغيرة والمتوسطة بتنظيم أنيق وبسيط.",
          icon: Shield,
          featured: false,
          items: [
            "تنسيق البرنامج والتوقيت",
            "توجيه الفريق نهار الحفل",
            "ديكور بسيط وأنيق (حسب الاختيار)",
            "متابعة قبل الحفل",
            "دعم واتساب",
          ],
        },
        {
          name: "باقة ذهبية",
          price: "ابتداءً من 35,000 درهم",
          desc: "أفضل اختيار للأغلبية: لمسة مغربية فاخرة وتنظيم شامل.",
          icon: Crown,
          featured: true,
          items: [
            "تنظيم شامل + مشرفة خاصة",
            "زينة مغربية (لمسة زليج/أقواس) حسب القاعة",
            "تنسيق الدخول والخروج + البروتوكول",
            "جلسة تصوير/فيديو (اختياري حسب الاتفاق)",
            "دقة/موسيقى (حسب الإمكانية)",
            "متابعة دقيقة قبل الحفل",
          ],
        },
        {
          name: "باقة ملكية",
          price: "حسب الطلب",
          desc: "للي بغا تجربة فخمة 100٪: تفاصيل راقية من الألف للياء.",
          icon: Sparkles,
          featured: false,
          items: [
            "تصميم ستايل خاص للمناسبة",
            "ديكور فاخر كامل (حسب القاعة)",
            "إدارة كاملة للفريق والموردين",
            "خطة دخول العروس + العمارية (حسب الاتفاق)",
            "إضاءة وصوت احترافي (حسب الإمكانية)",
            "خدمات VIP حسب الطلب",
          ],
        },
      ],
      trust: [
        { k: "تجربة مغربية فاخرة", v: "ديكور + طقوس + ضيافة" },
        { k: "وضوح في التنظيم", v: "برنامج وميزانية واضحين" },
        { k: "تواصل سريع", v: "واتساب/اتصال مباشر" },
      ],
    },
    fr: {
      title: "Nos Packs",
      subtitle:
        "Choisissez le pack adapté à votre budget… on s’occupe des détails",
      note: "💡 Les prix varient selon la ville, la salle et le nombre d’invités. Nous vous envoyons un devis précis après un contact rapide.",
      badges: {
        best: "Le plus demandé",
        value: "Meilleure valeur",
      },
      buttons: {
        book: "Réserver",
        whatsapp: "WhatsApp",
        call: "Appeler",
        custom: "Devis sur-mesure",
      },
      faqTitle: "Vous voulez un pack sur-mesure ?",
      faqDesc:
        "Un événement différent ou des services précis ? Envoyez la date, la ville et le type d’événement… on vous prépare un devis personnalisé.",
      packages: [
        {
          name: "Pack Essentiel",
          price: "À partir de 15 000 MAD",
          desc: "Idéal pour une organisation élégante et simple.",
          icon: Shield,
          featured: false,
          items: [
            "Planification & timing",
            "Coordination le jour J",
            "Décor simple & élégant (selon choix)",
            "Suivi avant l’événement",
            "Support WhatsApp",
          ],
        },
        {
          name: "Pack Gold",
          price: "À partir de 35 000 MAD",
          desc: "Le meilleur choix: touche marocaine premium + organisation complète.",
          icon: Crown,
          featured: true,
          items: [
            "Organisation complète + superviseur dédié",
            "Décor marocain (zellige/arches) selon la salle",
            "Entrée/sortie + protocole",
            "Photo/Vidéo (selon accord)",
            "Musique/Dakka (selon possibilité)",
            "Suivi détaillé avant l’événement",
          ],
        },
        {
          name: "Pack Royal",
          price: "Sur demande",
          desc: "Expérience luxe: design, coordination et détails VIP.",
          icon: Sparkles,
          featured: false,
          items: [
            "Style & design sur-mesure",
            "Décor premium complet (selon la salle)",
            "Gestion équipe & prestataires",
            "Entrée mariée + Amaria (selon accord)",
            "Son & lumière pro (selon possibilité)",
            "Services VIP sur demande",
          ],
        },
      ],
      trust: [
        { k: "Expérience marocaine luxe", v: "Décor + rituels + hospitalité" },
        { k: "Organisation claire", v: "Plan + budget" },
        { k: "Contact rapide", v: "WhatsApp/Appel" },
      ],
    },
  };

  const t = isAr ? content.ar : content.fr;

  return (
    <Layout lang={lang}>
      <PageHeader
        title={t.title}
        subtitle={t.subtitle}
        bgImage="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2000&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-20">
        {/* Trust strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {t.trust.map((x, i) => (
            <Card key={i} className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="text-accent font-extrabold">{x.k}</div>
                <div className="text-sm text-muted-foreground mt-1">{x.v}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="mb-10 rounded-2xl border border-primary/10 bg-white/60 p-5 text-sm text-muted-foreground">
          {t.note}
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {t.packages.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Card
                  className={[
                    "border-none shadow-xl overflow-hidden relative bg-white",
                    p.featured ? "ring-2 ring-accent" : "",
                  ].join(" ")}
                >
                  {p.featured && (
                    <div className="absolute top-4 left-4 rounded-full bg-accent px-4 py-1 text-xs font-extrabold text-accent-foreground">
                      {t.badges.best}
                    </div>
                  )}

                  <CardContent className="p-8">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-2xl font-extrabold text-primary">
                          {p.name}
                        </div>
                        <div className="text-accent font-extrabold mt-2">
                          {p.price}
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 leading-relaxed">
                          {p.desc}
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                        <Icon size={26} />
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {p.items.map((it, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                            <Check size={14} strokeWidth={3} />
                          </div>
                          <div className="text-sm text-gray-700 leading-relaxed">
                            {it}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-col gap-3">
                      <Link href={`/${lang}/contact`}>
                        <button className="w-full rounded-full bg-accent px-6 py-3 font-extrabold text-accent-foreground hover:bg-white hover:text-primary transition">
                          {t.buttons.book}
                        </button>
                      </Link>

                      <div className="grid grid-cols-2 gap-3">
                        <a href="tel:+212664111266">
                          <button className="w-full rounded-full border border-primary/15 bg-white/70 px-6 py-3 font-bold text-primary hover:bg-white transition">
                            {t.buttons.call}
                          </button>
                        </a>
                        <a
                          href="https://wa.me/212716594562"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="w-full rounded-full border border-primary/15 bg-white/70 px-6 py-3 font-bold text-primary hover:bg-white transition">
                            {t.buttons.whatsapp}
                          </button>
                        </a>
                      </div>
                    </div>

                    {p.featured && (
                      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Sparkles size={14} />
                        <span>
                          {isAr
                            ? "اختيار مثالي للغالبية"
                            : "Le meilleur choix pour la majorité"}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="mt-16">
          <Card className="border-none shadow-2xl bg-primary text-primary-foreground overflow-hidden">
            <CardContent className="p-10 md:p-14">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h3 className="text-3xl md:text-4xl font-extrabold">
                  {t.faqTitle}
                </h3>
                <p className="opacity-90">{t.faqDesc}</p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <Link href={`/${lang}/contact`}>
                    <button className="rounded-full bg-accent px-7 py-3 font-extrabold text-accent-foreground hover:bg-white hover:text-primary transition inline-flex items-center gap-2">
                      {t.buttons.custom}{" "}
                      <ArrowRight
                        className={isAr ? "rotate-180" : ""}
                        size={18}
                      />
                    </button>
                  </Link>

                  <a
                    href="https://wa.me/212716594562"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="rounded-full border border-white/25 bg-white/10 px-7 py-3 font-bold hover:bg-white hover:text-primary transition">
                      {t.buttons.whatsapp}
                    </button>
                  </a>

                  <a href="tel:+212664111266">
                    <button className="rounded-full border border-white/25 bg-white/10 px-7 py-3 font-bold hover:bg-white hover:text-primary transition">
                      {t.buttons.call}
                    </button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
