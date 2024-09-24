import { Client, readDataModel, writeDataModel } from './func-data';

interface ClientAlter {
    apelido: string,
    email: string
}

function createClientModel(newClient: Client) {
    const listAll = readDataModel()

    listAll.clients.forEach(element => {
        if (element.cpf == newClient.cpf) {
            throw new Error("CPF já cadastrado")
        }
    });

    let position = listAll.clients.push(newClient);

    writeDataModel(listAll)

    return position
}

function readClientModelUnique(cpfClient: string) {
    const listClient = readDataModel().clients;

    const client = listClient.find(element => element.cpf == cpfClient)

    if (client == undefined) throw new Error("Pessoa não existe")

    return client;
}

function readClientModelAll() {
    const listClient = readDataModel().clients;

    if (listClient.length == 0) throw new Error("Pessoa não existe")

    return listClient;
}

function updateClientModel(cpfClient: string, clientAlt: ClientAlter) {
    const listAll = readDataModel()

    const client = readClientModelUnique(cpfClient)
    const position = listAll.clients.indexOf(client)

    client.email = clientAlt.email
    client.apelido = clientAlt.apelido

    listAll.clients[position] = client

    writeDataModel(listAll)

    return client
}

function deleteClientModel(cpfClient: string) {
    const listAll = readDataModel()

    const client = readClientModelUnique(cpfClient)
    const position = listAll.clients.indexOf(client)

    listAll.clients.splice(position, 1)

    writeDataModel(listAll)
}

export {
    createClientModel,
    readClientModelUnique,
    readClientModelAll,
    updateClientModel,
    deleteClientModel
};

