const User = require('../Services/user.service');
const userIstance = new User();

const postUser=async(req,res)=>{
    try {
        console.log('hello world')
        const user = req.body;
        const result = await userIstance.createNewUser(user);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getUsers=async(req,res)=>{
try {
    const result = await userIstance.fetchUser();
    console.log(result);
    res.json(result)
} catch (error) {
    
}
}
const patchUser=async(req,res)=>{
    try {
        const {id} = req.params;
        const user = req.body;
        const result = await userIstance.editUser(id,user);
        return res.send(result);
    } catch (error) {
        
    }
}

const deleteUser=async(req,res)=>{
    try {
       const {id} = req.params;
       const result = await userIstance.deleteUser(id);
       res.status(200).json(result);
    } catch (error) {
        
    }
}

module.exports = {postUser,getUsers,deleteUser,patchUser}