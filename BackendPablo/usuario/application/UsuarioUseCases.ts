import UsuarioRepository from "../domain/UsuarioRepository";
import Usuario from "../domain/Usuario";
export default class UsuarioUseCases{
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository){
        this.usuarioRepository=usuarioRepository;
    }

    async getAllUsuarios(){
        return await this.usuarioRepository.getAllUsuarios();
    }
    async getUsuarioPorId(id:number){
        return await this.usuarioRepository.getUsuarioPorId(id);
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