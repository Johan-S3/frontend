import Lenguaje from "../Models/lenguaje.js";

class LenguajesController {
  static getAllLenguajes = async (req, res) => {
    const objLenguaje = new Lenguaje();
    const lenguajes = await objLenguaje.getAll();
    res.json(lenguajes);
  }

  static getLenguaje = async (req, res) => {
    const { id } = req.params;
    const objLenguaje = new Lenguaje();
    const lenguajes = await objLenguaje.getById(id);
    res.json(lenguajes);
  }

  static createLenguaje = async (req, res) => {
    try {
      const { lenguaje } = req.body;
      const objLenguaje = new Lenguaje();
      const lenguajes = await objLenguaje.create(lenguaje);
      res.status(201).json(lenguajes)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateLenguaje = async (req, res) => {
    const { id } = req.params;
    const { lenguaje } = req.body;
    try {
      const objLenguaje = new Lenguaje();
      const lenguajes = await objLenguaje.update(lenguaje, id);
      res.status(201).json(lenguajes)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateParcialLenguaje = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const objLenguaje = new Lenguaje();
      const lenguajes = await objLenguaje.updateParcial(campos, id);
      res.status(201).json(lenguajes)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static deleteLenguaje = async (req, res) => {
    const { id } = req.params;
    try {
      const objLenguaje = new Lenguaje();
      const lenguajes = await objLenguaje.delete(id);
      res.status(201).json(lenguajes)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default LenguajesController;