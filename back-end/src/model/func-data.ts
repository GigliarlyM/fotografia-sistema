import { readFileSync, writeFileSync } from "fs"
import { env } from "../env"

interface StructuredData {
    "photographers": Array<Employee>,
    "clients": Array<Client>,
    "photos": Array<Photo>
}

interface Client {
    nome: string,
    apelido: string,
    email: string,
    cpf: string
}

interface Photo {
    id: number,
    url: string,
    cpfPhotographer: string,
    price: number
}

interface Employee {
    nome: string,
    apelido: string,
    dataNascimento: Date,
    email: string,
    cpf: string
}

function readDataModel(): StructuredData {
    return JSON.parse(readFileSync(env.DATABASE, 'utf8')) || {}
}

function writeDataModel(listAll: StructuredData) {
    writeFileSync(env.DATABASE, JSON.stringify(listAll))
}

export {
    readDataModel,
    writeDataModel,
    Employee,
    Photo,
    Client
}