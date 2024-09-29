/* eslint-disable object-curly-newline */
const db = require('../../database');

class ContactRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT contacts.*, categories.name AS category_name 
      FROM contacts
      LEFT JOIN categories ON categories.id = contacts.category_id
      ORDER BY contacts.name ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
    SELECT contacts.*, categories.name AS category_name 
    FROM contacts 
    LEFT JOIN categories ON categories.id = contacts.category_id
    WHERE contacts.id = '${id}'`);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [
      email,
    ]);
    return row;
  }

  async create({ name, email, phone, category_id }) {
    const sql = `
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES('${name}','${email}','${phone}', '${category_id}') RETURNING *
    `;

    const row = await db.query(sql);

    return row;
  }

  async update(id, { name, email, phone, category_id }) {
    const sql = `
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES('${name}','${email}','${phone}', '${category_id}') RETURNING *
    `;

    const row = await db.query(sql);

    return row;
  }

  async deleteById(id) {
    const deleteOp = db.query(
      `
    DELETE FROM
    contacts WHERE id = $1`,
      [id]
    );
    return deleteOp;
  }
}

module.exports = new ContactRepository();
