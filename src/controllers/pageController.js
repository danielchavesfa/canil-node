import createMenuObject from '../helpers/createMenuObject.js';
import Pet from '../models/pet.js';

export default class PageController {
  static home(req, res) {
    let list = Pet.getAll();
    const banner = {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    };
    const menu = createMenuObject('all');
    
    res.render('pages/page', { banner, menu, list });
  }

  static dogs(req, res) {
    let list = Pet.getFromType('dog');
    const banner = {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    };
    const menu = createMenuObject('dog');

    res.render('pages/page', { banner, menu, list });
  }

  static cats(req, res) {
    let list = Pet.getFromType('cat');
    const banner = {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    };
    const menu = createMenuObject('cat');

    res.render('pages/page', { banner, menu, list });
  }

  static fishes(req, res) {
    let list = Pet.getFromType('fish');
    const banner = {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    };
    const menu = createMenuObject('fish');

    res.render('pages/page', { banner, menu, list });
  }
}