import connection from "../Utils/db.js";

class Lenguaje_usuarios {
  /**
   * Metodo para obtener los registros de la base de datos
   * @returns {Array} Listado de los usuarios de un arreglo.
   */
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM lenguaje_usuarios");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener los datos de la tabla.")
    }
  }

  async getById(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM lenguaje_usuarios WHERE id = ?", [id]);
      return rows;
    } catch (error) {
      throw new Error("Error al obtener el dato.")
    }
  }

  async create(id_usuario, id_lenguaje) {
    try {
        
        const [result] = await connection.query("INSERT INTO lenguaje_usuarios(id_usuario, id_lenguaje) values (?, ?)", [id_usuario, id_lenguaje]);
        return {
        id: result.insertId,
        id_usuario, 
        id_lenguaje
      }
    } catch (error) {
      throw new Error("Error al crear el dato.")
    }
  }

  async update(id_usuario, id_lenguaje, id) {
    try {
      const [result] = await connection.query("UPDATE lenguaje_usuarios SET id_usuario = ?, id_lenguaje = ? WHERE id = ?", [id_usuario, id_lenguaje, id]);
      if (result.affectedRows  === 0) throw new Error("Dato no encontrado");
      return {
        id,
        id_usuario, 
        id_lenguaje
      }
    } catch (error) {
      throw new Error("Error al actualizar el dato.")
    }
  }

  async updateParcial(campos, id) {
    try {
      let sql = "UPDATE lenguaje_usuarios SET "
      for (let i = 0; i < Object.keys(campos).length; i++) {
        let key = Object.keys(campos)[i];
        sql += `${key} = "${campos[key]}"`;
        if (i != Object.keys(campos).length - 1) sql += ", ";
      }
      sql += ` WHERE id = ${id}`

      const [result] = await connection.query(sql);
      if (result.affectedRows  === 0) {
        return {
          mensaje: "Dato no encontrado"
        }
      }
      return {
        mensaje: "Dato actualizado"
      }
    } catch (error) {
      throw new Error("Error al actualizar el Dato");
    }
  }

  async delete(id){
    try {
      const [result] = await connection.query("DELETE FROM lenguaje_usuarios WHERE id = ?", [id]);
      if (result.affectedRows  === 0){
        return {
          mensaje: "Dato no encontrado"
        }
      }
      return {
        mensaje: "Dato eliminado"
      }
    } catch (error) {
      throw new Error("Error al eliminar el dato");
    }
  }
}

export default Lenguaje_usuarios;