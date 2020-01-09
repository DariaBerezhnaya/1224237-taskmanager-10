import {Colors} from '../const';
import {generateRandomBoolean} from '../utils';

const DescriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

const DefaultRepeatingDays = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false,
};

const Tags = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`
];

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = generateRandomBoolean() ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 7);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {
    'mo': generateRandomBoolean(),
  });
};

const generateTags = (tags) => {
  return tags
    .filter(() => generateRandomBoolean())
    .slice(0, 3);
};

const generateTask = () => {
  const randomBoolean = generateRandomBoolean();
  const dueDate = randomBoolean ? null : getRandomDate();

  return {
    description: getRandomArrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
    tags: new Set(generateTags(Tags)),
    color: getRandomArrayItem(Colors),
    isFavorite: generateRandomBoolean(),
    isArchive: generateRandomBoolean(),
  };
};

const generateTasks = (count) => {
  let taskArray = [];
  for (let i = 0; i < count; i++) {
    taskArray.push(generateTask());
  }

  return taskArray;
};

export {generateTask, generateTasks};
