import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { readFile, readFileSync, writeFileSync } from "fs";
import { z } from "zod";
import { env } from "../env";


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
        const listaPpher = JSON.parse(readFileSync(env.DATABASE, 'utf8'))

        let position = listaPpher["photographers"].push(novoFuncionario)
        console.log(position);

        writeFileSync(env.DATABASE, JSON.stringify(listaPpher))

        return { position }
    })
}