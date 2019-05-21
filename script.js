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

function isEmpty (obj) {return Object.keys(obj).length > 0 ? false : true}

function createHTML (container, obj) {
  let mainHTML = document.createElement('ul');
  
  for (let key in obj) {
    let element = document.createElement('li');
    element.append(key)
    mainHTML.append(element)
    if (!isEmpty(obj[key])) {
      createHTML(mainHTML, obj[key]);
    }
  }
  container.append(mainHTML)
}


createHTML(document.getElementById('tree'), data);
