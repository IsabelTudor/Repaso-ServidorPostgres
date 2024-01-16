export default interface Usuario{
    id:number,
    nombre:string,
    apellidos: string,
    usuario:string,
    password:string,
    email:string,
    news:boolean,
    libros?:Array<any>
}