const courseData = require('../data/courses');

exports.getCourses = () => {
  return courseData || [];
} 