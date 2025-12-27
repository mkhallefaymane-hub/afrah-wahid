import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServicesProps {
  lang: "ar" | "fr";
}

export default function Services({ lang }: ServicesProps) {
  const isAr = lang === "ar";

  const content = {
    ar: {
      title: "خدماتنا المتميزة",
      subtitle: "نقدم لكم تجربة متكاملة لتجعل مناسبتكم ذكرى لا تنسى",

      // ✅ ADDED
      why: {
        title: "علاش تختار أفراح وحيد؟",
        items: [
          {
            title: "تفاصيل محسوبة",
            desc: "كنخدمو بالبرنامج وبالميزانية باش كلشي يخرج فاخر ومنظم.",
          },
          {
            title: "لمسة مغربية فخمة",
            desc: "زليج، أقواس، ضيافة… هوية مغربية راقية بلا تكلف.",
          },
          {
            title: "راحة بالك أولاً",
            desc: "فريق مرافق نهار الحفل… وانت غير استمتع.",
          },
        ],
      },

      // ✅ ADDED
      process: {
        title: "كيفاش كنخدمو معاك؟",
        steps: [
          { n: "01", t: "تواصل", d: "واتساب/اتصال وكنجمعو المعلومات." },
          { n: "02", t: "تصور", d: "كنقترحو ستايل + تفاصيل حسب ميزانيتك." },
          { n: "03", t: "تأكيد", d: "كنثبتو التاريخ والخدمات بعقد واضح." },
          {
            n: "04",
            t: "تنفيذ",
            d: "نهار الحفل كتعيش اللحظة وحنا كنشدو كلشي.",
          },
        ],
      },

      // ✅ ADDED
      cta: {
        title: "بغيتي عرض ثمن مناسب لمناسبتك؟",
        subtitle: "رسّل لينا التاريخ والمدينة ونوع الحفل… وغادي نجاوبوك بسرعة.",
        primary: "اطلب عرض ثمن",
        call: "اتصل بنا",
        whatsapp: "واتساب",
      },

      list: [
        {
          title: "تنظيم العرس المغربي",
          desc: "من النكافة للعمارية، تنظيم شامل للزفاف المغربي الأصيل بجميع طقوسه أو بلمسة عصرية.",
          features: [
            "نكافة محترفة",
            "عمارية تقليدية/عصرية",
            "تنسيق الدخول والخروج",
            "مشرفة خاصة للحفل",
          ],
          image:
            "https://i.ibb.co/YBRRFMWW/Mari-e-marocaine-en-caftan-vert-meraude-mariage-traditionnel.webp",
        },
        {
          title: "الحناء ودفوع العروس",
          desc: "جلسات حناء راقية مع ديكور خاص، وتنظيم تقديم الدفوع والهدايا بشكل مبهر.",
          features: [
            "ديكور أخضر وذهبي",
            "نقاشة محترفة",
            "أطباق تقديم فاخرة",
            "أجواء موسيقية تقليدية",
          ],
          image:
            "https://i.ibb.co/WvrPWywP/C-r-monie-du-henn-marocain-application-traditionnelle.webp",
        },
        {
          title: "الإضاءة والصوت",
          desc: "تجهيزات صوتية وإضاءة احترافية لتحويل القاعة إلى تحفة فنية تناسب أجواء الحفل.",
          features: [
            "إضاءة ديناميكية",
            "أجهزة صوت عالية الجودة",
            "مؤثرات بصرية",
            "تقني متخصص",
          ],
          image:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "الضيافة والتموين",
          desc: "حلويات مغربية أصيلة، شاي منعنع، وتمور محشوة تقدم بأرقى الأواني الفضية.",
          features: [
            "حلويات اللوز",
            "شاي مغربي ممتاز",
            "طاقم نادلين محترف",
            "أواني فضية فاخرة",
          ],
          image: "https://i.ibb.co/RpmFYt4Y/image.jpg",
        },
      ],
    },

    fr: {
      title: "Nos Services Exclusifs",
      subtitle:
        "Nous offrons une expérience complète pour faire de votre événement un souvenir inoubliable",

      // ✅ ADDED
      why: {
        title: "Pourquoi Afrah Wahid ?",
        items: [
          {
            title: "Détails maîtrisés",
            desc: "Plan clair, budget optimisé, résultat élégant et organisé.",
          },
          {
            title: "Touche marocaine premium",
            desc: "Zellige, arches, hospitalité… identité marocaine raffinée.",
          },
          {
            title: "Tranquillité d’esprit",
            desc: "Une équipe dédiée le jour J… vous profitez.",
          },
        ],
      },

      // ✅ ADDED
      process: {
        title: "Comment on travaille ?",
        steps: [
          {
            n: "01",
            t: "Contact",
            d: "Appel/WhatsApp, on collecte vos besoins.",
          },
          {
            n: "02",
            t: "Proposition",
            d: "Style + détails selon votre budget.",
          },
          {
            n: "03",
            t: "Validation",
            d: "Date & services confirmés, tout est clair.",
          },
          {
            n: "04",
            t: "Réalisation",
            d: "Le jour J, vous profitez… on gère.",
          },
        ],
      },

      // ✅ ADDED
      cta: {
        title: "Vous voulez un devis adapté à votre événement ?",
        subtitle:
          "Envoyez la date, la ville et le type d’événement… réponse rapide.",
        primary: "Demander un devis",
        call: "Appeler",
        whatsapp: "WhatsApp",
      },

      list: [
        {
          title: "Mariage Marocain",
          desc: "De la Negafa à l'Amaria, organisation complète du mariage marocain authentique ou moderne.",
          features: [
            "Negafa professionnelle",
            "Amaria traditionnelle/moderne",
            "Coordination entrée/sortie",
            "Superviseur dédié",
          ],
          image:
            "https://images.unsplash.com/photo-1544297839-4d6d63d6b05b?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Henné & Trousseau",
          desc: "Séances de henné élégantes avec décor spécial, et présentation éblouissante des cadeaux.",
          features: [
            "Décor vert & or",
            "Hennaya experte",
            "Plateaux de présentation luxueux",
            "Ambiance musicale",
          ],
          image:
            "https://images.unsplash.com/photo-1596238647037-4f81016839a9?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Son & Lumière",
          desc: "Équipement sonore et éclairage professionnel pour transformer la salle en œuvre d'art.",
          features: [
            "Éclairage dynamique",
            "Son haute fidélité",
            "Effets visuels",
            "Technicien spécialisé",
          ],
          image:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Traiteur & Hospitalité",
          desc: "Pâtisseries marocaines authentiques, thé à la menthe et dattes fourrées servis dans de l'argenterie fine.",
          features: [
            "Gâteaux aux amandes",
            "Thé marocain premium",
            "Serveurs professionnels",
            "Vaisselle argentée",
          ],
          image:
            "https://images.unsplash.com/photo-1582234057639-55615d787049?q=80&w=1000&auto=format&fit=crop",
        },
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
        {/* ✅ WHY US */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              {t.why.title}
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.why.items.map((it, i) => (
              <Card key={i} className="border-none shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="text-accent font-extrabold text-lg mb-2">
                    {it.title}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {it.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ✅ PROCESS */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              {t.process.title}
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {t.process.steps.map((s, i) => (
              <Card key={i} className="border-none shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-accent font-extrabold text-2xl">
                    {s.n}
                  </div>
                  <div className="font-bold text-primary mt-2">{s.t}</div>
                  <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ✅ SERVICES LIST */}
        <div className="space-y-24">
          {t.list.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 md:h-[500px] object-cover rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  {service.title}
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="font-medium text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ✅ CTA INSIDE EACH SERVICE */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a href={`/${lang}/contact`} className="w-full sm:w-auto">
                    <button className="w-full rounded-full bg-accent px-6 py-3 font-extrabold text-accent-foreground hover:bg-white hover:text-primary transition">
                      {isAr ? "احجز الآن" : "Réserver"}
                    </button>
                  </a>

                  <a
                    href="https://wa.me/212716594562"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full rounded-full border border-primary/20 bg-white/60 px-6 py-3 font-bold text-primary hover:bg-white transition">
                      {isAr ? "واتساب" : "WhatsApp"}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ FINAL CTA */}
        <section className="mt-24">
          <Card className="border-none shadow-2xl overflow-hidden bg-primary text-primary-foreground">
            <CardContent className="p-10 md:p-14">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <h3 className="text-3xl md:text-4xl font-extrabold">
                  {t.cta.title}
                </h3>
                <p className="opacity-90">{t.cta.subtitle}</p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <a href={`/${lang}/contact`} className="w-full sm:w-auto">
                    <button className="w-full rounded-full bg-accent px-7 py-3 font-extrabold text-accent-foreground hover:bg-white hover:text-primary transition">
                      {t.cta.primary}
                    </button>
                  </a>

                  <a href="tel:+212664111266" className="w-full sm:w-auto">
                    <button className="w-full rounded-full border border-white/30 bg-white/10 px-7 py-3 font-bold hover:bg-white hover:text-primary transition">
                      {t.cta.call}
                    </button>
                  </a>

                  <a
                    href="https://wa.me/212716594562"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full rounded-full border border-white/30 bg-white/10 px-7 py-3 font-bold hover:bg-white hover:text-primary transition">
                      {t.cta.whatsapp}
                    </button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
}
