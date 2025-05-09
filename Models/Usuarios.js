import connection from "../Utils/db.js";

class Usuarios {
  /**
   * Metodo para obtener los registros de la base de datos
   * @returns {Array} Listado de los usuarios de un arreglo.
   */
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM usuarios");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener los usuarios.")
    }
  }

  async getById(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM usuarios WHERE id_usuario = ?", [id]);
      return rows;
    } catch (error) {
      throw new Error("Error al obtener el usuario.")
    }
  }

  async create(nombres, apellidos, telefono, id_ciudad, documento, usuario, contrasena, id_genero) {
    try {
        
        const [result] = await connection.query("INSERT INTO usuarios(nombres, apellidos, telefono, id_ciudad, documento, usuario, contrasena, id_genero) values (?, ?, ?, ?, ?, ?, ?, ?)", [nombres, apellidos, telefono, id_ciudad, documento, usuario, contrasena, id_genero]);
        return {
        id_usuario: result.insertId,
        nombres,
        apellidos, 
        telefono,
        id_ciudad,
        documento,
        usuario,
        contrasena,
        id_genero
      }
    } catch (error) {
      throw new Error("Error al crear el usuario.")
    }
  }

  async update(nombres, apellidos, telefono, id_ciudad, documento, usuario, contrasena, id_genero, id) {
    try {
      const [result] = await connection.query("UPDATE usuarios SET nombres = ?, apellidos = ?, telefono = ?, id_ciudad = ?, documento = ?, usuario = ?, contrasena = ?, id_genero = ? WHERE id_usuario = ?", [nombres, apellidos, telefono, id_ciudad, documento, usuario, contrasena, id_genero, id]);
      if (result.affectedRows  === 0) throw new Error("Usuario no encontrado");
      return {
        id,
        nombres,
        apellidos, 
        telefono,
        id_ciudad,
        documento,
        usuario,
        contrasena,
        id_genero
      }
    } catch (error) {
      throw new Error("Error al actualizar el usaurio.")
    }
  }

  async updateParcial(campos, id) {
    try {
      let sql = "UPDATE usuarios SET "
      for (let i = 0; i < Object.keys(campos).length; i++) {
        let key = Object.keys(campos)[i];
        sql += `${key} = "${campos[key]}"`;
        if (i != Object.keys(campos).length - 1) sql += ", ";
      }
      sql += ` WHERE id_usuario = ${id}`

      const [result] = await connection.query(sql);
      if (result.affectedRows  === 0) {
        return {
          mensaje: "Usuario no encontrado"
        }
      }
      return {
        mensaje: "Usuario actualizado"
      }
    } catch (error) {
      throw new Error("Error al actualizar el usuario");
    }
  }

  async relacionConLenguajes(usuarioId){
    const [lenguajes_usuarios] = await connection.query("SELECT * FROM lenguaje_usuarios WHERE id_usuario = ?", [usuarioId]);
    return lenguajes_usuarios.length > 0;
  }

  async delete(id){
    try {
      const usuariosRelacionados = await this.relacionConLenguajes(id);

      if(usuariosRelacionados){
        return{
          mensaje: "No se puede eliminar el usuario, ya que está asociada a uno o más lenguajes"
        }
      }
      const [result] = await connection.query("DELETE FROM usuarios WHERE id_usuario = ?", [id]);
      if (result.affectedRows  === 0){
        return {
          mensaje: "Usuario no encontrado"
        }
      }
      return {
        mensaje: "Usuario eliminado"
      }
    } catch (error) {
      throw new Error("Error al eliminar el usuario");
    }
  }
}

export default Usuarios;