import Libro from "./LIbro"
export default interface LibroRepository{
    getAllLibros():Promise<Libro[]|undefined>
    getLibroPorIdLibro(idLibro:number):Promise<Libro|undefined>
    getAllPorIdUsuario(idUsuario:number):Promise<Libro[]|undefined>
    createLibro(libro: Libro):Promise <Libro[]|undefined>
    prestarLibro(idLibro:number,idUsuario:number):Promise<Libro[]|undefined>
    devolverLibro(idLibro:number):Promise<Libro[]|undefined>
    deleteLibro(idLibro:number):Promise<Libro|undefined>
}