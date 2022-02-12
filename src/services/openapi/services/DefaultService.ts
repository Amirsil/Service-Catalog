/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatDTO } from '../models/CatDTO';
import type { CreateCatDTO } from '../models/CreateCatDTO';
import type { CreateUserDTO } from '../models/CreateUserDTO';
import type { UserDTO } from '../models/UserDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @returns CatDTO 
     * @throws ApiError
     */
    public static catControllerGetCats(): CancelablePromise<Array<CatDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cats',
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static catControllerCreate(
requestBody: CreateCatDTO,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cats',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param name 
     * @returns any 
     * @throws ApiError
     */
    public static catControllerGetCatByName(
name: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cats/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * @param name 
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static catControllerUpdate(
name: string,
requestBody: CreateCatDTO,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cats/{name}',
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
    public static catControllerRemove(
name: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cats/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * @returns UserDTO 
     * @throws ApiError
     */
    public static userControllerGetUsers(): CancelablePromise<Array<UserDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static userControllerCreate(
requestBody: CreateUserDTO,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param name 
     * @returns any 
     * @throws ApiError
     */
    public static userControllerGetUserByName(
name: string,
): CancelablePromise<any> {
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
     * @returns any 
     * @throws ApiError
     */
    public static userControllerUpdate(
name: string,
requestBody: CreateUserDTO,
): CancelablePromise<any> {
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
    public static userControllerRemove(
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

}