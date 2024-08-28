import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { updatePhotographerModel } from "../model/crud-photographer";

export default async function putPhotographer(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().put('/photographer/:idPhotographer', {
        schema: {
            params: z.object({
                idPhotographer: z.coerce.number()
            }),
            body: z.object({
                nome: z.string().min(3).max(50),
                apelido: z.string().min(3).max(50),
                email: z.string().email(),
            })
        },
    }, async (request) => {
        const { idPhotographer } = request.params
        const { nome, apelido, email } = request.body

        const photographer = updatePhotographerModel(idPhotographer, {nome, apelido, email})

        return { photographer }
    })
}