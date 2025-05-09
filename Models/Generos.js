import connection from "../Utils/db.js";

class Generos {
  /**
   * Metodo para obtener los registros de la base de datos
   * @returns {Array} Listado de los generos de un arreglo.
   */
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM generos");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener los generos.")
    }
  }

  async getById(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM generos WHERE id_genero = ?", [id]);
      return rows;
    } catch (error) {
      throw new Error("Error al obtener el genero.")
    }
  }

  async create(nombre) {
    try {
      const [result] = await connection.query("INSERT INTO generos(genero) values (?)", [nombre]);
      return {
        id: result.id,
        nombre
      }
    } catch (error) {
      throw new Error("Error al crear el genero.")
    }
  }

  async update(nombre, id) {
    try {
      const [result] = await connection.query("UPDATE generos SET genero = ? WHERE id_genero = ?", [nombre, id]);
      if (result.affectedRows  === 0) throw new Error("Genero no encontrado");
      return {
        id,
        nombre
      }
    } catch (error) {
      throw new Error("Error al actualizar el genero.")
    }
  }

  async updateParcial(campos, id) {
    try {
      let sql = "UPDATE generos SET "
      for (let i = 0; i < Object.keys(campos).length; i++) {
        let key = Object.keys(campos)[i];
        sql += `${key} = "${campos[key]}"`;
        if (i != Object.keys(campos).length - 1) sql += ", ";
      }
      sql += ` WHERE id_genero = ${id}`

      const [result] = await connection.query(sql);
      if (result.affectedRows  === 0) {
        return {
          mensaje: "Genero no encontrado"
        }
      }
      return {
        mensaje: "Genero actualizado"
      }
    } catch (error) {
      throw new Error("Error al actualizar el genero");
    }
  }

  async relacionConUsuarios(generoId){
    const [usuarios] = await connection.query("SELECT * FROM usuarios WHERE id_genero = ?", [generoId]);
    return usuarios.length > 0;
  }

  async delete(id){
    try {
      const generoRelacionado = await this.relacionConUsuarios(id);

      if(generoRelacionado){
        return{
          mensaje: "No se puede eliminar el genero, ya que está asociada a uno o más usuarios"
        }
      }
      const [result] = await connection.query("DELETE FROM generos WHERE id_genero = ?", [id]);
      if (result.affectedRows  === 0){
        return {
          mensaje: "Genero no encontrado"
        }
      }
      return {
        mensaje: "Genero eliminado"
      }
    } catch (error) {
      throw new Error("Error al eliminar el genero");
    }
  }
}

export default Generos;