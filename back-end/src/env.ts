import z from "zod";
import * as dotenv from "dotenv"

dotenv.config()

const envTransform = z.object({
    PORT: z.coerce.number().default(8080),
    DATABASE: z.string()
})

export const env = envTransform.parse(process.env)