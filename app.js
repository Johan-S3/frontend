import express from "express";
import bodyParser from "body-parser";


import lenguajeRouter from "./Routes/lenguajesRoutes.js";
import ciudadesRouter from "./Routes/ciuadadesRoutes.js";

export const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }))

app.use("/lenguajes", lenguajeRouter)
app.use("/ciudades", ciudadesRouter)

app.listen(3000, () => {
  console.log("Server is runing...");
});