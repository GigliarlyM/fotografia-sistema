import { FastifyReply, FastifyRequest } from "fastify";

export default function accessControllMiddleware(
    request: FastifyRequest,
    reply: FastifyReply,
    done: (err?: Error) => void
) {
    const {url, method} = request
    const publicRoutes = [
        {method: "POST", url: /^\/photographer(\/\d+)?$/},
        {method: "POST", url: /^\/client(\/\d+)?$/},
    ]
    const authorizationHeader = request.headers.authorization

    const isPublicRoute = publicRoutes.some(
        (route) => route.url.test(url) && route.method === method
    )

    if (isPublicRoute || authorizationHeader) {
        done();
    } else {
        reply.status(403).send({ message: "Acesso restrito!" });
    }
}