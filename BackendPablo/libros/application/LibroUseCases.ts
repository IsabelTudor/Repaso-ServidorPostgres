import LibroRepository from "../domain/LibroRepository";
import Libro from "../domain/LIbro";
export default class LibroUseCases{
    private libroRepository: LibroRepository

    constructor(libroRepository:LibroRepository){
        this.libroRepository=libroRepository;
    }

    async getAllLibros(){
        return await this.libroRepository.getAllLibros()
    }
    async getLibroPorIdLibro(idLibro:number){
        return await this.libroRepository.getLibroPorIdLibro(idLibro)
    }
    async getAllPorIdUsuario(idUsuario:number){
        return await this.libroRepository.getAllPorIdUsuario(idUsuario)
    }
    async createLibro(libro: Libro){
        return await this.libroRepository.createLibro(libro)
    }
    async prestarLibro(idLibro:number,idUsuario:number){
        return await this.libroRepository.prestarLibro(idLibro,idUsuario)
    }
    async devolverLibro(idLibro:number){
        return await this.libroRepository.devolverLibro(idLibro)
    }
    async deleteLibro(idLibro:number){
        return await this.libroRepository.deleteLibro(idLibro)
    }
}