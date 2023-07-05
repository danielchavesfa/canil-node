import Data from '../database/data.js';

export default class Pet {
  static getAll() {
    return Data;
  }

  static getFromType(type = '') {
    return Data.filter(item => item.type === type);
  }

  static getFromName(name) {
    return Data.filter(item => 
      item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
  }
}