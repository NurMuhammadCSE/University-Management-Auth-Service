/* eslint-disable @typescript-eslint/no-explicit-any */
import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericErrorMessage } from '../interfaces/error';

export const handleDuplicateKeyError = (err: any): IGenericErrorResponse => {
    // Extract relevant information from the MongoDB error
    const errorMessage = err.message || 'Something went wrong!';
    const errorMessages: IGenericErrorMessage[] = [{
        path: '',
        message: errorMessage
    }];

    // Construct the error object
    const errorObject: IGenericErrorResponse = {
        statusCode: 400,
        message: errorMessage,
        errorMessages: errorMessages,
    };

    return errorObject;
};
