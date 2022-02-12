import { CancelablePromise, CatDTO, CreateCatDTO, DefaultService, OpenAPI } from "../openapi";

OpenAPI.BASE = 'http://localhost:3000';

export async function getCats(): Promise<CatDTO[]> {
    let cats: CatDTO[] = [];

    try {
        cats = await DefaultService.catControllerGetCats();
    } catch (err) {
        alert(err);
    }

    return cats;
}

export async function getCatByName(name: string): Promise<CatDTO | undefined> {
    try {
        const user = await DefaultService.catControllerGetCatByName(name);
        return user.body;
    } catch (err) {
        alert(err);
    }
}

export async function createCat(createCatDTO: CreateCatDTO) {
    try {
        const user = await DefaultService.catControllerCreate(createCatDTO);
        return user;
    } catch (err: any) {
        alert(err)
    }
}

export async function updateCatByName(name: string, createCatDTO: CreateCatDTO) {
    try {
        const user = await DefaultService.catControllerUpdate(name, createCatDTO);
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