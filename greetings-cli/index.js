const moment = require("moment");

const DEFAULT_GREETING = 'Hello';
const DEFAULT_NAME = 'guest';
const DEFAULT_LANGUAGE = 'en';

const GREETINGS = {
  en: 'Hello',
  am: 'Բարև',
  es: 'Hola',
  fr: 'Bonjour',
};

const getCurrentDate = () => {
  return moment().format('YYYY-MM-DD HH:mm:ss');
};

const getDayOfWeek = () => {
  return moment().format('dddd');
};

const getGreeting = (name, greeting, level, language) => {
  const greet = greeting !== DEFAULT_GREETING ? greeting : GREETINGS[language] || GREETINGS[DEFAULT_LANGUAGE];
  let message = `${greet}, ${name}!`;
  if (level >= 2) {
    message += ` (Date and Time: ${getCurrentDate()})`;
  }
  if (level >= 3) {
    message += ` (Day of the Week: ${getDayOfWeek()})`;
  }
  return message;
};

const parseArgs = () => {
  const arguments = process.argv.slice(2);
  const parsedArgs = {
    name: DEFAULT_NAME,
    level: 1,
    greeting: DEFAULT_GREETING,
    language: DEFAULT_LANGUAGE,
  };

  for (let i = 0; i < arguments.length; i++) {
    switch (arguments[i]) {
      case '--name':
      case '-n':
        parsedArgs.name = arguments[++i];
        break;
      case '--level':
      case '-l':
        parsedArgs.level = parseInt(arguments[++i], 10);
        break;
      case '--greeting':
      case '-g':
        parsedArgs.greeting = arguments[++i];
        break;
      case '--language':
      case '-lang':
        parsedArgs.language = arguments[++i];
        break;
    }
  }

  return parsedArgs;
};

const args = parseArgs();
const { name, greeting, level, language } = args;

const greetingMessage = getGreeting(name, greeting, level, language);

console.log(greetingMessage);
