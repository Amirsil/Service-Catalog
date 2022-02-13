/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatDTO } from '../models/CatDTO';
import type { CreateCatDTO } from '../models/CreateCatDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CatsService {

    /**
     * @returns CatDTO 
     * @throws ApiError
     */
    public static getCats(): CancelablePromise<Array<CatDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cats',
        });
    }

    /**
     * @param requestBody 
     * @returns CatDTO 
     * @throws ApiError
     */
    public static createCat(
requestBody: CreateCatDTO,
): CancelablePromise<CatDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cats',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param name 
     * @returns CatDTO 
     * @throws ApiError
     */
    public static getCatByName(
name: string,
): CancelablePromise<CatDTO> {
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
     * @returns CatDTO 
     * @throws ApiError
     */
    public static updateCatByName(
name: string,
requestBody: CreateCatDTO,
): CancelablePromise<CatDTO> {
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
    public static removeCatByName(
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
     * @param names 
     * @returns CatDTO 
     * @throws ApiError
     */
    public static getCatsByNames(
names: Array<string>,
): CancelablePromise<Array<CatDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cats/names/{names}',
            path: {
                'names': names,
            },
        });
    }

}