const Student = require('../models/student');

const get_login = (req, res) => {
    res.render("student/login");
};

const post_login = async (req, res) => {
    const StudentRoll = req.body.roll;
    const StudentDob = req.body.dob;
    const individualStudent = await Student.findOne({roll : StudentRoll, dob : StudentDob});
    if(!individualStudent){
        
        res.render("student/studenterror");
    }
    else{
        res.render("student/view", { one : individualStudent});
    }
};

module.exports={
    get_login,
    post_login
}