import { Employee, readDataModel, writeDataModel } from './func-data';

interface EmployeeAlter {
    apelido: string,
    email: string
}

function createPhotographerModel(newEmployee: Employee) {
    const listAll = readDataModel()

    listAll.photographers.forEach(element => {
        if (element.apelido == newEmployee.apelido) throw new Error("Apelido já cadastrado no sistema")
        
        if (element.cpf == newEmployee.cpf) throw new Error("CPF já cadastrado")
    });

    let position = listAll["photographers"].push(newEmployee);

    writeDataModel(listAll)

    return position
}

function readPhotographerModelUnique(cpfPpher: string) {
    const listPpher = readDataModel().photographers;

    const photographer = listPpher.find(element => element.cpf == cpfPpher)

    if (photographer == undefined) throw new Error("Pessoa não existe")

    photographer.role = "photographer"

    return photographer;
}

function updatePhotographerModel(cpfPpher: string, employee: EmployeeAlter) {
    const listAll = readDataModel()

    const photographer = readPhotographerModelUnique(cpfPpher)
    const position = listAll.photographers.indexOf(photographer)

    photographer.email = employee.email
    photographer.apelido = employee.apelido

    listAll.photographers[position] = photographer

    writeDataModel(listAll)

    return photographer
}

function deletePhotographerModel(cpfPpher: string) {
    const list = readDataModel()

    const photographer = readPhotographerModelUnique(cpfPpher)
    const position = list.photographers.indexOf(photographer)

    list.photographers.splice(position, 1)

    writeDataModel(list)
}

export {
    createPhotographerModel, deletePhotographerModel, readPhotographerModelUnique,
    updatePhotographerModel
};

