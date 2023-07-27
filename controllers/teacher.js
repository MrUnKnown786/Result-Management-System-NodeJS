const Student = require('../models/student')

const get_login = (req,res) => {
    res.render("teacher/login");
};

const post_login = (req,res) => {
    if(req.body.password == "teacher"){
        res.redirect("/teacher/option");
    }
    else{
        res.render("teacher/teachererror");
    }
};

const get_option = (req,res) => {
    res.render("teacher/option");
};

const get_add = (req,res) => {
    res.render("teacher/add");
};

const get_viewall = async (req,res) => {
    const allStudents = await Student.find()
    res.render("teacher/viewall",{student : allStudents})
};

const get_edit = async(req,res) => {
    const user = await Student.findById(req.params.id)
    res.render("teacher/edit",{user : user})
};

const post_edit = async (req,res) => {
    const user = await Student.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/teacher/viewall")
};

const get_delete = async(req,res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect("/teacher/viewall")
};

const post_add = async (req,res) => {
    const single = new Student({
        name : req.body.name,
        roll : req.body.roll,
        dob : req.body.dob,
        score : req.body.score
    })
    try{
        const newStudent = await single.save();
        res.redirect("/teacher/add");
    }
    catch{
        res.send("error")
    }
};

module.exports={
    get_login,
    post_login,
    get_option,
    get_add,
    post_add,
    get_delete,
    get_edit,
    post_edit,
    get_viewall
}