const asyncHandler = require('express-async-handler');
const contact =require("../models/contectmodel");


/* get all contacts
route get /api/contacts
public access*/
const getcontacts=asyncHandler(async(req,res)=>{
const contacts = await contact.find({user_id:req.user.id});

    res.json(contacts);
});

/* Create new contacts
route post/api/contacts
public access*/
const cretecontacts=asyncHandler(async(req,res)=>{
console.log("the body",req.body);

const {name,email,phone}=req.body;
if (!name|| !email || !phone){
    res.status(400);
    throw new Error("All fields should be filled up")
}

const Newcontact = await contact.create({
    name,
    email,
    phone,
    user_id:req.user.id,
});


    res.status(201).json(Newcontact);
});

/* update the particular contects
route put /api/contacts/:id
public access*/
const updatedContacts=asyncHandler(async(req,res)=>{
    const foundcontect =await contact.findById(req.params.id);
    if(!foundcontect){
        res.status(404);
        throw new Error("contact not found");
    }
if(contact.user_id.toString() !==req.user.id){
    res.status(403);
    throw new Error("User can't change other users contects")
}

    const updatedContacts = await contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.status(200).json(updatedContacts);
});


/* get contact
route get /api/contacts/:id
public access*/
const getcontact=asyncHandler(async(req,res)=>{
    const foundcontect =await contact.findById(req.params.id);
    if(!foundcontect){
        res.status(404);
        throw new Error("contact not found");
    }

    res.json(foundcontect);
});


/*delete the  contacts
route delete/api/contacts/delete/:id
public access*/
const deletecontect=asyncHandler(async(req,res)=>{
    const foundcontect =await contact.findById(req.params.id);
    if(!foundcontect){
        res.status(404);
        throw new Error("contact not found");
    }
    await contact.deleteOne({ _id: req.params.id });

    res.json({ message: "Contact deleted successfully" });
  

});

module.exports={getcontacts,
    deletecontect
    ,getcontact,
    updatedContacts,cretecontacts};