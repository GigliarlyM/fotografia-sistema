import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { createPhotographerModel } from "../model/crud-photographer";


export default async function createPhotographer(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/photographer', {
        schema: {
            body: z.object({
                nome: z.string().min(3).max(50),
                apelido: z.string().min(3).max(50),
                idade: z.number().int().min(15).max(99),
                email: z.string().email(),
                cpf: z.string()
            })
        },
    }, async (request) => {
        const novoFuncionario = request.body
        
        const position = createPhotographerModel(novoFuncionario)

        return { position }
    })
}