import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import { User } from "../users/user.model";
import { ILoginUser } from "./auth.interface";

const loginUser = async (payload: ILoginUser)=> {
    const { id, password } = payload;

    const user = new User();
    // Check User Exist
    const isUserExist = await user.isUserExist(id)

    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User is Not Exist')
    }

    // Match Password
    // const isPasswordMatch = await user.isPasswordMatched(password, isUserExist?.password as string);

    if (isUserExist.password && !user.isPasswordMatched(password, isUserExist?.password)) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'User is Not Exist')
    }

    // Create Access Token

    return {}
}

export const AuthService = {
    loginUser
}