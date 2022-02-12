import { DefaultService, OpenAPI, UserDTO } from "../openapi";

OpenAPI.BASE = 'http://localhost:3000';

export async function getUsers() {
    try {
        const users = await DefaultService.userControllerGetUsers();
        return users
    } catch (err) {
        alert(err);
    }
}

export async function getUserByName(name: string) {

    try {
        const user = await DefaultService.userControllerGetUserByName(name);
        return user;
    } catch (err) {
        alert(err);
    }
}

export async function createUser(userDTO: UserDTO) {

    try {
        const user = await DefaultService.userControllerCreate(userDTO);
        return user;
    } catch (err) {
        alert(err);
    }
}

export async function updateUserByName(name: string, newUserDTO: UserDTO) {

    try {
        const user = await DefaultService.userControllerUpdate(name, newUserDTO);
        return user;
    } catch (err) {
        alert(err);
    }
}

export async function removeUserByName(name: string) {

    try {
        const user = await DefaultService.userControllerRemove(name);
        return user;
    } catch (err) {
        alert(err);
    }
}