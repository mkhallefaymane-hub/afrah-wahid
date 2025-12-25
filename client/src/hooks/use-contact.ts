import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // Manual mapping of data to handle potential type coercion issues on client side if needed
      // but Zod on server should handle it.
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to send message");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We will get back to you shortly. / سنتصل بك قريباً",
        className: "bg-primary text-primary-foreground border-none",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

export function useAdminLogin() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (password: string) => {
      const res = await fetch(api.admin.login.path, {
        method: api.admin.login.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        throw new Error("Invalid password");
      }
      return res.json();
    },
    onError: () => {
      toast({
        title: "Login Failed",
        description: "Incorrect password",
        variant: "destructive",
      });
    },
  });
}

export function useMessages() {
  return useQuery({
    queryKey: [api.admin.listMessages.path],
    queryFn: async () => {
      const res = await fetch(api.admin.listMessages.path);
      if (!res.ok) throw new Error("Failed to fetch messages");
      return res.json();
    },
    retry: false, // Don't retry if auth fails
  });
}
