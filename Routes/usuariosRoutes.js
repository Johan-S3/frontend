import express from "express";
import UsuariosController from "../Controller/UsuariosController.js";

const router = express.Router();

router.get('/', UsuariosController.getAllUsuarios);

router.get('/:id', UsuariosController.getUsuario);

router.post('/', UsuariosController.createUsuario);

router.put('/:id', UsuariosController.updateUsuario);

router.patch('/:id', UsuariosController.updateParcialUsuario);

router.delete('/:id', UsuariosController.deleteUsuario);

export default router;
