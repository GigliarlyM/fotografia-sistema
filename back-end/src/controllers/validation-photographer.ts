import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { validationPhotographerModel } from "../model/credencial-validation";
import generateToken from "./token/generate-token";

export default async function validationPhotographer(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/photographer/validation', {
        schema: {
            body: z.object({
                email: z.string().email()
            })
        },
    }, async (request) => {
        const { email } = request.body

        const photographer = validationPhotographerModel(email)

        const token = generateToken(photographer)

        return { photographer, token }
    })
}