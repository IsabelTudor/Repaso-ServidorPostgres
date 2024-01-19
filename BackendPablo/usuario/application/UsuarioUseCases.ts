import UsuarioRepository from "../domain/UsuarioRepository";
import Usuario from "../domain/Usuario";
import LibroRepository from "../../libros/domain/LibroRepository";
export default class UsuarioUseCases{
    private usuarioRepository: UsuarioRepository;
    private libroRepository:LibroRepository;

    constructor(usuarioRepository: UsuarioRepository, libroRepository:LibroRepository){
        this.usuarioRepository=usuarioRepository;
        this.libroRepository=libroRepository;
    }

    async getAllUsuarios(){
        return await this.usuarioRepository.getAllUsuarios();
    }
    async getUsuarioPorId(id:number){
        try{
            let libros=await this.libroRepository.getAllPorIdUsuario(id);
            const usuario= await this.usuarioRepository.getUsuarioPorId(id)
            if(libros){
                if(usuario){
                    usuario.libros=libros
                }
        }
        return  usuario;

    }catch(error){
        throw error;
    }
}
    async createUsuario(usuario:Usuario){
        return await this.usuarioRepository.createUsuario(usuario);
    }
    async updateUsuario(id:number, password:string){
        return await this.usuarioRepository.updateUsuario(id, password);
    }
    async deleteUsuarioPorId(id:number){
        return await this.usuarioRepository.deleteUsuarioPorId(id);
    }

}