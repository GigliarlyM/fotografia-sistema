import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { updatePhotographerModel } from "../model/crud-photographer";

export default async function putPhotographer(app: FastifyInstance) {
    //@Todo: mudar o IdPppher
    app.withTypeProvider<ZodTypeProvider>().put('/photographer/:cpfPhotographer', {
        schema: {
            params: z.object({
                cpfPhotographer: z.string()
            }),
            body: z.object({
                nome: z.string().min(3).max(50),
                apelido: z.string().min(3).max(50),
                email: z.string().email(),
            })
        },
    }, async (request) => {
        const { cpfPhotographer } = request.params
        const { nome, apelido, email } = request.body

        const photographer = updatePhotographerModel(cpfPhotographer, {nome, apelido, email})

        return { photographer }
    })
}