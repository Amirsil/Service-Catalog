/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDTO } from '../models/CreateUserDTO';
import type { UserDTO } from '../models/UserDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @returns UserDTO 
     * @throws ApiError
     */
    public static getUsers(): CancelablePromise<Array<UserDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }

    /**
     * @param requestBody 
     * @returns UserDTO 
     * @throws ApiError
     */
    public static createUser(
requestBody: CreateUserDTO,
): CancelablePromise<UserDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param name 
     * @returns UserDTO 
     * @throws ApiError
     */
    public static getUserByName(
name: string,
): CancelablePromise<UserDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * @param name 
     * @param requestBody 
     * @returns UserDTO 
     * @throws ApiError
     */
    public static updateUserByName(
name: string,
requestBody: CreateUserDTO,
): CancelablePromise<UserDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{name}',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param name 
     * @returns any 
     * @throws ApiError
     */
    public static removeUserByName(
name: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * @param names 
     * @returns UserDTO 
     * @throws ApiError
     */
    public static getUsersByNames(
names: Array<string>,
): CancelablePromise<Array<UserDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/names/{names}',
            path: {
                'names': names,
            },
        });
    }

}