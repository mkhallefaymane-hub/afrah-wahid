
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

import session from "express-session";

declare module "express-session" {
  interface SessionData {
    isAdmin: boolean;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.get(api.admin.listMessages.path, async (req, res) => {
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (req.session.isAdmin || req.headers['x-admin-password'] === adminPassword) {
      const messages = await storage.getMessages();
      return res.json(messages);
    }

    res.status(401).json({ message: "Unauthorized" });
  });

  app.post(api.admin.login.path, async (req, res) => {
    const { password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password === adminPassword) {
      req.session.isAdmin = true;
      res.json({ success: true });
    } else {
      res.status(401).json({ message: "Invalid password" });
    }
  });

  return httpServer;
}
