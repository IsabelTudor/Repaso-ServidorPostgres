import Usuario from "./Usuario";
export default interface UsuarioRepository{
    getAllUsuarios():Promise<Usuario[]|undefined>;
    getUsuarioPorId(id:number):Promise<Usuario| undefined>;
    createUsuario(usuario:Usuario):Promise<Usuario[]|undefined>
    updateUsuario(usuario:Usuario):Promise<Usuario|undefined>
    deleteUsuarioPorId(id:number):Promise<Usuario[]|undefined>
}
