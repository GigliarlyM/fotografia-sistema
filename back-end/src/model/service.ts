import { Photo, readDataModel, writeDataModel } from "./interface-data"
import { getPhotographerUnique } from "./photographer"
import photographerShcema from "./photographer-shcema"
import serviceShcema from "./service-shcema"

interface PhotoSimple {
    url: string,
    price: number,
    photographerCpf: string
}

async function createPhotoModel(photo: PhotoSimple) {
    const service = await serviceShcema.create(photo)

    return service
}

async function getPhotoModel(cpfPhotographer: string) {
    return await serviceShcema.find({ photographerCpf: cpfPhotographer })
}

async function getPhotoAllModel() {
    const listPhotos = await serviceShcema.find()

    if (listPhotos.length === 0) throw new Error("Sem fotos no Sistema")

    const listPhotosResult = listPhotos.map(async photo => {
        const photographer = await photographerShcema.findById(photo.photographerCpf)

        return {
            url: photo.url,
            price: photo.price,
            promo: photo.photographerCpf,
            photographercpf: photographer?.cpf
        }

    })
}

function deletePhotoModel(idPhoto: number, cpfPhotographer: string) {
    const listAll = readDataModel()
    const index = listAll.photos
        .filter(photo => photo.cpfPhotographer == cpfPhotographer)
        .findIndex(element => element.id === idPhoto)

    if (index == -1) throw new Error("Foto não encontrada");

    listAll.photos.splice(index, 1)

    writeDataModel(listAll)
}

function aplyPromoModel(idPhoto: number, cpfPhotographer: string, priceAlt: number) {
    const listAll = readDataModel()
    const photoPosition = listAll.photos.findIndex(element => element.id === idPhoto)

    if (photoPosition == -1)
        throw new Error(`Foto não encontrada`);

    const photo = listAll.photos[photoPosition]
    const decimalPrice = (photo.price - priceAlt) / photo.price

    photo.promo = decimalPrice // A promo eh guardada em porcentagem (decimal)
    listAll.photos[photoPosition] = photo

    writeDataModel(listAll)

    return decimalPrice
}

export {
    aplyPromoModel,
    createPhotoModel,
    deletePhotoModel,
    getPhotoAllModel,
    getPhotoModel
}

