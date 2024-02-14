import express from 'express';
const router = express.Router();
let users = [];
let usernames = ['Raagull'];
function postmethod(req,res){
    const newUser = req.body;
    users.push(newUser);
    usernames.push(newUser.name)
    res.status(201).json({
        message:"User created successfully",
        user:newUser
    })
}


function getmethod(req,res){
    res.status(200).json({
        message:"The list of users",
        users:users,
    })
}


function putmethod(req,res){
    const name = req.params.name;
    const replacename = req.params.replacename;
    if(usernames.includes(name)){
        usernames[usernames.indexOf(name)]=replacename;
    }
    const replacedname=usernames[usernames.indexOf(replacename)]
    res.status(200).json({
        message:"Updated User Name",
        updatedname:replacedname
    })
}

function deletemethod(req,res){
    const deletename = req.params.deletename;
    let status;
    if(usernames.includes(deletename)){
        usernames[usernames.indexOf(deletename)]=null;
        status = 'success';
    }
    res.status(200).json({
        message:"deleted name",
        status:status
    })
}

function patchmethod(req,res){
    res.status(200).json({
        message:"hi from patch method"
    })
}
export default getmethod;
export {getmethod,postmethod,putmethod,deletemethod,patchmethod};