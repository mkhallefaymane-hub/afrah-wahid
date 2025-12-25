import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

interface AboutProps {
  lang: "ar" | "fr";
}

export default function About({ lang }: AboutProps) {
  const isAr = lang === "ar";

  return (
    <Layout lang={lang}>
      <PageHeader 
        title={isAr ? "من نحن" : "À Propos"} 
        subtitle={isAr ? "قصة شغف بالتقاليد المغربية الأصيلة" : "Une histoire de passion pour les traditions marocaines"}
        bgImage="https://images.unsplash.com/photo-1547466133-d142b9365287?q=80&w=2000&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              {isAr ? "أفراح وحيد: الأصالة والتميز" : "Afrah Wahid : Authenticité et Excellence"}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                {isAr 
                  ? "تأسست وكالتنا بشغف عميق للثقافة المغربية وفنون الاحتفال. نحن نؤمن بأن كل مناسبة هي لوحة فنية يجب أن تُرسم بأدق التفاصيل."
                  : "Notre agence a été fondée avec une passion profonde pour la culture marocaine et l'art de la célébration. Nous croyons que chaque événement est une œuvre d'art qui doit être peinte avec les détails les plus fins."}
              </p>
              <p>
                {isAr
                  ? "فريقنا يجمع بين الخبرة التقليدية في الأعراس المغربية وبين اللمسات العصرية في التنظيم والديكور، لنضمن لكم حفلاً يجمع بين فخامة الماضي وأناقة الحاضر."
                  : "Notre équipe allie l'expertise traditionnelle des mariages marocains aux touches modernes d'organisation et de décoration, pour vous garantir une fête qui mêle le luxe du passé à l'élégance du présent."}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border-4 border-accent rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://pixabay.com/get/g1e02e055580d162fee295824d76727109eccc32b60c92141f137c1ee6950e57d5820e520d13668ce07c0b027749faa9c19f884035a761fd5a6004a4c4156300b_1280.jpg" 
              alt="Team working" 
              className="rounded-2xl shadow-xl w-full relative z-10"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
