import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AuthService } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
    const { ...loginData } = req.body;

    const result = await AuthService.loginUser(loginData)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: 'User Login Successfully',
        success: true,
        data: result
    })
})

export const AuthController = {
    loginUser
}