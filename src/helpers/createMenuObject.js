export default function createMenuObject(activeMenu = '') {
  const menuItens = ['', 'all', 'dog', 'cat', 'fish'];
  return menuItens.reduce((acc, item) => {
    if (activeMenu === item) acc[item] = activeMenu === item;
    return acc;
  }, {});
}