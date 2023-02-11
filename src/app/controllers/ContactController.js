/* eslint-disable object-curly-newline */
const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'user not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const contactExist = await ContactRepository.findByEmail(email);
    if (contactExist) {
      return response.status(400).json({ error: 'Email already in use' });
    }

    const contact = await ContactRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    const contactExists = await ContactRepository.findById(id);
    if (!contactExists) {
      response.status(404).json({ error: 'user not found' });
    }

    const contactExist = await ContactRepository.findByEmail(email);
    if (contactExist && contactExist.id !== id) {
      return response.status(400).json({ error: 'Email already in use' });
    }

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const contact = await ContactRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'user not found' });
    }

    await ContactRepository.deleteById(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
