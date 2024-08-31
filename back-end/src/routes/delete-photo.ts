import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { deletePhotoModel } from "../model/crud-service";

export default async function deletePhoto(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().delete('/photo/:idPhoto', {
        schema: {
            params: z.object({
                idPhoto: z.coerce.number()
            })
        },
    }, async (request) => {
        const { idPhoto } = request.params

        const photos = deletePhotoModel(idPhoto)

        return { photos }
    })
}