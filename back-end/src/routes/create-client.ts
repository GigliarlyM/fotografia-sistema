import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { createClientModel } from "../model/crud-client";

export default async function createClient (app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/client', {
        schema: {
            body: z.object({
                nome: z.string().min(3).max(50),
                apelido: z.string().min(3).max(50),
                email: z.string().email(),
                cpf: z.string().min(11)
            })
        },
    }, async (request) => {
        const newClient = request.body

        const position = createClientModel(newClient)

        return { position }
    })
}