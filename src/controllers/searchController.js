import Pet from '../models/pet.js';
import createMenuObject from '../helpers/createMenuObject.js';

export default class SearchController {
  static search(req, res) {
    const menu = createMenuObject('');
    const query = req.query.q;
    const list = Pet.getFromName(query);

    if (!query) {
      res.redirect('/');
      return;
    }

    res.render('pages/page', { menu, list, query });
  }
}