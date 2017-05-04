const nonRegularTypes = ['Date'];

const invalidTypeError = typeString => new Error('Invalid type supplied. ' +
      `Please use a ${typeString} type instead.`);

function Validator(inp, typeString) {
  this.Date = inp => inp instanceof Date || invalidTypeError(typeString);
  this.defaultValidator = inp => typeof inp === typeString
    || invalidTypeError(typeString);
}

const validateType = (inp, typeString) => {
  const validator = new Validator();
  if (nonRegularTypes.includes(typeString)) {
    if (validator[typeString]) {
      return validator[typeString](inp); // custom validator based on typeString
    }
    throw new Error('Invalid type supplied to validator.');
  }
  return validator.defaultValidator(inp, typeString);
};

export default validateType;
