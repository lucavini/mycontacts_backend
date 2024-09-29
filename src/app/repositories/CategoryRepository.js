const db = require('../../database');

class CategoryRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy === 'ASC' ? 'ASC' : 'DESC';
    const rows = await db.query(
      `SELECT * FROM categories ORDER BY name ${direction}`
    );

    return rows;
  }

  async create({ name }) {
    const sql = `INSERT INTO categories(name) VALUES('${name}') RETURNING *;`;

    const [row] = await db.query(sql);
    return row;
  }
}

module.exports = new CategoryRepository();
