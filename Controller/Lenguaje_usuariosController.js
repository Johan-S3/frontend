import Lenguaje_usuarios from "../Models/Lenguaje_usuarios.js";

class Lenguaje_usuariosController {
  static getAllDatas = async (req, res) => {
    const objLenguaje_usuario = new Lenguaje_usuarios();
    const lenguaje_usuarios = await objLenguaje_usuario.getAll();
    res.json(lenguaje_usuarios);
  }

  static getData = async (req, res) => {
    const { id } = req.params;
    const objLenguaje_usuario = new Lenguaje_usuarios();
    const lenguaje_usuarios = await objLenguaje_usuario.getById(id);
    res.json(lenguaje_usuarios);
  }

  static createData = async (req, res) => {
    try {
      const { id_usuario, id_lenguaje } = req.body;
      const objLenguaje_usuario = new Lenguaje_usuarios();
      const lenguaje_usuarios = await objLenguaje_usuario.create(id_usuario, id_lenguaje);
      res.status(201).json(lenguaje_usuarios)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateData = async (req, res) => {
    const { id } = req.params;
    const { id_usuario, id_lenguaje } = req.body;
    try {
      const objLenguaje_usuario = new Lenguaje_usuarios();
      const lenguaje_usuarios = await objLenguaje_usuario.update(id_usuario, id_lenguaje, id);
      res.status(201).json(lenguaje_usuarios)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateParcialData = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const objLenguaje_usuario = new Lenguaje_usuarios();
      const lenguaje_usuarios = await objLenguaje_usuario.updateParcial(campos, id);
      res.status(201).json(lenguaje_usuarios)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static deleteData = async (req, res) => {
    const { id } = req.params;
    try {
      const objLenguaje_usuario = new Lenguaje_usuarios();
      const lenguaje_usuarios = await objLenguaje_usuario.delete(id);
      res.status(201).json(lenguaje_usuarios)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default Lenguaje_usuariosController;