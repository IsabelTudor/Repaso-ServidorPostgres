import express from "express";
const router=express.Router();
import UsuarioUseCases from "../../application/UsuarioUseCases";
import UsuarioRepository from "../../domain/UsuarioRepository";
import UsuarioRepositoryPostgres from "../db/Usuario.postgres";

const usuarioRepository:UsuarioRepository=new UsuarioRepositoryPostgres();
const usuarioUseCases:UsuarioUseCases=new UsuarioUseCases(usuarioRepository);
