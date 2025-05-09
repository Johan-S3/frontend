import express from "express";
import Lenguaje_usuariosController from "../Controller/Lenguaje_usuariosController.js";

const router = express.Router();

router.get('/', Lenguaje_usuariosController.getAllDatas);

router.get('/:id', Lenguaje_usuariosController.getData);

router.post('/', Lenguaje_usuariosController.createData);

router.put('/:id', Lenguaje_usuariosController.updateData);

router.patch('/:id', Lenguaje_usuariosController.updateParcialData);

router.delete('/:id', Lenguaje_usuariosController.deleteData);

export default router;
