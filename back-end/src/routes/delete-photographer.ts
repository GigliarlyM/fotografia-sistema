import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { deletePhotographerModel, updatePhotographerModel } from "../model/crud-photographer";

export default async function deletePhotographer(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().delete('/photographer/:idPhotographer', {
        schema: {
            params: z.object({
                idPhotographer: z.coerce.number()
            })
        },
    }, async (request) => {
        const { idPhotographer } = request.params

        const photographer = deletePhotographerModel(idPhotographer)

        return { photographer }
    })
}