var data = {
  'Рыбы': {
    'Форель': {},
    'Щука': {}
  },

  'Деревья': {
    'Хвойные': {
      'Лиственница': {},
      'Ель': {}
    },
    'Цветковые': {
      'Берёза': {},
      'Тополь': {}
    }
  }
};

function isEmpty(obj) {
  return !!Object.keys(obj).length;
}

function createHTML(container, obj) {
  const mainHTML = document.createElement('ul');

  for (let key in obj) {
    const element = document.createElement('li');
    element.append(key);
    mainHTML.append(element);
    if (!isEmpty(obj[key])) {
      createHTML(mainHTML, obj[key]);
    }
  }
  container.append(mainHTML);
}

createHTML(document.getElementById('tree'), data);
