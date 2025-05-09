import Usuarios from "../Models/Usuarios.js";

class UsuariosController {
  static getAllUsuarios = async (req, res) => {
    const objUsuario = new Usuarios();
    const usuarios = await objUsuario.getAll();
    res.json(usuarios);
  }

  static getUsuario = async (req, res) => {
    const { id } = req.params;
    const objUsuario = new Usuarios();
    const usuarios = await objUsuario.getById(id);
    res.json(usuarios);
  }

  static createUsuario = async (req, res) => {
    try {
      const { nombres, apellidos, telefono, id_ciudad, documento, usuario, contrasena, id_genero } = req.body;
      const objUsuario = new Usuarios();
      const usuarios = await objUsuario.create(nombres, apellidos, telefono, id_ciudad, documento, usuario, contrasena, id_genero);
      res.status(201).json(usuarios)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombres, apellidos, telefono, id_ciudad, documento, usuario, contrasena, id_genero } = req.body;
    try {
      const objUsuario = new Usuarios();
      const usuarios = await objUsuario.update(nombres, apellidos, telefono, id_ciudad, documento, usuario, contrasena, id_genero, id);
      res.status(201).json(usuarios)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateParcialUsuario = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const objUsuario = new Usuarios();
      const usuarios = await objUsuario.updateParcial(campos, id);
      res.status(201).json(usuarios)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static deleteUsuario = async (req, res) => {
    const { id } = req.params;
    try {
      const objUsuario = new Usuarios();
      const usuarios = await objUsuario.delete(id);
      res.status(201).json(usuarios)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UsuariosController;