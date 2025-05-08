import connection from "../Utils/db.js";

class Ciudades {
  /**
   * Metodo para obtener los registros de la base de datos
   * @returns {Array} Listado de las categorias de un arreglo.
   */
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM ciudades");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las ciudades.")
    }
  }

  async getById(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM ciudades WHERE id_ciudad = ?", [id]);
      return rows;
    } catch (error) {
      throw new Error("Error al obtener la ciudad.")
    }
  }

  async create(nombre) {
    try {
      const [result] = await connection.query("INSERT INTO ciudades(nombre_ciudad) values (?)", [nombre]);
      return {
        id: result.id,
        nombre
      }
    } catch (error) {
      throw new Error("Error al crear la ciudad.")
    }
  }

  async update(nombre, id) {
    try {
      const [result] = await connection.query("UPDATE ciudades SET nombre_ciudad = ? WHERE id_ciudad = ?", [nombre, id]);
      if (result.affectedRows  === 0) throw new Error("Ciudad no encontrada");
      return {
        id,
        nombre
      }
    } catch (error) {
      throw new Error("Error al actualizar la ciudad.")
    }
  }

  async updateParcial(campos, id) {
    try {
      let sql = "UPDATE ciudades SET "
      for (let i = 0; i < Object.keys(campos).length; i++) {
        let key = Object.keys(campos)[i];
        sql += `${key} = "${campos[key]}"`;
        if (i != Object.keys(campos).length - 1) sql += ", ";
      }
      sql += ` WHERE id_ciudad = ${id}`

      const [result] = await connection.query(sql);
      if (result.affectedRows  === 0) {
        return {
          mensaje: "Ciudad no encontrada"
        }
      }
      return {
        mensaje: "Ciudad actualizada"
      }
    } catch (error) {
      throw new Error("Error al actualizar la ciudad");
    }
  }

  async relacionConUsuarios(ciudadId){
    const [usuarios] = await connection.query("SELECT * FROM usuarios WHERE id_ciudad = ?", [ciudadId]);
    return usuarios.length > 0;
  }

  async delete(id){
    try {
      const lenguajeRelacionado = await this.relacionConUsuarios(id);

      if(lenguajeRelacionado){
        return{
          mensaje: "No se puede eliminar la ciudad, ya que está asociada a uno o más usuarios"
        }
      }
      const [result] = await connection.query("DELETE FROM ciudades WHERE id_ciudad = ?", [id]);
      if (result.affectedRows  === 0){
        return {
          mensaje: "Ciudad no encontrada"
        }
      }
      return {
        mensaje: "Ciudad eliminada"
      }
    } catch (error) {
      throw new Error("Error al eliminar la ciudad");
    }
  }
}

export default Ciudades;