import { CreateUserDTO, DefaultService, OpenAPI, UserDTO } from "../openapi";

OpenAPI.BASE = 'http://localhost:3000';

export async function getUsers(): Promise<UserDTO[]> {
    let users: UserDTO[] = [];

    try {
        users = await DefaultService.userControllerGetUsers();
        return users
    } catch (err) {
        alert(err);
    }

    return users;
}

export async function getUserByName(name: string): Promise<UserDTO | undefined> {
    try {
        const user = await DefaultService.userControllerGetUserByName(name);
        return user;
    } catch (err) {
        alert(err);
    }
}

export async function createUser(createUserDTO: CreateUserDTO) {

    try {
        const user = await DefaultService.userControllerCreate(createUserDTO);
        return user;
    } catch (err) {
        alert(err);
    }
}

export async function updateUserByName(name: string, createUserDTO: CreateUserDTO) {

    try {
        const user = await DefaultService.userControllerUpdate(name, createUserDTO);
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