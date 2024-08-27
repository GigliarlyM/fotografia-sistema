import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import {z} from "zod";

export default function showMessage(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/', {
        // schema: {
        //     params: z.object({
        //         path: z.string()
        //     })
        // }
    }, async (request) => {
        return { message: "Hello, World!" }
    })
}