const userModel = require('../Models/user.model');

class User{

    createNewUser=async(user)=>{
        console.log(user);
try {
            const newUserCollection = new userModel(user);
            const result = await newUserCollection.save();
            return result;
} catch (error) {
    
}
    }
    fetchUser=async(user)=>{
        try {
            const result = await userModel.find({});
            return result;
        } catch (error) {
            
        }
    }

    editUser=async(id,user)=>{
    const result = await userModel.findOneAndUpdate({id:id},user,{new:true})
    return result;
    }
    
    deleteUser=async(id)=>{
     try {
        const result = await userModel.deleteOne({id});
console.log(result);
return result
     } catch (error) {
        
     }
    }
}

module.exports = User;