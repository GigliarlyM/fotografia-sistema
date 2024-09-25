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
    price: number,
    promo: number // Valor em Decimal que sera aplicado em price
}

interface Employee {
    nome: string,
    apelido: string,
    dataNascimento: Date,
    email: string,
    cpf: string,
    role: string
}

export {
    Client, Employee,
    Photo
}

