import express from "express";
import bodyParser from "body-parser";


import lenguajeRouter from "./Routes/lenguajesRoutes.js";
import ciudadesRouter from "./Routes/ciuadadesRoutes.js";
import generosRouter from "./Routes/generosRoutes.js"
import usuariosRouter from "./Routes/usuariosRoutes.js"
import lenguajesUsuarios from "./Routes/lenguaje_usuarioRoutes.js"

export const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }))

app.use("/lenguajes", lenguajeRouter)
app.use("/ciudades", ciudadesRouter)
app.use("/generos", generosRouter)
app.use("/usuarios", usuariosRouter)
app.use("/lenguajesUsuarios", lenguajesUsuarios)

app.listen(3000, () => {
  console.log("Server is runing...");
});