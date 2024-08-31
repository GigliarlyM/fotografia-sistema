import { readPhotographerModelUnique } from "./crud-photographer"
import { Photo, readDataModel } from "./func-data"

interface PhotoSimple {
    url: string,
    price: number
}

function createPhotoModel(cpfPhotographer: string, photo: PhotoSimple) {
    const listAll = readDataModel()

    readPhotographerModelUnique(cpfPhotographer)

    return listAll.photos.push({
        url: photo.url,
        price: photo.price,
        cpfPhotographer,
        id: listAll.photos.length + 1
    })
}

export {
    createPhotoModel
}
