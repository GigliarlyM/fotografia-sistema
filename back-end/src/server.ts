import fastify from "fastify";
import cors from "@fastify/cors"
import { env } from "./env";
import { validatorCompiler, serializerCompiler } from "fastify-type-provider-zod"

import createPhotographer from "./controllers/create-photographer";
import getPhotographer from "./controllers/get-photographer";
import putPhotographer from "./controllers/put-photographer";
import deletePhotographer from "./controllers/delete-photographer";
import createClient from "./controllers/create-client";
import getClient from "./controllers/get-client";
import putClient from "./controllers/put-client";
import deleteClient from "./controllers/delete-client";
import createPhoto from "./controllers/create-photo";
import getPhoto from "./controllers/get-photo";
import postPromoPhoto from "./controllers/post-promo-photo";
import deletePhoto from "./controllers/delete-photo";
import validationClient from "./controllers/validation-client";
import validationPhotographer from "./controllers/validation-photographer";
import getPhotoAll from "./controllers/get-photo-all";

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

// CRUD do servico
app.register(createPhoto)
app.register(getPhoto)
app.register(postPromoPhoto)
app.register(deletePhoto)
app.register(getPhotoAll)

// Validation
app.register(validationClient)
app.register(validationPhotographer)

app.listen({ port: env.PORT }).then(() => {
    console.log(`Server listening on http://localhost:${env.PORT}`);
})