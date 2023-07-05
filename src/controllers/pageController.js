export default class PageController {
  static home(req, res) {
    res.send('Página Home do PageController');
  }

  static dogs(req, res) {
    res.send('Página Dogs do PageController');
  }

  static cats(req, res) {
    res.send('Página Cats do PageController');
  }

  static fishes(req, res) {
    res.send('Página Fishes do PageController');
  }
}