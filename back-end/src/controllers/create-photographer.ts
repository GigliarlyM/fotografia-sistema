import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { createPhotographerModel } from "../model/photographer";

export default async function createPhotographer(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/photographer', {
        schema: {
            body: z.object({
                nome: z.string().min(3).max(50),
                apelido: z.string().min(3).max(50),
                dataNascimento: z.coerce.date(),
                email: z.string().email(),
                cpf: z.string().min(11)
            })
        },
    }, async (request) => {
        const {nome, apelido, dataNascimento, email, cpf} = request.body

        const position = await createPhotographerModel({nome, apelido, dataNascimento, email, cpf, role: 'photographer'})

        return { position }
    })
}