import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response,) => {

    try {
        const { user } = req.body;
        const result = await UserService.createUser(user);
        res.status(200).json({
            success: true,
            message: 'user created successfully!',
            data: result,
        });
    } catch (err) {
        res.status(401).json({
            success: false,
            message: 'user created failed!',
        });
    }

}

export const UserController = {
    createUser
}