const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

/**
 * Получение слово "раз" в правильной форме в зависимости от числительного
 * @param count {Number} Количество выделений
 * @returns {String} 
 */
export function getPlural(count) {
  const lastDigit = count % 10;
  const preLastDigit = Math.trunc(count / 10) % 10;
  console.log(preLastDigit);
  if([2, 3, 4].indexOf(lastDigit) !== -1 && preLastDigit !== 1) {
    return "раза";
  }
  return "раз";
}
