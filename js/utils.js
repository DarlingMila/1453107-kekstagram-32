const DEBOUNCE_DELAY = 500;


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getArrayOfRandomNumbers = (amount, maxNumber) => {
  const numbers = [];

  while (numbers.length < amount) {

    let newNumber = getRandomNumber(0, maxNumber);
    while (numbers.includes(newNumber)) {
      newNumber = getRandomNumber(0, maxNumber);
    }

    numbers.push(newNumber);
  }

  return numbers;
};

const getRandomItemFromArray = (array) => array[getRandomNumber(0, array.length - 1)];

const createArrayOfObjects = (length, objConstructor) => Array.from({length}, objConstructor);

const getId = () => {
  let i = 1;
  return function () {
    return i++;
  };
};

const getUrl = (folder, format) => function (title) {
  return `${folder}/${title}.${format}`;
};

const isEscapeKey = (evt) => evt.code === 'Escape';

const hasAllowedTagName = (element, tagNames) => tagNames.includes(element.tagName);

const existingChildren = (parent, tagName) => Array
  .from(parent.children)
  .filter((element) => hasAllowedTagName(element, [tagName]));

function debounce (callback, timeoutDelay = DEBOUNCE_DELAY) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {
  getRandomNumber,
  getArrayOfRandomNumbers,
  getRandomItemFromArray,
  createArrayOfObjects,
  getId,
  getUrl,
  isEscapeKey,
  hasAllowedTagName,
  existingChildren,
  debounce
};
