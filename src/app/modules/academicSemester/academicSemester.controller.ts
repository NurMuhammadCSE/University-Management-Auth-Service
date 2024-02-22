import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AcademicSemesterService } from "./academicSemester.service";
import { IAcademicSemester } from "./academicSemester.interface";
import pick from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";

const createSemester = catchAsync(async (req, res, next) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(academicSemesterData)

    sendResponse<IAcademicSemester>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semester created successfully!',
        data: result,
    });
    next();
})


const getAllSemesters = catchAsync(async (req, res, next) => {
    // const paginationOptions = {
    //     page: Number(req.query.page),
    //     limit: Number(req.query.limit),
    //     sortBy: req.query.sortBy,
    //     sortOrder: req.query.sortOrder
    // }

    const paginationOptions = pick(req.query, paginationFields)
    console.log(paginationOptions);

    const result = await AcademicSemesterService.getAllSemesters(paginationOptions);

    sendResponse<IAcademicSemester[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semester Retrieved successfully!',
        meta: result.meta,
        data: result.data,
    });
    next();
})

export const AcademicSemesterController = {
    createSemester,
    getAllSemesters
};