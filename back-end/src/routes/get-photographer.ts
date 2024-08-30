import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { readPhotographerModelUnique } from "../model/crud-photographer";


export default async function getPhotographer(app: FastifyInstance) {
    //@Todo: mudar o IdPppher
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