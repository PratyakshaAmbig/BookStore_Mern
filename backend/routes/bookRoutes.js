import express from "express";
import {Book} from "../models/booksmodel.js"
const router = express.Router();



router.post("/", async(req,resp)=>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return resp.status(200).json({message:"Send all required fields: title, author, publisher"})
        }
        const newBook = {
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        }
        const book = await Book.create(newBook)
        return resp.status(200).send(book)
    } catch (error) {
        console.log(error.message);
        resp.status(500).send({message:error.message})
    }
})

//Route for get all the books from database
router.get("/", async(req,resp)=>{
    try {
        const books = await Book.find();
        return resp.status(200).json({
            count:books.length,
            data:books
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({message:error.message})
    }
})

//Route for get one book from the database
router.get("/:id", async(req,resp)=>{
    try {
        
        const {id} = req.body;
        const books = await Book.findOne(id)
        return resp.status(200).json(books)
    } catch (error) {
        console.log(error.message);
        resp.status(500).json({message:error.message})
    }
})

//Route for Update books
router.patch("/:id", async(req,resp)=>{
   try {
    if(
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear
    ){
        return resp.status(200).send({message:"Send all required fields: title, author, publisher"})
    }
    const {id}= req.params;
    // const books = await Book.updateOne({_id:req.params.id},{$set:req.body})
    // return resp.status(200).json({message:books})
    const result = await Book.findByIdAndUpdate(id, req.body)
    if(!result){
        resp.status(400).json({message:"Book not found"})
    }
    else{
        resp.status(200).json({message:"Book Updated Successfully"})
    }
   } catch (error) {
    console.log(error.message)
    resp.status(500).json({message:error.message})
   }
})

//Route for delete book
router.delete("/:id", async(req,resp)=>{
    try {
        const{id} = req.params;
    const result = await Book.findByIdAndDelete(id);
    if(!result){
        resp.status(400).json({message:"Book not found"})
    }
    else{
        resp.status(200).json({message:"Book deleted successfully"})
    }
    } catch (error) {
        console.log(error.message)
        resp.status(500).json({message:error.message})
    }
})

export default router;  