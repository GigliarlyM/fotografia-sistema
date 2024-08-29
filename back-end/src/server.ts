import fastify from "fastify";
import cors from "@fastify/cors"
import { validatorCompiler, serializerCompiler } from "fastify-type-provider-zod"

import createPhotographer from "./routes/create-photographer";
import getPhotographer from "./routes/get-photographer";
import putPhotographer from "./routes/put-photographer";
import deletePhotographer from "./routes/delete-photographer";
import { env } from "./env";

const app = fastify()

app.register(cors, {
    origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

// Crud do fotografo
app.register(createPhotographer)
app.register(getPhotographer)
app.register(putPhotographer)
app.register(deletePhotographer)

app.listen({ port: env.PORT }).then(() => {
    console.log(`Server listening on http://localhost:${env.PORT}`);
})