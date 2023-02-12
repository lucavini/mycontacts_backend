const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.params;
    const categories = await CategoryRepository.findAll(orderBy);

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'name in required' });
    }

    const category = await CategoryRepository.create({ name });

    response.json(category);
  }
}

module.exports = new CategoryController();
