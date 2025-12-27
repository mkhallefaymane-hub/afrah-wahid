import React, { useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryProps {
  lang: "ar" | "fr";
}

type CategoryKey =
  | "all"
  | "wedding"
  | "henna"
  | "decor"
  | "lights"
  | "catering";

type Item = {
  id: string;
  category: Exclude<CategoryKey, "all">;
  titleAr: string;
  titleFr: string;
  placeAr?: string;
  placeFr?: string;
  src: string;
};

export default function Gallery({ lang }: GalleryProps) {
  const isAr = lang === "ar";

  const content = {
    ar: {
      title: "معرض الصور",
      subtitle: "لقطات من أجواء مغربية فاخرة — زليج، ذهب، دقة، وذوق رفيع",
      tabs: [
        { key: "all" as const, label: "الكل" },
        { key: "wedding" as const, label: "العرس المغربي" },
        { key: "henna" as const, label: "الحناء" },
        { key: "decor" as const, label: "الزينة" },
        { key: "lights" as const, label: "الإضاءة والصوت" },
        { key: "catering" as const, label: "الضيافة" },
      ],
      ctaTitle: "بغيتي نفس الستايل فحفلك؟",
      ctaDesc:
        "صيفط لينا المدينة + التاريخ + النوع… وغادي نجاوبوك بعرض ثمن فالحين.",
      ctaBtn: "واتساب الآن",
    },
    fr: {
      title: "Galerie",
      subtitle:
        "Des ambiances marocaines luxueuses — zellige, doré, dakka, et élégance",
      tabs: [
        { key: "all" as const, label: "Tout" },
        { key: "wedding" as const, label: "Mariage marocain" },
        { key: "henna" as const, label: "Henné" },
        { key: "decor" as const, label: "Décoration" },
        { key: "lights" as const, label: "Son & Lumière" },
        { key: "catering" as const, label: "Hospitalité" },
      ],
      ctaTitle: "Vous voulez le même style ?",
      ctaDesc:
        "Envoyez la ville + la date + le type… et on vous répond rapidement avec un devis.",
      ctaBtn: "WhatsApp",
    },
  };

  const t = isAr ? content.ar : content.fr;

  // ✅ Replace these with your real photos later (same structure)
  const items: Item[] = useMemo(
    () => [
      {
        id: "w1",
        category: "wedding",
        titleAr: "دخول العروس — لمسة ذهبية",
        titleFr: "Entrée de la mariée — touche dorée",
        placeAr: "الجديدة",
        placeFr: "eljadida",
        src: "https://i.ibb.co/0ywqGz2T/c8e6d781aef4d3a60622dfb9aa9895cb.jpg",
      },
      {
        id: "w2",
        category: "wedding",
        titleAr: "قاعة فخمة — أخضر وذهبي",
        titleFr: "Salle luxueuse — vert & or",
        placeAr: "الجديدة",
        placeFr: "eljadida",
        src: "https://i.ibb.co/qZ3rRwT/ed7eaac658565be27533b57213647a7a.webp",
      },
      {
        id: "h1",
        category: "henna",
        titleAr: "جلسة حناء راقية",
        titleFr: "Séance de henné élégante",
        placeAr: "الجديدة",
        placeFr: "El Jadida",
        src: "https://i.ibb.co/WvrPWywP/C-r-monie-du-henn-marocain-application-traditionnelle.webp",
      },
      {
        id: "d1",
        category: "decor",
        titleAr: "زينة مغربية — زليج وأقواس",
        titleFr: "Décor marocain — zellige & arches",
        placeAr: "مراكش",
        placeFr: "Marrakech",
        src: "https://i.ibb.co/hRxLVkwD/360-F-1576627358-g3fbq9-R8-Ts-ZTj-Kdhdmc4-C9-Vdxao-PQ9-To.webp",
      },
      {
        id: "l1",
        category: "lights",
        titleAr: "إضاءة سينمائية للحفل",
        titleFr: "Lumière cinématique",
        placeAr: "الرباط",
        placeFr: "Rabat",
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "c1",
        category: "catering",
        titleAr: "ضيافة — حلويات وشاي",
        titleFr: "Hospitalité — pâtisseries & thé",
        placeAr: "الجديدة",
        placeFr: "eljadida",
        src: "https://i.ibb.co/mCFjWHgv/1-22-225x300.webp",
      },
      {
        id: "d2",
        category: "decor",
        titleAr: "تفاصيل الطاولة — فخامة هادئة",
        titleFr: "Détails de table — luxe discret",
        placeAr: "الجديدة",
        placeFr: "el jadida",
        src: "https://i.ibb.co/0jCw0kW3/ea3335f72a578f86690ff3149d10d625.webp",
      },
      {
        id: "w3",
        category: "wedding",
        titleAr: "ممر العروس — تنظيم محكم",
        titleFr: "Allée — organisation parfaite",
        placeAr: "الجديدة",
        placeFr: "el jadida",
        src: "https://i.ibb.co/WWVFWf3d/c8e6d781aef4d3a60622dfb9aa9895cb.webp",
      },
    ],
    [],
  );

  const [active, setActive] = useState<CategoryKey>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (active === "all") return items;
    return items.filter((it) => it.category === active);
  }, [active, items]);

  const openIndex = useMemo(() => {
    if (!openId) return -1;
    return filtered.findIndex((x) => x.id === openId);
  }, [openId, filtered]);

  const current = openIndex >= 0 ? filtered[openIndex] : null;

  const goPrev = () => {
    if (!filtered.length) return;
    const next = openIndex <= 0 ? filtered.length - 1 : openIndex - 1;
    setOpenId(filtered[next].id);
  };

  const goNext = () => {
    if (!filtered.length) return;
    const next = openIndex >= filtered.length - 1 ? 0 : openIndex + 1;
    setOpenId(filtered[next].id);
  };

  const waMessage = isAr
    ? encodeURIComponent(
        "السلام عليكم أفراح وحيد، بغيت معلومات على تنظيم مناسبة. المدينة: ___ التاريخ: ___ النوع: ___",
      )
    : encodeURIComponent(
        "Bonjour Afrah Wahid, je souhaite un devis. Ville: ___ Date: ___ Type: ___",
      );

  const waLink = `https://wa.me/212716594562?text=${waMessage}`;

  return (
    <Layout lang={lang}>
      <PageHeader
        title={t.title}
        subtitle={t.subtitle}
        bgImage="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Tabs + Grid */}
      <section className="relative">
        <div className="container mx-auto px-4 py-14">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {t.tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={[
                  "rounded-full px-5 py-2 text-sm font-bold transition-all",
                  "border border-primary/10",
                  active === tab.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-white hover:bg-primary/5 text-primary",
                ].join(" ")}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filtered.map((it, idx) => (
                <motion.button
                  layout
                  key={it.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(idx * 0.03, 0.2),
                  }}
                  onClick={() => setOpenId(it.id)}
                  className="group text-left rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all border border-primary/5"
                >
                  <div className="relative h-72">
                    <img
                      src={it.src}
                      alt={isAr ? it.titleAr : it.titleFr}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Luxury overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                    {/* Moroccan sparkle */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                      <div className="space-y-1">
                        <div className="text-white font-extrabold text-lg leading-tight">
                          {isAr ? it.titleAr : it.titleFr}
                        </div>
                        <div className="text-white/80 text-sm">
                          {isAr ? it.placeAr : it.placeFr}
                        </div>
                      </div>
                      <div className="text-accent font-black tracking-[0.35em] pb-1">
                        ✦
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 text-center">
            <div className="text-accent tracking-[0.5em] mb-4">✦ ✦ ✦</div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              {t.ctaTitle}
            </h3>
            <p className="opacity-90 text-lg mb-8">{t.ctaDesc}</p>
            <a href={waLink} target="_blank" rel="noreferrer">
              <Button className="bg-accent text-accent-foreground hover:bg-white hover:text-primary font-extrabold rounded-full px-10 py-6 text-lg shadow-2xl shadow-black/25">
                {t.ctaBtn}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenId(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-black"
              initial={{ scale: 0.96, y: 18 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 18 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src}
                alt={isAr ? current.titleAr : current.titleFr}
                className="w-full max-h-[78vh] object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 via-black/15 to-transparent">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-white font-extrabold text-xl">
                      {isAr ? current.titleAr : current.titleFr}
                    </div>
                    <div className="text-white/80 text-sm">
                      {isAr ? current.placeAr : current.placeFr}
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenId(null)}
                    className="rounded-full bg-white/10 hover:bg-white/20 p-2 text-white transition"
                    aria-label="Close"
                  >
                    <X />
                  </button>
                </div>
              </div>

              {/* Prev / Next */}
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition"
                aria-label="Previous"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition"
                aria-label="Next"
              >
                <ChevronRight />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
