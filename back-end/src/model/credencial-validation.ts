import { readDataModel } from "./func-data"

function validationPhotographerModel(email: string) {
    const listPhotographers = readDataModel().photographers
    const photographer = listPhotographers.find(element => element.email == email)

    if (photographer == undefined) throw new Error(`Invalid Photographer`);

    return photographer;
}

function validationClientModel(email: string) {
    const listPhotographers = readDataModel().clients
    const client = listPhotographers.find(element => element.email == email)

    if (client == undefined) throw new Error(`Invalid Client`);

    return client;
}

export {
    validationPhotographerModel,
    validationClientModel
}