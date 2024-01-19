import express from "express";
import router from "./BackendPablo/usuario/infrastructure/controller/Usuario.router";
import {routerLibro} from "./BackendPablo/libros/infrastructure/controller/Libro.router";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./BackendPablo/swagger/swagger-output.json";

const app = express();
const port = 8080;


app.use(express.json());
app.use("/usuarios", router)
app.use("/libros", routerLibro)
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {explorer: true})
);

app.set('view engine','ejs');
app.set('views','./BackendPablo/views')

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});