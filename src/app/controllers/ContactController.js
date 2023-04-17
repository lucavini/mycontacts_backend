/* eslint-disable object-curly-newline */
const ContactRepository = require('../repositories/ContactRepository');
const isValidUUID = require('../Utils/isValidUUID');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await ContactRepository.findAll(orderBy);

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid user id' });
    }

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'contact not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    if (category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: 'Invalid category id' });
    }

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    if (email) {
      const contactExist = await ContactRepository.findByEmail(email);
      if (contactExist) {
        return response.status(400).json({ error: 'Email already in use' });
      }
    }

    const contact = await ContactRepository.create({
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid contact id' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: 'Invalid category id' });
    }

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const contactExists = await ContactRepository.findById(id);

    if (!contactExists) {
      response.status(404).json({ error: 'contact not found' });
    }

    if (email) {
      const contactExist = await ContactRepository.findByEmail(email);
      if (contactExist && contactExist.id !== id) {
        return response.status(400).json({ error: 'Email already in use' });
      }
    }

    const contact = await ContactRepository.update(id, {
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid contact id' });
    }

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'contact not found' });
    }

    await ContactRepository.deleteById(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
