import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { readPhotographerModelUnique } from "../model/crud-photographer";


export default async function getPhotographer(app: FastifyInstance) {
    //@Todo: mudar o IdPppher
    app.withTypeProvider<ZodTypeProvider>().get('/photographer/:cpfPhotographer', {
        schema: {
            params: z.object({
                cpfPhotographer: z.string()
            })
        },
    }, async (request) => {
        const { cpfPhotographer } = request.params

        const photographer = readPhotographerModelUnique(cpfPhotographer)

        return { photographer }
    })
}