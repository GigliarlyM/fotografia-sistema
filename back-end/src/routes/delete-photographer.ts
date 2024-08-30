import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { deletePhotographerModel } from "../model/crud-photographer";

export default async function deletePhotographer(app: FastifyInstance) {
    //@Todo: mudar o IdPppher
    app.withTypeProvider<ZodTypeProvider>().delete('/photographer/:idPhotographer', {
        schema: {
            params: z.object({
                idPhotographer: z.coerce.number()
            })
        },
    }, async (request) => {
        const { idPhotographer } = request.params

        deletePhotographerModel(idPhotographer)

        return { status: 200 }
    })
}