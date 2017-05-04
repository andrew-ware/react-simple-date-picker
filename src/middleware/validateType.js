const irregularTypes = ['Date'];

function Validator(inp, typeString) {
  const throwErrorIfNot = precondition => {
    if(!precondition) {
      throw new Error('Invalid type supplied. ' +
        `Please use a ${typeString} type instead.`);
    }
  };

  this.Date = () => {
    throwErrorIfNot(inp instanceof Date);
    return true;
  }

  this.irregularValidator = () => {
    if (this[typeString]) { // check if custom validator method is defined
      return this[typeString](inp); // execute respective method
    }
    throw new Error('Invalid type supplied to validator.');
  };

  this.defaultValidator = () => {
    throwErrorIfNot(typeof inp === typeString);
    return true;
  };
}

const validateType = (inp, typeString) => {
  const validator = new Validator(inp, typeString);
  if (irregularTypes.includes(typeString)) {
    return validator.irregularValidator();
  }
  return validator.defaultValidator();
};

export default validateType;
