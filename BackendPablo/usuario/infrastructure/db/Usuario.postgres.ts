import UsuarioRepository from "../../domain/UsuarioRepository";
import Usuario from "../../domain/Usuario";

export default class UsuarioRepositoryPostgres implements UsuarioRepository{
    async getAllUsuarios(): Promise<Usuario[] | undefined> {
        throw new Error("Method not implemented.");
    }
    async getUsuarioPorId(id: number): Promise<Usuario | undefined> {
        throw new Error("Method not implemented.");
    }
    async createUsuario(usuario: Usuario): Promise<Usuario[] | undefined> {
        throw new Error("Method not implemented.");
    }
    async updateUsuario(usuario: Usuario): Promise<Usuario | undefined> {
        throw new Error("Method not implemented.");
    }
    async deleteUsuarioPorId(id: number): Promise<Usuario[] | undefined> {
        throw new Error("Method not implemented.");
    }

}