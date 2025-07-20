import {Request, Response} from 'express';

const courseService = require('../services/course-service');

exports.index = async (req: Request, res: Response) => {
  try {
    const courseData = courseService.getCourses();

    return res.status(200).json({
      statusCode: 200,
      message: 'Sukses mendapatkan daftar kursus!',
      data: courseData,
    });
  } catch (error: any) {
    return res.status(500).json({message: 'Internal server error'});
  }
};