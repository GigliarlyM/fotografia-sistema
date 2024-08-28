import dotenv from 'dotenv';
import { readFileSync, writeFileSync } from 'fs';
import { env } from '../env';
dotenv.config();

interface EstruturaData {
    "photographers": Array<Object>
}

function readDataModel(): EstruturaData {
    return JSON.parse(readFileSync(env.DATABASE, 'utf8')) || {}
}

function createPhotographerModel(newEmployee: any) {
    const listaPpher = readDataModel()
    let position = listaPpher["photographers"].push(newEmployee);

    writeFileSync(env.DATABASE, JSON.stringify(listaPpher))

    return position
}

function readPhotographerModelUnique(idPpher: number) {
    const photographer = readDataModel().photographers[idPpher];

    return photographer;
}

function updatePhotographerModel(idPpher: number, employee: Object) {
    const listaPpher = readDataModel()
    // TODO colocar um foreach
    listaPpher.photographers[idPpher - 1] = employee;

    let position = listaPpher.photographers[idPpher - 1]

    writeFileSync(env.DATABASE, JSON.stringify(listaPpher))

    return position
}

export {
    createPhotographerModel,
    readPhotographerModelUnique,
    updatePhotographerModel
};
