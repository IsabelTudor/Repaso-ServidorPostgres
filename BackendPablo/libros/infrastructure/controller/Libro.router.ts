import express from "express";
import LibroRepositoryPostgres from "../db/Libros.postgres";
import LibroUseCases from "../../application/LibroUseCases";
import Libro from "../../domain/LIbro";

const router=express.Router();
const libroUseCases: LibroUseCases=new LibroUseCases(new LibroRepositoryPostgres)

router.get("/",async(req,res)=>{
    try{
        const libros=await libroUseCases.getAllLibros();
        res.json(libros);
    }catch{
        res.status(500).json({ error: "Internal Server Error" });
    }
})
router.get("/:id",async (req,res) => {
    try{
        const idLibro=parseInt(req.params.id);
        const libroBuscado= await libroUseCases.getLibroPorIdLibro(idLibro);
        res.json(libroBuscado);
    }catch (error){
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/usuario/:id",async (req,res) => {
    try{
        const usuarioId=parseInt(req.params.id);
        const libros=await libroUseCases.getAllPorIdUsuario(usuarioId);
        res.json(libros)
    }catch (error){
        res.status(500).json({ error: "Internal Server Error" });
    }
})
router.post("/",async(req,res)=>{
    try{
    const libroNuevo:Libro=req.body;
    const libro=await libroUseCases.createLibro(libroNuevo);
    res.json(libro);
    }catch (error){
        res.status(500).send(error);
    }
})

export  {router as routerLibro};