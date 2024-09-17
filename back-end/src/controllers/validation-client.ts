import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { validationClientModel } from "../model/credencial-validation";

export default async function validationClient(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/client/validation', {
        schema: {
            body: z.object({
                email: z.string().email()
            })
        },
    }, async (request) => {
        const { email } = request.body

        const client = validationClientModel(email)

        return { client }
    })
}