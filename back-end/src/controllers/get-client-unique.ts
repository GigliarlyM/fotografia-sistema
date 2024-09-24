import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { readClientModelUnique } from "../model/crud-client";


export default async function getClientUnique(app: FastifyInstance) {
    //@Todo: mudar o IdPppher
    app.withTypeProvider<ZodTypeProvider>().get('/client/:cpfClient', {
        schema: {
            params: z.object({
                cpfClient: z.string()
            })
        },
    }, async (request) => {
        const { cpfClient } = request.params

        const client = readClientModelUnique(cpfClient)

        return { client }
    })
}