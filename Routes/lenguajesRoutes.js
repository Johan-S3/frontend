import express from "express";
import LenguajesController from "../Controller/lenguajesController.js";

const router = express.Router();

router.get('/', LenguajesController.getAllLenguajes);

router.get('/:id', LenguajesController.getLenguaje);

router.post('/', LenguajesController.createLenguaje);

router.put('/:id', LenguajesController.updateLenguaje);

router.patch('/:id', LenguajesController.updateParcialLenguaje);

router.delete('/:id', LenguajesController.deleteLenguaje);

export default router;
