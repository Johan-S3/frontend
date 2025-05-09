import express from "express";
import GenerosController from "../Controller/GenerosController.js";

const router = express.Router();

router.get('/', GenerosController.getAllGeneros);

router.get('/:id', GenerosController.getGenero);

router.post('/', GenerosController.createGenero);

router.put('/:id', GenerosController.updateGenero);

router.patch('/:id', GenerosController.updateParcialGenero);

router.delete('/:id', GenerosController.deleteGenero);

export default router;
