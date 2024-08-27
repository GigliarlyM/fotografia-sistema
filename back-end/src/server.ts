import fastify from "fastify";
import cors from "@fastify/cors"
import showMessage from "./routes/helloworld";

const app = fastify()

app.register(cors, {
    origin: '*',
})

app.register(showMessage)

app.listen({ port: 8080 }).then(() => {
    console.log(`Server listening on http://localhost:8080`);
})