import executeQuery from "../../../context/postgres.conexion";
import Libro from "../../domain/LIbro";
import LibroRepository from "../../domain/LibroRepository";

export default class LibroRepositoryPostgres implements LibroRepository{
    async getAllLibros(): Promise<Libro[] | undefined> {
        const libros:Libro[]=[];
        const sql=`SELECT * FROM libros`;
        const librosFromDB:any[]= await executeQuery(sql);
        for(const libro of librosFromDB){
            const libroCogido:Libro={
                id:libro.id,
                titulo:libro.titulo,
                autor:libro.autor,
                usuario:libro.usuario,
                fechaDevolucion:libro.fechaDevolucion
            }
            libros.push(libroCogido)
        }
        return librosFromDB
    }
    async getLibroPorIdLibro(idLibro: number): Promise<Libro | undefined> {
        try{
            const sql=`select * from libros where id='${idLibro}'`;
            const librosFromDB:any= await executeQuery(sql);
            if(!librosFromDB) return undefined;
            if(librosFromDB.length>0){
                const item=librosFromDB[0];
                const libro: Libro={
                    id:item.id,
                    titulo:item.titulo,
                    autor:item.autor,
                    usuario:item.usuario,
                    fechaDevolucion:item.fechaDevolucion
                }
                return libro
            }
        }catch(error){
            console.error("Error al obtener el usuario por ID:", error);
        }
    }
    async getAllPorIdUsuario(idUsuario: number): Promise<Libro[] | undefined> {
        try{
            const sql=`select * from libros where usuario='${idUsuario}'`;
            const libros:any[]=[];
            const librosFromDB:any[]= await executeQuery(sql);
            for(const libro of librosFromDB){
                const libroCogido:Libro={
                    id:libro.id,
                    titulo:libro.titulo,
                    autor:libro.autor,
                    usuario:libro.usuario,
                    fechaDevolucion:libro.fechaDevolucion
                }
                libros.push(libroCogido)
            }
            return libros;
            
        }catch(error){
            console.error("Error al obtener los libros del usuario por ID:", error);
        }
    }
    async createLibro(libro: Libro): Promise<Libro[] | undefined> {
        try{
            const sql=`INSERT INTO public.libros(titulo, autor, usuario, "fechaDevolucion")
            VALUES ('${libro.titulo}', '${libro.autor}', ${libro.usuario}, '${libro.fechaDevolucion}');`
            await executeQuery(sql);
            return this.getAllLibros();
        }catch(error){
            console.error("No se pudo añadir el usuario")
        }

    }
    async prestarLibro(idLibro: number, idUsuario: number): Promise<Libro[] | undefined> {
        try{
            const sql=`UPDATE libros SET usuario='${idUsuario}' where id='${idLibro}'`;
            await executeQuery(sql);
            return this.getAllLibros()
        }catch{
            console.error("No se ha podido prestar el libro")
        }
        
    }
    async devolverLibro(idLibro: number): Promise<Libro[] | undefined> {
        try{
            const sql=`UPDATE libros SET usuario=0 where id='${idLibro}'`
            await executeQuery(sql);
            return this.getAllLibros()
        }catch{
            console.error("No se ha podido devolver el libro");}
    }
    async deleteLibro(idLibro: number): Promise<Libro | undefined> {
        try{
            const sql=`DELETE FROM libros
            WHERE id='${idLibro}';`
            await executeQuery(sql);
            return this.getLibroPorIdLibro(idLibro);
        }catch{
            console.error("No se ha podido devolver el libro");}
    }

}