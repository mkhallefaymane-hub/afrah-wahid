import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GalleryProps {
  lang: "ar" | "fr";
}

type Category = "all" | "wedding" | "henna" | "decor" | "food";

export default function Gallery({ lang }: GalleryProps) {
  const isAr = lang === "ar";
  const [filter, setFilter] = useState<Category>("all");

  const categories = isAr 
    ? { all: "الكل", wedding: "العرس", henna: "الحناء", decor: "الزواق", food: "الضيافة" }
    : { all: "Tout", wedding: "Mariage", henna: "Henné", decor: "Décor", food: "Traiteur" };

  // Placeholder images with solid colors + patterns since we don't have many real ones
  const items = [
    { id: 1, category: "wedding", color: "bg-emerald-100", label: "Wedding Hall / قاعة الأفراح" },
    { id: 2, category: "henna", color: "bg-green-100", label: "Henna Setup / جلسة الحناء" },
    { id: 3, category: "decor", color: "bg-orange-100", label: "Table Decor / تزيين الطاولات" },
    { id: 4, category: "food", color: "bg-amber-100", label: "Sweets / حلويات" },
    { id: 5, category: "wedding", color: "bg-emerald-200", label: "Amaria / العمارية" },
    { id: 6, category: "decor", color: "bg-orange-200", label: "Lighting / الإضاءة" },
  ];

  const filteredItems = filter === "all" ? items : items.filter(i => i.category === filter);

  return (
    <Layout lang={lang}>
      <PageHeader 
        title={isAr ? "معرض الصور" : "Notre Galerie"} 
        subtitle={isAr ? "لحظات لا تنسى من تنظيمنا" : "Des moments inoubliables organisés par nos soins"}
        bgImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-20">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(categories) as Category[]).map((cat) => (
            <Button
              key={cat}
              onClick={() => setFilter(cat)}
              variant={filter === cat ? "default" : "outline"}
              className={`rounded-full px-6 ${filter === cat ? "bg-primary text-white" : "text-primary border-primary hover:bg-primary/10"}`}
            >
              {categories[cat]}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div className={`aspect-square ${item.color} rounded-2xl cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 relative group overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                    <span className="bg-white/90 text-primary px-4 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                      {isAr ? "عرض" : "Voir"}
                    </span>
                  </div>
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-primary-foreground font-bold drop-shadow-md">{item.label}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <div className={`w-full aspect-video ${item.color} rounded-lg flex items-center justify-center`}>
                  <p className="text-2xl font-bold text-primary/50">{item.label}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </Layout>
  );
}
