import express from "express";
import { UserRoute } from "../modules/users/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";

const router = express.Router()


const moduleRoutes = [
    {
        path: '/users',
        route: UserRoute
    },
    {
        path: '/academic-semester',
        route: AcademicSemesterRoutes
    }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;