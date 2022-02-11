import { CatDTO, DefaultService, OpenAPI } from "../openapi";

OpenAPI.BASE = 'http://localhost:3000';

export async function getCats() {
    const users = await DefaultService.catControllerGetCats();
    return users;
}

export async function getCatByName(name: string) {
    const user = await DefaultService.catControllerGetCatByName(name);
    return user.body;
}

export async function createCat(catDTO: CatDTO) {
    const user = await DefaultService.catControllerCreate(catDTO);
    return user.body;
}

export async function updateCatByName(name: string, newCatDTO: CatDTO) {
    const user = await DefaultService.catControllerUpdate(name, newCatDTO);
    return user.body;
}

export async function removeCatByName(name: string) {
    const user = await DefaultService.catControllerRemove(name);
    return user.body;
}