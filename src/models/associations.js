const { User } = require('./user.model');
const { Course } = require('./course.model');
const { Assignment } = require('./assignment.model');
const { Submission } = require('./submission.model');
const { UserCourse } = require('./userCourse.model');

User.belongsToMany(Course, { through: UserCourse, foreignKey: 'instructorId' });
Course.belongsToMany(User, { through: UserCourse, foreignKey: 'courseId' });

Assignment.belongsTo(Course, { foreignKey: 'courseId' });
Course.hasMany(Assignment, { foreignKey: 'courseId' });

Submission.belongsTo(User, { foreignKey: 'studentId', as: 'student' });
User.hasOne(Submission, { foreignKey: 'studentId' });

Submission.belongsTo(Assignment, { foreignKey: 'assignmentId' });
Assignment.hasMany(Submission, { foreignKey: 'assignmentId' });
