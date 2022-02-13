import { CreateUserDTO, OpenAPI, UserDTO, UsersService } from "../openapi";

import { handleApiRequest } from "./utils";

OpenAPI.BASE = 'http://localhost:3000';

export async function getUsers(): Promise<UserDTO[]> {
    return await handleApiRequest(() => UsersService.getUsers());
}

export async function getUserByName(name: string): Promise<UserDTO> {
    return await handleApiRequest(() => UsersService.getUserByName(name));
}

export async function getUsersByName(names: string[]): Promise<UserDTO[]> {
    return await handleApiRequest(() => UsersService.getUsersByNames(names));
}

export async function createUser(createUserDTO: CreateUserDTO) {
    return await handleApiRequest(() => UsersService.createUser(createUserDTO));
}

export async function updateUserByName(name: string, createUserDTO: CreateUserDTO) {
    return await handleApiRequest(() => UsersService.updateUserByName(name, createUserDTO));
}

export async function removeUserByName(name: string) {
    return await handleApiRequest(() => UsersService.removeUserByName(name));
} 