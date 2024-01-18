import express from "express";
import router from "./BackendPablo/usuario/infrastructure/controller/Usuario.router";
import {routerLibro} from "./BackendPablo/libros/infrastructure/controller/Libro.router";

const app = express();
const port = 8080;


app.use(express.json());
app.use("/usuarios", router)
app.use("/libros", routerLibro)

app.set('view engine','ejs');
app.set('views','./views')

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});