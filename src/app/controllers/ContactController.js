class ContactController {
  index(request, response) {
    response.send('sended from Contact Controller');
  }

  show() {}

  store() {}

  update() {}

  delete() {}
}

module.exports = new ContactController();
