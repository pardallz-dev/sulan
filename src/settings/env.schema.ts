import { z } from "zod";

export const envSchema = z.object({
    BOT_TOKEN: z.string({ description: "Discord Bot Token is required" }).min(1),
    WEBHOOK_LOGS_URL: z.string().url().optional(),
    MARIADB_USER: z.string().min(1),
    MARIADB_PASSWORD: z.string().min(1),
    MARIADB_HOST: z.string().min(1),
    MARIADB_PORT: z.number({ coerce: true }).min(1),
    MARIADB_DATABASE: z.string().min(1),
    SERVER_PORT: z.string().refine(v => !Number.isNaN(Number(v)), "Invalid server port").optional(),
    // Env vars...
});