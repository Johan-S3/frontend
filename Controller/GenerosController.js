import Generos from "../Models/Generos.js";

class GenerosController {
  static getAllGeneros = async (req, res) => {
    const objGenero = new Generos();
    const generos = await objGenero.getAll();
    res.json(generos);
  }

  static getGenero = async (req, res) => {
    const { id } = req.params;
    const objGenero = new Generos();
    const generos = await objGenero.getById(id);
    res.json(generos);
  }

  static createGenero = async (req, res) => {
    try {
      const { genero } = req.body;
      const objGenero = new Generos();
      const generos = await objGenero.create(genero);
      res.status(201).json(generos)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateGenero = async (req, res) => {
    const { id } = req.params;
    const { genero } = req.body;
    try {
      const objGenero = new Generos();
      const generos = await objGenero.update(genero, id);
      res.status(201).json(generos)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateParcialGenero = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const objGenero = new Generos();
      const generos = await objGenero.updateParcial(campos, id);
      res.status(201).json(generos)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static deleteGenero = async (req, res) => {
    const { id } = req.params;
    try {
      const objGenero = new Generos();
      const generos = await objGenero.delete(id);
      res.status(201).json(generos)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default GenerosController;