import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { createPhotoModel } from "../model/crud-service";

export default async function createPhoto(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/photo/:cpfPhotographer', {
        schema: {
            params: z.object({
                cpfPhotographer: z.string()
            }),
            body: z.object({
                url: z.string(),
                price: z.coerce.number()
            })
        },
    }, async (request) => {
        const { url, price } = request.body
        const { cpfPhotographer } = request.params

        const position = createPhotoModel(cpfPhotographer, { url, price })

        return { position }
    })
}