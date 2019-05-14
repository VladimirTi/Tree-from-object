var data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

function createHTML (obj) {
  let temp = ''
  let mainHTML = ''
  for (let key in obj) {
    temp += `<li>${key}${createHTML(obj[key])}</li>`
    mainHTML = `<ul>${temp}</ul>`
  }
  return mainHTML
}

function createTree(element, obj) {
  element.innerHTML = createHTML(obj)
}

createTree(document.getElementById("tree"), data)