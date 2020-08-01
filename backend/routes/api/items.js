const express=require('express');
const router=express.Router();

//Item Model
const Item=require('../../models/Item');
// @route Get api/items
// @desc Get all items
//Access public 
router.get('/',(req,res)=>{
    Item.find()
    .sort({date:-1})// desceding order
    .then(item=>res.json(item))
}); 

// @route post api/items
// @desc Create a item
//Access public 

router.post('/',(req,res)=>{
    const newItem=new Item({
        name:req.body.name
    });
    newItem.save().then(item=>res.json(item));
}); 

// @route DELETE api/items
// @desc delete item
//Access public 

router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(item=>item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}));
}); 
module.exports=router;