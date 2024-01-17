import express from "express";
import UsuarioUseCases from "../../application/UsuarioUseCases";
import UsuarioRepositoryPostgres from "../db/Usuario.postgres";
import Usuario from "../../domain/Usuario";


const router=express.Router();
const usuarioUseCases:UsuarioUseCases=new UsuarioUseCases(new UsuarioRepositoryPostgres());

router.get("/",async(req,res)=>{
    try{
        const usuarios=await usuarioUseCases.getAllUsuarios();
        res.json(usuarios)
    }catch{
        res.status(500).json({ error: "Internal Server Error" });
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const usuarioId=parseInt(req.params.id);
        const usuarioBuscado=await usuarioUseCases.getUsuarioPorId(usuarioId);
        res.json(usuarioBuscado);
    }  catch(error){
        res.status(500).json({ error: "Internal Server Error" });
    } 
})
router.post("/",async(req,res)=>{
    try{
        const usuarioNuevo: Usuario=req.body;
        console.log(usuarioNuevo);
        const usuario= await usuarioUseCases.createUsuario(usuarioNuevo);
        res.json(usuario);
    }catch (error){
        res.status(500).send(error);
       }
})

router.put("/:id", async(req,res)=>{
    try{
        const usuarioId=parseInt(req.params.id);
        const password=req.body;
        const usuarioCambiado=await usuarioUseCases.updateUsuario(usuarioId,password);
        res.status(201).json(usuarioCambiado);
    }catch (error){
        res.status(500).json({error: "Internal Server Error"} );
       }
})

router.delete("/:id",async(req,res)=>{
    try{
        const usuarioId=parseInt(req.params.id);
        const usuario=await usuarioUseCases.deleteUsuarioPorId(usuarioId);
        res.json(usuario);
    }catch (error) {
        res.status(500).send(error);
    }
})


export default router
