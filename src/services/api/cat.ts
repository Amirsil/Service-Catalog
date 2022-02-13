import { CatDTO, CreateCatDTO, CatsService, OpenAPI } from "../openapi";
import { handleApiRequest } from "./utils";
OpenAPI.BASE = 'http://localhost:3000';

export async function getCats(): Promise<CatDTO[]> {
    return await handleApiRequest(() => CatsService.getCats())
}

export async function getCatByName(name: string): Promise<CatDTO> {
    return await handleApiRequest(() => CatsService.getCatByName(name));
}

export async function getCatsByNames(names: string[]): Promise<CatDTO[]> {
    return await handleApiRequest(() => CatsService.getCatsByNames(names));
}

export async function createCat(createCatDTO: CreateCatDTO) {
    return await handleApiRequest(() => CatsService.createCat(createCatDTO));
}

export async function updateCatByName(name: string, createCatDTO: CreateCatDTO) {
    return await handleApiRequest(() => CatsService.updateCatByName(name, createCatDTO));
}

export async function removeCatByName(name: string) {
    return await handleApiRequest(() => CatsService.removeCatByName(name));
} 