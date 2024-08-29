import dotenv from 'dotenv';
import { readFileSync, writeFileSync } from 'fs';
import { env } from '../env';
dotenv.config();

interface StructuredData {
    "photographers": Array<Employee>
}

interface Employee {
    nome: string,
    apelido: string,
    dataNascimento: Date,
    email: string,
    cpf: string
}

interface EmployeeAlter {
    nome: string,
    apelido: string,
    email: string
}

function readDataModel(): StructuredData {
    return JSON.parse(readFileSync(env.DATABASE, 'utf8')) || {}
}

function createPhotographerModel(newEmployee: Employee) {
    const listPpher = readDataModel()

    listPpher.photographers.forEach(element => {
        if (element.cpf == newEmployee.cpf) {
            throw new Error("CPF já cadastrado")
        }
    });

    let position = listPpher["photographers"].push(newEmployee);

    writeFileSync(env.DATABASE, JSON.stringify(listPpher))

    return position
}

function readPhotographerModelUnique(idPpher: number) {
    const listPpher = readDataModel().photographers;
    
    if (idPpher < listPpher.length) throw new Error("Pessoa não existe");

    return readDataModel().photographers[idPpher -1];
}

function updatePhotographerModel(idPpher: number, employee: EmployeeAlter) {
    const listPpher = readDataModel()

    listPpher.photographers[idPpher - 1].nome = employee.nome;
    listPpher.photographers[idPpher - 1].email = employee.email;
    listPpher.photographers[idPpher - 1].apelido = employee.apelido;

    let ppher = listPpher.photographers[idPpher - 1]

    writeFileSync(env.DATABASE, JSON.stringify(listPpher))

    return ppher
}

function deletePhotographerModel(idPpher: number) {
    const list = readDataModel()

    list.photographers.splice(idPpher - 1, 1)

    writeFileSync(env.DATABASE, JSON.stringify(list))
}

export {
    createPhotographerModel,
    readPhotographerModelUnique,
    updatePhotographerModel,
    deletePhotographerModel
};

