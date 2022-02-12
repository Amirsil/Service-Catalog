import { CatDTO, DefaultService, OpenAPI } from "../openapi";

OpenAPI.BASE = 'http://localhost:3000';

export async function getCats() {
    try {
        const cats = await DefaultService.catControllerGetCats();
        return cats;
    } catch (err) {
        alert(err);
    }
}

export async function getCatByName(name: string) {
    try {
        const user = await DefaultService.catControllerGetCatByName(name);
        return user.body;
    } catch (err) {
        alert(err);
    }
}

export async function createCat(catDTO: CatDTO) {
    try {
        const user = await DefaultService.catControllerCreate(catDTO);
        return user.body;
    } catch (err) {
        alert(err);
    }
}

export async function updateCatByName(name: string, newCatDTO: CatDTO) {
    try {
        const user = await DefaultService.catControllerUpdate(name, newCatDTO);
        return user.body;
    } catch (err) {
        alert(err);
    }
}

export async function removeCatByName(name: string) {
    try {
        const user = await DefaultService.catControllerRemove(name);
        return user.body;
    } catch (err) {
        alert(err);
    }
} 