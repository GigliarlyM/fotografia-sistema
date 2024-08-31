import { readPhotographerModelUnique } from "./crud-photographer"
import { Photo, readDataModel } from "./func-data"

interface PhotoSimple {
    url: string,
    price: number
}

function createPhotoModel(cpfPhotographer: string, photo: PhotoSimple) {
    const listAll = readDataModel()

    readPhotographerModelUnique(cpfPhotographer)

    if (listAll.photos.find(element => element.url === photo.url) != undefined)
        throw new Error(`Existe uma foto com essa url`);

    return listAll.photos.push({
        url: photo.url,
        price: photo.price,
        cpfPhotographer,
        id: listAll.photos.length + 1,
        promo: 0
    })
}

function getPhotoModel(cpfPhotographer: string) {
    return readDataModel().photos.filter(element => element.cpfPhotographer == cpfPhotographer)
}

function deletePhotoModel(idPhoto: number) {
    const listAll = readDataModel()
    const index = listAll.photos.findIndex(element => element.id === idPhoto)
    listAll.photos.splice(index, 1)
}

function aplyPromoModel(idPhoto: number, priceAlt: number) {
    const listAll = readDataModel()
    const photo = listAll.photos.find(element => element.id === idPhoto)

    if (photo == undefined)
        throw new Error(`Foto não encontrada`);

    const decimalPrice = (photo.price - priceAlt) / photo.price
    photo.promo = decimalPrice // A promo eh guardada em porcentagem (decimal)

    return decimalPrice
}

export {
    createPhotoModel,
    getPhotoModel,
    deletePhotoModel,
    aplyPromoModel
}
