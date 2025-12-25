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
      list: [
        {
          title: "تنظيم العرس المغربي",
          desc: "من النكافة للعمارية، تنظيم شامل للزفاف المغربي الأصيل بجميع طقوسه أو بلمسة عصرية.",
          features: ["نكافة محترفة", "عمارية تقليدية/عصرية", "تنسيق الدخول والخروج", "مشرفة خاصة للحفل"],
          image: "https://images.unsplash.com/photo-1544297839-4d6d63d6b05b?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "الحناء ودفوع العروس",
          desc: "جلسات حناء راقية مع ديكور خاص، وتنظيم تقديم الدفوع والهدايا بشكل مبهر.",
          features: ["ديكور أخضر وذهبي", "نقاشة محترفة", "أطباق تقديم فاخرة", "أجواء موسيقية تقليدية"],
          image: "https://images.unsplash.com/photo-1596238647037-4f81016839a9?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "الإضاءة والصوت",
          desc: "تجهيزات صوتية وإضاءة احترافية لتحويل القاعة إلى تحفة فنية تناسب أجواء الحفل.",
          features: ["إضاءة ديناميكية", "أجهزة صوت عالية الجودة", "مؤثرات بصرية", "تقني متخصص"],
          image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "الضيافة والتموين",
          desc: "حلويات مغربية أصيلة، شاي منعنع، وتمور محشوة تقدم بأرقى الأواني الفضية.",
          features: ["حلويات اللوز", "شاي مغربي ممتاز", "طاقم نادلين محترف", "أواني فضية فاخرة"],
          image: "https://images.unsplash.com/photo-1582234057639-55615d787049?q=80&w=1000&auto=format&fit=crop"
        }
      ]
    },
    fr: {
      title: "Nos Services Exclusifs",
      subtitle: "Nous offrons une expérience complète pour faire de votre événement un souvenir inoubliable",
      list: [
        {
          title: "Mariage Marocain",
          desc: "De la Negafa à l'Amaria, organisation complète du mariage marocain authentique ou moderne.",
          features: ["Negafa professionnelle", "Amaria traditionnelle/moderne", "Coordination entrée/sortie", "Superviseur dédié"],
          image: "https://images.unsplash.com/photo-1544297839-4d6d63d6b05b?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Henné & Trousseau",
          desc: "Séances de henné élégantes avec décor spécial, et présentation éblouissante des cadeaux.",
          features: ["Décor vert & or", "Hennaya experte", "Plateaux de présentation luxueux", "Ambiance musicale"],
          image: "https://images.unsplash.com/photo-1596238647037-4f81016839a9?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Son & Lumière",
          desc: "Équipement sonore et éclairage professionnel pour transformer la salle en œuvre d'art.",
          features: ["Éclairage dynamique", "Son haute fidélité", "Effets visuels", "Technicien spécialisé"],
          image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Traiteur & Hospitalité",
          desc: "Pâtisseries marocaines authentiques, thé à la menthe et dattes fourrées servis dans de l'argenterie fine.",
          features: ["Gâteaux aux amandes", "Thé marocain premium", "Serveurs professionnels", "Vaisselle argentée"],
          image: "https://images.unsplash.com/photo-1582234057639-55615d787049?q=80&w=1000&auto=format&fit=crop"
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
        bgImage="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2000&auto=format&fit=crop"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-24">
          {t.list.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-80 md:h-[500px] object-cover rounded-2xl shadow-xl"
                />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{service.title}</h2>
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
                      <span className="font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
