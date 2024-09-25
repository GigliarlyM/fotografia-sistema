import { MongooseError } from 'mongoose';
import clientShema from './client-shema';
import { Client } from './func-data';

interface ClientAlter {
    apelido: string,
    email: string
}

async function createClientModel(newClient: Client) {
    try {
        const client = await clientShema.create(newClient)
        
        return client
    } catch (error) {
        if (error instanceof MongooseError) {
            console.error(`MongoDB Error: ${error.message}`)
        } else {
            console.error(error)
        }
    }
}

async function readClientModelUnique(cpfClient: string) {
    try {
        const client = await clientShema.findOne({ cpf: cpfClient })
    
        if (!client) throw new Error(`Nao existe client com esse cpf`)
    
        return client
    } catch (err) {
        console.error(err)
    }
}

async function readClientModelAll() {
    try {
        const listClient = await clientShema.find()
    
        if (!listClient) throw new Error(`Sistema sem cliente cadastrado!`)
    
        return listClient
    } catch (err) {
        console.error(err)
    }
}

async function updateClientModel(cpfClient: string, clientAlt: ClientAlter) {
    try {
        const client = await clientShema.findOneAndUpdate({ cpf: cpfClient }, clientAlt)
    
        if (!client) throw new Error(`Nao existe cliente com esse cpf`)
    
        return client
    } catch (err) {
        console.error(err)
    }
}

async function deleteClientModel(cpfClient: string) {
    try {
        await clientShema.findOneAndDelete({ cpf: cpfClient })
    } catch (err) {
        console.error(err)
    }
}

export {
    createClientModel, deleteClientModel, readClientModelAll, readClientModelUnique, updateClientModel
};

