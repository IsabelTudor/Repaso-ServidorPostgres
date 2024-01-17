import UsuarioRepository from "../../domain/UsuarioRepository";
import Usuario from "../../domain/Usuario";
import executeQuery from "../../../context/postgres.conexion";
export default class UsuarioRepositoryPostgres implements UsuarioRepository{
    async getAllUsuarios(): Promise<Usuario[] | undefined> {
        const usuarios: Usuario[]=[]
        const sql="SELECT * FROM usuarios";
        const usuariosFromDB:any []=await executeQuery(sql);
        for(const usuario of usuariosFromDB){
            const usuarioCogido: Usuario={
                id:usuario.id,
                nombre:usuario.nombre,
                apellidos:usuario.apellidos,
                usuario:usuario.usuario,
                password:usuario.password,
                email:usuario.email,
                news:usuario.news
            }
            usuarios.push(usuarioCogido)
        }
        throw new Error("Method not implemented.");
    }
/*TODO {
    hasta que no te traigas los libros por el id del usuario no puedes hacer los get
}*/
    async getUsuarioPorId(id: number): Promise<Usuario | undefined> {
        try{
        const sql=`SELECT * FROM public.usuarios where id='${id}'`
        const usuariosFromDB:any[]=await executeQuery(sql);
        if(!usuariosFromDB) return undefined;
        if(usuariosFromDB.length>0){
            const item=usuariosFromDB[0];
            const usuario:Usuario={
                id:item.id,
                nombre:item.nombre,
                apellidos:item.apellidos,
                usuario:item.usuario,
                password:item.password,
                email:item.email,
                news:item.news
            }
            return usuario;
            }
        }catch(error){
            console.error("Error al obtener el usuario por ID:", error);
        }
    }

    async createUsuario(usuario: Usuario): Promise<Usuario[] | undefined> {
        const sql=`INSERT INTO public.usuarios( nombre, apellidos, usuario, password, email, news) VALUES ( '${usuario.nombre}', '${usuario.apellidos}', '${usuario.usuario}', '${usuario.password}', '${usuario.email}', ${usuario.news});`
        await executeQuery(sql);
        return this.getAllUsuarios()
    }
    async updateUsuario(id:number, password:string): Promise<Usuario | undefined> {
        const sql=`UPDATE public.usuarios
        SET password='${password}' WHERE id='${id}';`;
        await executeQuery(sql);
        return this.getUsuarioPorId(id);
    }
    async deleteUsuarioPorId(id: number): Promise<Usuario[] | undefined> {
        const sql=`DELETE FROM public.usuarios
        WHERE id='${id}';`
        await executeQuery(sql);
        return this.getAllUsuarios();
    }

}