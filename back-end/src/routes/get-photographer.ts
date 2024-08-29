import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { readPhotographerModelUnique } from "../model/crud-photographer";


export default async function getPhotographer(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/photographer/:idPpher', {
        schema: {
            params: z.object({
                idPpher: z.coerce.number()
            })
        },
    }, async (request) => {
        const { idPpher } = request.params

        const photographer = readPhotographerModelUnique(idPpher)

        return { photographer }
    })
}