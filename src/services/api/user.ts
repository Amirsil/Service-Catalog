import { DefaultService, OpenAPI, UserDTO } from "../openapi";

OpenAPI.BASE = 'http://localhost:3000';

export async function getUsers() {
    const users = await DefaultService.userControllerGetUsers();
    return users
}

export async function getUserByName(name: string) {
    const user = await DefaultService.userControllerGetUserByName(name);
    return user.body;
}

export async function createUser(userDTO: UserDTO) {
    const user = await DefaultService.userControllerCreate(userDTO);
    return user.body;
}

export async function updateUserByName(name: string, newUserDTO: UserDTO) {
    const user = await DefaultService.userControllerUpdate(name, newUserDTO);
    return user.body;
}

export async function removeUserByName(name: string) {
    const user = await DefaultService.userControllerRemove(name);
    return user.body;
}