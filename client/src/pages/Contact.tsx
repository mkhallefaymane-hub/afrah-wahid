import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useContact } from "@/hooks/use-contact";
import { Loader2 } from "lucide-react";

interface ContactProps {
  lang: "ar" | "fr";
}

export default function Contact({ lang }: ContactProps) {
  const isAr = lang === "ar";
  const contactMutation = useContact();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      city: "",
      occasionDate: "",
      occasionType: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertMessage) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  const labels = isAr ? {
    name: "الاسم الكامل",
    phone: "رقم الهاتف",
    city: "المدينة",
    date: "تاريخ المناسبة (تقريبي)",
    type: "نوع المناسبة",
    msg: "رسالتك",
    submit: "إرسال الطلب",
    types: { wedding: "عرس", engagement: "خطوبة", other: "أخرى" }
  } : {
    name: "Nom complet",
    phone: "Téléphone",
    city: "Ville",
    date: "Date (approx)",
    type: "Type d'événement",
    msg: "Votre message",
    submit: "Envoyer",
    types: { wedding: "Mariage", engagement: "Fiançailles", other: "Autre" }
  };

  return (
    <Layout lang={lang}>
      <PageHeader 
        title={isAr ? "اتصل بنا" : "Contactez-nous"} 
        subtitle={isAr ? "نحن هنا للإجابة على جميع استفساراتكم" : "Nous sommes là pour répondre à toutes vos questions"}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{labels.name}</FormLabel>
                    <FormControl>
                      <Input placeholder={isAr ? "مثال: أحمد علامي" : "Ex: Ahmed Alami"} {...field} className="h-12 bg-gray-50 rounded-xl" />
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
                      <FormLabel>{labels.phone}</FormLabel>
                      <FormControl>
                        <Input placeholder="06XXXXXXXX" {...field} className="h-12 bg-gray-50 rounded-xl" />
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
                      <FormLabel>{labels.city}</FormLabel>
                      <FormControl>
                        <Input placeholder={isAr ? "مراكش" : "Marrakech"} {...field} className="h-12 bg-gray-50 rounded-xl" />
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
                      <FormLabel>{labels.date}</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} value={field.value || ''} className="h-12 bg-gray-50 rounded-xl" />
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
                      <FormLabel>{labels.type}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 bg-gray-50 rounded-xl">
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="wedding">{labels.types.wedding}</SelectItem>
                          <SelectItem value="engagement">{labels.types.engagement}</SelectItem>
                          <SelectItem value="other">{labels.types.other}</SelectItem>
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
                    <FormLabel>{labels.msg}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={isAr ? "اكتب تفاصيل إضافية..." : "Écrivez plus de détails..."} 
                        className="min-h-[120px] bg-gray-50 rounded-xl resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? <Loader2 className="animate-spin" /> : labels.submit}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
