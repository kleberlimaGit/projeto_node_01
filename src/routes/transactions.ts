import { FastifyInstance } from "fastify";
import { randomUUID } from "node:crypto";
import { knexConection } from "../database";
import { z } from "zod";
import { title } from "node:process";

export async function transactionsRoutes(app: FastifyInstance) {
  app.post("/", async (request) => {
    const createTranzactionBodySchema = z.object({
        title: z.string(),
        amount: z.number(),
        type: z.enum(['CREDIT, DEBIT'])
    })
  });
}
