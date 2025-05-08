import express from "express";
import CiudadesController from "../Controller/CiuadadesController.js";

const router = express.Router();

router.get('/', CiudadesController.getAllCiudades);

router.get('/:id', CiudadesController.getCiudad);

router.post('/', CiudadesController.createCiudad);

router.put('/:id', CiudadesController.updateCiudad);

router.patch('/:id', CiudadesController.updateParcialCiudad);

router.delete('/:id', CiudadesController.deleteCiudad);

export default router;
