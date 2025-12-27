import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useContact } from "@/hooks/use-contact";

import { Card, CardContent } from "@/components/ui/card";
import {
  Loader2,
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Sparkles,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

interface ContactProps {
  lang: "ar" | "fr";
}

export default function Contact({ lang }: ContactProps) {
  const isAr = lang === "ar";
  const contactMutation = useContact();

  const PHONE_DISPLAY = "06 64 11 12 66";
  const PHONE_TEL = "+212664111266";
  const WHATSAPP = "https://wa.me/212716594562";
  const CITY = "Marrakech, Maroc";

  const t = isAr
    ? {
        title: "اتصل بنا",
        subtitle:
          "جاوبنا سريع… وصيفط لينا معلومات بسيطة باش نخرّجو ليك عرض ثمن مضبوط",
        hint: "⚡ كنردّو غالباً فمدة قصيرة. وخليك مرتاح: التفاصيل علينا.",
        formTitle: "طلب عرض ثمن (مجاني)",
        formDesc:
          "عطينا المعلومات الأساسية، وغادي نرجعو ليك بعرض مناسب لميزانيتك.",
        name: "الاسم الكامل",
        phone: "رقم الهاتف",
        city: "المدينة",
        date: "تاريخ المناسبة (تقريبي)",
        type: "نوع المناسبة",
        msg: "رسالتك",
        submit: "إرسال الطلب",
        sending: "كنصيفطو…",
        placeholder: {
          name: "مثال: أحمد العلمي",
          phone: "06XXXXXXXX",
          city: "مثال: مراكش",
          msg: "اكتب تفاصيل: القاعة، عدد الضيوف، واش كاين حناء/عمارية/دقة…",
        },
        types: {
          wedding: "عرس",
          engagement: "خطوبة / حناء",
          event: "مناسبة خاصة",
          corporate: "حفل شركة",
          other: "أخرى",
        },
        quickTitle: "تواصل مباشر",
        quickDesc: "إلى بغيتي جواب أسرع… اتصل أو واتساب مباشرة.",
        trustTitle: "علاش تختار أفراح وحيد؟",
        trust: [
          {
            title: "لمسة مغربية فاخرة",
            desc: "زليج • أقواس • ذوق راقٍ فالتفاصيل",
          },
          { title: "تنظيم مضبوط", desc: "برنامج واضح، وتنسيق محكم نهار الحفل" },
          { title: "تواصل سريع", desc: "واتساب/اتصال… بلا تعقيد" },
        ],
        hoursTitle: "أوقات العمل",
        hours: "كل نهار: 10:00 — 20:00",
        locationTitle: "الموقع",
        ctaTitle: "بغيتي عرض على القياس؟",
        ctaDesc: "صيفط لينا التاريخ + المدينة + نوع الحفل… ونركبو ليك عرض خاص.",
        ctaBtn: "واتساب دابا",
        callBtn: "اتصل الآن",
      }
    : {
        title: "Contactez-nous",
        subtitle:
          "Réponse rapide… envoyez quelques infos et on vous prépare un devis clair",
        hint: "⚡ Réponse généralement rapide. Détendez-vous : on gère les détails.",
        formTitle: "Demande de devis (gratuit)",
        formDesc:
          "Partagez l’essentiel, on revient vers vous avec une proposition adaptée.",
        name: "Nom complet",
        phone: "Téléphone",
        city: "Ville",
        date: "Date (approx.)",
        type: "Type d'événement",
        msg: "Votre message",
        submit: "Envoyer la demande",
        sending: "Envoi…",
        placeholder: {
          name: "Ex: Ahmed Alami",
          phone: "06XXXXXXXX",
          city: "Ex: Marrakech",
          msg: "Détails: salle, nb d’invités, henné/amaria/dakka…",
        },
        types: {
          wedding: "Mariage",
          engagement: "Fiançailles / Henné",
          event: "Événement privé",
          corporate: "Événement pro",
          other: "Autre",
        },
        quickTitle: "Contact direct",
        quickDesc: "Pour une réponse plus rapide : appelez ou WhatsApp.",
        trustTitle: "Pourquoi Afrah Wahid ?",
        trust: [
          {
            title: "Touche marocaine premium",
            desc: "Zellige • arches • détails élégants",
          },
          {
            title: "Organisation carrée",
            desc: "Planning clair & coordination le jour J",
          },
          {
            title: "Réponse rapide",
            desc: "WhatsApp/Appel, sans complication",
          },
        ],
        hoursTitle: "Horaires",
        hours: "Tous les jours : 10:00 — 20:00",
        locationTitle: "Localisation",
        ctaTitle: "Devis sur-mesure ?",
        ctaDesc:
          "Envoyez la date + la ville + le type d’événement… on vous prépare une offre.",
        ctaBtn: "WhatsApp الآن",
        callBtn: "Appeler",
      };

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      city: "",
      occasionDate: "",
      occasionType: "",
      message: "",
    },
  });

  const buildWhatsAppLink = () => {
    const v = form.getValues();

    const occasionTypeMap: Record<string, string> = isAr
      ? {
          wedding: "عرس",
          engagement: "خطوبة / حناء",
          event: "مناسبة خاصة",
          corporate: "حفل شركة",
          other: "أخرى",
        }
      : {
          wedding: "Mariage",
          engagement: "Fiançailles / Henné",
          event: "Événement privé",
          corporate: "Événement pro",
          other: "Autre",
        };

    const typeLabel = v.occasionType
      ? occasionTypeMap[v.occasionType] || v.occasionType
      : "—";

    const lines = isAr
      ? [
          "السلام عليكم أفراح وحيد، بغيت عرض ثمن 🙏",
          `الاسم: ${v.fullName || "—"}`,
          `الهاتف: ${v.phone || "—"}`,
          `المدينة: ${v.city || "—"}`,
          `التاريخ (تقريبي): ${v.occasionDate || "—"}`,
          `نوع المناسبة: ${typeLabel}`,
          `التفاصيل: ${v.message || "—"}`,
        ]
      : [
          "Bonjour Afrah Wahid, je souhaite un devis 🙏",
          `Nom: ${v.fullName || "—"}`,
          `Téléphone: ${v.phone || "—"}`,
          `Ville: ${v.city || "—"}`,
          `Date (approx.): ${v.occasionDate || "—"}`,
          `Type: ${typeLabel}`,
          `Détails: ${v.message || "—"}`,
        ];

    return `https://wa.me/212716594562?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const onSubmit = () => {
    const link = buildWhatsAppLink();
    window.open(link, "_blank");
  };

  return (
    <Layout lang={lang}>
      <PageHeader title={t.title} subtitle={t.subtitle} />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Card className="border-none shadow-2xl bg-white overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm">
                    <Sparkles size={16} />
                    <span className="text-muted-foreground">{t.hint}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-5">
                    {t.formTitle}
                  </h2>
                  <p className="text-muted-foreground mt-2">{t.formDesc}</p>
                  <div className="w-16 h-1 bg-accent rounded-full mt-5" />
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.name}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t.placeholder.name}
                              {...field}
                              className="h-12 bg-gray-50 rounded-xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.phone}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t.placeholder.phone}
                                {...field}
                                className="h-12 bg-gray-50 rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.city}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t.placeholder.city}
                                {...field}
                                className="h-12 bg-gray-50 rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="occasionDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.date}</FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                {...field}
                                value={field.value || ""}
                                className="h-12 bg-gray-50 rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="occasionType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.type}</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-12 bg-gray-50 rounded-xl">
                                  <SelectValue
                                    placeholder={
                                      isAr ? "اختار النوع…" : "Choisir…"
                                    }
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="wedding">
                                  {t.types.wedding}
                                </SelectItem>
                                <SelectItem value="engagement">
                                  {t.types.engagement}
                                </SelectItem>
                                <SelectItem value="event">
                                  {t.types.event}
                                </SelectItem>
                                <SelectItem value="corporate">
                                  {t.types.corporate}
                                </SelectItem>
                                <SelectItem value="other">
                                  {t.types.other}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.msg}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t.placeholder.msg}
                              className="min-h-[140px] bg-gray-50 rounded-xl resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full h-14 text-lg font-extrabold rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        <span className="inline-flex items-center gap-2">
                          <Loader2 className="animate-spin" />
                          {t.sending}
                        </span>
                      ) : (
                        t.submit
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct contact */}
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-7">
                <h3 className="text-xl font-extrabold text-primary">
                  {t.quickTitle}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {t.quickDesc}
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href={`tel:${PHONE_TEL}`}>
                    <Button
                      className="w-full rounded-xl font-bold"
                      variant="outline"
                    >
                      <Phone className="me-2" size={18} />
                      {t.callBtn}
                    </Button>
                  </a>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="w-full rounded-xl font-bold bg-accent text-accent-foreground hover:bg-white hover:text-primary">
                      <MessageCircle className="me-2" size={18} />
                      {isAr ? "واتساب" : "WhatsApp"}
                    </Button>
                  </a>
                </div>

                <div className="mt-5 rounded-2xl bg-primary/5 p-4">
                  <div className="text-sm font-bold text-primary">
                    {PHONE_DISPLAY}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {CITY}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why choose */}
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-7">
                <h3 className="text-xl font-extrabold text-primary">
                  {t.trustTitle}
                </h3>
                <div className="mt-5 space-y-4">
                  {t.trust.map((x, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <div className="font-extrabold text-primary">
                          {x.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {x.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hours + Location */}
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="font-extrabold text-primary">
                      {t.hoursTitle}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.hours}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-extrabold text-primary">
                      {t.locationTitle}
                    </div>
                    <div className="text-sm text-muted-foreground">{CITY}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Final CTA */}
            <Card className="border-none shadow-2xl bg-primary text-primary-foreground overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-extrabold">{t.ctaTitle}</h3>
                <p className="opacity-90 mt-2">{t.ctaDesc}</p>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full rounded-xl font-extrabold bg-accent text-accent-foreground hover:bg-white hover:text-primary">
                      <MessageCircle className="me-2" size={18} />
                      {t.ctaBtn}
                    </Button>
                  </a>
                  <a href={`tel:${PHONE_TEL}`} className="flex-1">
                    <Button
                      className="w-full rounded-xl font-bold"
                      variant="outline"
                    >
                      <Phone className="me-2" size={18} />
                      {t.callBtn}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
