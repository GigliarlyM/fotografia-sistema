import fastify from "fastify";
import cors from "@fastify/cors"
import { env } from "./env";
import { validatorCompiler, serializerCompiler } from "fastify-type-provider-zod"

import createPhotographer from "./routes/create-photographer";
import getPhotographer from "./routes/get-photographer";
import putPhotographer from "./routes/put-photographer";
import deletePhotographer from "./routes/delete-photographer";
import createClient from "./routes/create-client";
import getClient from "./routes/get-client";
import putClient from "./routes/put-client";
import deleteClient from "./routes/delete-client";

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

// Crud do Client
app.register(createClient)
app.register(getClient)
app.register(putClient)
app.register(deleteClient)

app.listen({ port: env.PORT }).then(() => {
    console.log(`Server listening on http://localhost:${env.PORT}`);
})